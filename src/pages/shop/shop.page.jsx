import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsGroup from "../../components/collections-group/collections-group.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.page";
import { addCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionGroupWithSpinner = WithSpinner(CollectionsGroup);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { addCollections } = this.props;
    const collectionRef = firestore.collection(`collections`);
    collectionRef
      .get()
      .then(async snapshot => {
        const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
        addCollections(collectionsMap);
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillUnmount() {}
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <React.Fragment>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionGroupWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCollections: collectionsMap => dispatch(addCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
