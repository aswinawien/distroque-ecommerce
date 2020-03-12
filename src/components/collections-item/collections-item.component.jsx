import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../product-item/product-item.component";
import "./collections-item.styles.scss";

const CollectionsItem = ({ items, title }) => {
  return (
    <React.Fragment>
      <div className="collection-item">
        <h2 className="title">{title}</h2>
        <div className="collections-item">
          {items
            .filter((item, idx) => idx < 4)
            .map(item => (
              <ProductItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CollectionsItem;
