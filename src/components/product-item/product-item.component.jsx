import React from "react";
import PropTypes from "prop-types";

import "./product-item.styles.scss";

const ProductItem = ({ name, id, price, imageUrl }) => {
  return (
    <div className="product-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
