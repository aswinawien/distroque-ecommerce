import React from "react";
import PropTypes from "prop-types";

import "./product-item.styles.scss";
import AddButton from "../submit-button/submit-button.component";

const ProductItem = ({ name, id, price, imageUrl }) => {
  return (
    <div className="product-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{`USD ${price}`}</span>
      </div>
      <AddButton
        label={"Add to Cart"}
        inverted
        className="add-button"
        onClick={() => {
          console.log("added to cart!");
        }}
      />
    </div>
  );
};

export default ProductItem;
