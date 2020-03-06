import React from "react";

const ShopPage = ({ location }) => {
  return (
    <React.Fragment>
      <h1>
        {location.pathname
          .split("/")[2]
          .toString()
          .toUpperCase()}
      </h1>
    </React.Fragment>
  );
};

export default ShopPage;
