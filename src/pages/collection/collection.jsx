import React from "react";

import { useParams } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectShopItemData } from "../../redux/shop/shop-selector.js";

import CollectionItem from "../../components/collections/collection-item/collection-item.jsx";

import "./collection.scss";

const CollectionPage = ({ collections }) => {
  const params = useParams();
  let collectionName = params.collectionName;

  const collection = collections[collectionName];

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItemData,
});

export default connect(mapStateToProps)(CollectionPage);
