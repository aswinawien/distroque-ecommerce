import React from "react";

import CategoryGroup from "../../components/category-group/category-group.component";
import "./home.styles.scss";

import { categories } from "./../../mocks/categories";

const HomePage = () => (
  <React.Fragment>
    <div className="homepage">
      <CategoryGroup categories={categories} />
    </div>
  </React.Fragment>
);

export default HomePage;
