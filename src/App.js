import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/home/home.page";
import ShopPage from "./pages/shop/shop.page";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SigInPage from "./pages/sign-in/sign-in.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import CartModal from "./components/cart-modal/cart-modal.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      openModal: false
    };
  }

  unsubscribeAuth = null;
  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth !== null) {
        console.log(userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log("snapshot", snapshot.data());
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({
          currentUser: null
        });
      }
    });
  }

  handleOpenModalCart() {
    this.setState(
      {
        openModal: true
      },
      () => {
        console.log(this.state.openModal);
      }
    );
  }

  handleCloseModalCart() {
    this.setState(
      {
        openModal: false
      },
      () => {
        console.log(this.state.openModal);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="app">
        <Header
          authenticated={this.state.currentUser}
          handleOpenModal={this.handleOpenModalCart.bind(this)}
        />
        <CartModal
          isOpen={this.state.openModal}
          closeModal={this.handleCloseModalCart.bind(this)}
        />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/:linkUrl" component={ShopPage} />
          <Route path="/sign-in" component={SigInPage} />
          <Route path="/sign-up" component={SignUpPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
