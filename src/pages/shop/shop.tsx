import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop-action";

import { CollectionPageContainer } from "../collection/collection-container";
import { CollectionOverviewContainer } from "../../components/collections/collection-overview/collection-overview-container";

export const ShopPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<CollectionOverviewContainer />} />

      <Route path="/:collectionName" element={<CollectionPageContainer />} />
    </Routes>
  );
};
