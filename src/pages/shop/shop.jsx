import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop-action.js";

import CollectionOverviewContainer from '../../components/collections/collection-overview/collection-overview-container.jsx'
import CollectionPageContainer from '../collection/collection-container.jsx'


const ShopPage = ({ dispatch }) => {

  useEffect(() => {
    dispatch(fetchCollectionStart())
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<CollectionOverviewContainer />} />

      <Route path="/:collectionName" element={<CollectionPageContainer />} />
    </Routes>
  );
};


export default connect()(ShopPage);
