import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/home/home.page";
import ShopPage from "./pages/shop/shop.page";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <div className="content">
          <Route path="/" exact component={HomePage} />
          <Route path="/shop/:linkUrl" component={ShopPage} />
        </div>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
