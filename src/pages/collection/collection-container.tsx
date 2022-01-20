import { useSelector } from "react-redux";

import { WithSpinner } from "../../components/with-spinner/with-spinner";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selector.js";

import { CollectionPage } from "./collection";

export const CollectionPageContainer = () => {
  const isLoading = useSelector(selectIsCollectionsLoaded);

  return WithSpinner(CollectionPage, !isLoading);
};
