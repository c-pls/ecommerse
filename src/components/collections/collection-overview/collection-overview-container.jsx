import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../../redux/shop/shop-selector.js";

import WithSpinner from "../../with-spinner/with-spinner.jsx";

import { CollectionOverview } from "./collection-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
