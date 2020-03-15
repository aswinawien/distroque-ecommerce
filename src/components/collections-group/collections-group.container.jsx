import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionGroup from "./collections-group.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});
//  Out <--- Inside
export default compose(connect(mapStateToProps), WithSpinner)(CollectionGroup);
