import { useSelector } from "react-redux";

import { selectIsCollectionsLoaded } from "../../../redux/shop/shop-selector";

import { WithSpinner } from "../../with-spinner/with-spinner";

import { CollectionOverview } from "./collection-overview";

export const CollectionOverviewContainer = () => {
  // if is null loading is true
  const loading = useSelector(selectIsCollectionsLoaded);
  return WithSpinner(CollectionOverview, !loading);
};
