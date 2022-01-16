import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItemData = createSelector(
  [selectShop],
  (shopData) => shopData.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItemData],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shopData => !!shopData.collections
)
