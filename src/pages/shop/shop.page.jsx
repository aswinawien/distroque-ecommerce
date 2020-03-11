import React from "react";
import { Route } from "react-router-dom";

import CollectionsGroup from "../../components/collections-group/collections-group.component";
import { SHOP_DATA } from "../../mocks/shop-data";

const ShopPage = ({ location }) => {
  return (
    <React.Fragment>
      <Route
        path={`${location.pathname}`}
        render={({ location }) => {
          let collection = location.pathname.split("/")[2];
          if (collection) {
            return (
              <CollectionsGroup
                maxShown={
                  SHOP_DATA[
                    SHOP_DATA.map(({ routeName }) => routeName).indexOf(
                      collection
                    )
                  ].items.length
                }
                collections={SHOP_DATA.filter(
                  item => item.routeName === collection
                )}
              />
            );
          } else {
            return (
              <React.Fragment>
                <CollectionsGroup collections={SHOP_DATA} maxShown={4} />
              </React.Fragment>
            );
          }
        }}
      />
    </React.Fragment>
  );
};

export default ShopPage;
