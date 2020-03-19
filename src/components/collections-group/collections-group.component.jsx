import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsItem from "../collections-item/collections-item.component";
import "./component-group.styles.scss";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsGroup = () => {
  const collections = useSelector(state => selectCollectionsForPreview(state));
  console.log("collections", collections);
  return (
    <React.Fragment>
      <div className={"collections-group"}>
        {collections.map(({ id, ...props }) => {
          return <CollectionsItem key={id} {...props} />;
        })}
      </div>
    </React.Fragment>
  );
};
// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview
// });

export default CollectionsGroup;
