import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import HomePage from "./pages/home/home.page";
import ShopPage from "./pages/shop/shop.page";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SigInPage from "./pages/sign-in/sign-in.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import CartModal from "./components/cart-modal/cart-modal.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  unsubscribeAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth !== null) {
        console.log(userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log("snapshot", snapshot.data());
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  handleOpenModalCart() {
    this.setState({
      openModal: true
    });
  }

  handleCloseModalCart() {
    this.setState({
      openModal: false
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="app">
        <Header handleOpenModal={this.handleOpenModalCart.bind(this)} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/:linkUrl" component={ShopPage} />
          <Route path="/sign-in" component={SigInPage} />
          <Route path="/sign-up" component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
});

export default connect(null, mapDispatchToProps)(App);
