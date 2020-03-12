import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsItem from "../collections-item/collections-item.component";
import "./component-group.styles.scss";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionsGroup = ({ collections }) => {
  return (
    <React.Fragment>
      <div className={"collections-group"}>
        {Object.keys(collections).map(item => {
          const { id, ...props } = collections[item];
          return <CollectionsItem key={id} {...props} />;
        })}
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsGroup);
