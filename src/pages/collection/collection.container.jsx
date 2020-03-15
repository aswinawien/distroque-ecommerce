import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCollectionsIsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.page";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsIsLoaded(state)
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionPage);
