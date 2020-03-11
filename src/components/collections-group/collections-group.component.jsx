import React from "react";
import PropTypes from "prop-types";

import CollectionsItem from "../collections-item/collections-item.component";
import "./component-group.styles.scss";

const CollectionsGroup = ({ collections, maxShown }) => {
  return (
    <React.Fragment>
      <div className={"collections-group"}>
        {collections.map(({ id, ...props }) => (
          <CollectionsItem key={id} {...props} maxShown={maxShown} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CollectionsGroup;
