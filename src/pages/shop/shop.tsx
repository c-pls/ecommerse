import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop-action";

import { CollectionPage } from "../collection/collection";
import { CollectionOverview } from "../../components/collections/collection-overview/collection-overview";

export const ShopPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCollectionStart());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<CollectionOverview />} />

      <Route path="/:collectionName" element={<CollectionPage />} />
    </Routes>
  );
};
