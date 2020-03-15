import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsGroupContainer from "../../components/collections-group/collections-group.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsGroupContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
