import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../product-item/product-item.component";

const CollectionsItem = ({ items, title, maxShown }) => {
  return (
    <React.Fragment>
      <h2 className="collections-title">{title}</h2>
      <div className="collections-item">
        {items
          .filter((item, idx) => idx < maxShown)
          .map(({ id, ...props }) => (
            <ProductItem key={id} {...props} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default CollectionsItem;
