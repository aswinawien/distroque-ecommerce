import React from "react";

import CategoryGroup from "../../components/category-group/category-group.component";
import "./home.styles.scss";

const HomePage = () => (
  <React.Fragment>
    <div className="homepage">
      <CategoryGroup />
    </div>
  </React.Fragment>
);

export default HomePage;
