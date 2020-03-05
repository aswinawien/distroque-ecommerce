import React from "react";
import PropTypes from "prop-types";

import CategoryItem from "./../category-item/category-item.component";
import "./category-group.styles.scss";

const CategoryGroup = ({ categories }) => (
  <React.Fragment>
    <div className="category-group">
      {categories.map(({ id, size, ...rest }) => (
        <CategoryItem key={id} size={size} {...rest} />
      ))}
    </div>
  </React.Fragment>
);

CategoryGroup.propTypes = {
  categories: PropTypes.array
};

export default CategoryGroup;
