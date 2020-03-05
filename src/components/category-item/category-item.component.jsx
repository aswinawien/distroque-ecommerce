import React from "react";
import PropTypes from "prop-types";

import "./category-item.styles.scss";

const CategoryItem = ({ title, subtitle, imageUrl }) => (
  <React.Fragment>
    <div className="category-item">
      <div className="content">
        <img src={imageUrl} />
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  </React.Fragment>
);

CategoryItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string
};

export default CategoryItem;
