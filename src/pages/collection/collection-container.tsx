import { connect, useSelector } from "react-redux";

import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { WithSpinner } from "../../components/with-spinner/with-spinner";

import {
  selectIsCollectionsLoaded,
  selectShopItemData,
} from "../../redux/shop/shop-selector.js";

import { CollectionPage } from "./collection";

export const CollectionPageContainer = () => {
  const isLoading = useSelector(selectIsCollectionsLoaded);

  return WithSpinner(CollectionPage, !isLoading);
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopItemData,
// });
// const CollectionPageContainer = compose(
//   connect(mapStateToProps),
//   WithSpinner
// )(CollectionPage);

// export default connect(mapStateToProps)(CollectionPageContainer);
