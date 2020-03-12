import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsGroup from "../../components/collections-group/collections-group.component";
import CollectionPage from "../collection/collection.page";
import { selectCollections } from "../../redux/shop/shop.selectors";
const ShopPage = ({ match }) => {
  return (
    <React.Fragment>
      <Route exact path={`${match.path}`} component={CollectionsGroup} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
