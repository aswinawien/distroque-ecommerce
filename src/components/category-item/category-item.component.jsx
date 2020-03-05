import React from "react";
import PropTypes from "prop-types";

import "./category-item.styles.scss";

const CategoryItem = ({ title, subtitle, imageUrl, size }) => (
  <React.Fragment>
    <div className={`${size} category-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  </React.Fragment>
);

CategoryItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.any
};

export default CategoryItem;
