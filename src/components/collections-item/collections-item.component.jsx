import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../product-item/product-item.component";
import "./collections-item.styles.scss";

const CollectionsItem = ({ items, title, maxShown }) => {
  return (
    <React.Fragment>
      <div className="collection-item">
        <h2 className="collections-title">{title}</h2>
        <div className="collections-item">
          {items
            .filter((item, idx) => idx < maxShown)
            .map(({ id, ...props }) => (
              <ProductItem key={id} {...props} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CollectionsItem;
