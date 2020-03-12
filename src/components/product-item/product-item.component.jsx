import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./product-item.styles.scss";
import AddButton from "../submit-button/submit-button.component";
import { addCartItem } from "../../redux/cart/cart.actions";

const ProductItem = ({ item, addItem }) => {
  const { name, id, price, imageUrl } = item;
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
        onClick={() => addItem(item)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(ProductItem);
