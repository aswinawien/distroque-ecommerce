import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.scss";

import HomePage from "./pages/home/home.page";
import ShopPage from "./pages/shop/shop.page";

import Header from "./components/header/header.component";
import SigInPage from "./pages/sign-in/sign-in.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import CheckoutPage from "./pages/checkout/checkout.page";

import { selectCurrentUser } from "./redux/user/user.selector";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigInPage />
            }
          />
          <Route
            exact
            path="/sign-up"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpPage />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, null)(App);
