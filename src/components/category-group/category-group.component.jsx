import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CategoryItem from "./../category-item/category-item.component";
import "./category-group.styles.scss";

import { selectSections } from "../../redux/directory/directory.selectors";

const CategoryGroup = ({ sections }) => {
  console.log(sections);
  return (
    <React.Fragment>
      <div className="category-group">
        {sections.map(({ id, ...rest }) => (
          <CategoryItem key={id} {...rest} />
        ))}
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(CategoryGroup);
