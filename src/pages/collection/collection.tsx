import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShopItemData } from "../../redux/shop/shop-selector.js";
import { CollectionItem } from "../../components/collections/collection-item/collection-item";
import "./collection.scss";

interface Item {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface Collection {
  id: number;
  title: string;
  items: Item[];
  routeName: string;
}

interface Collections<Collection> {
  [key: string]: Collection;
}

export const CollectionPage = () => {
  const params = useParams();
  let collectionName = params.collectionName;
  const collections: Collections<Collection> = useSelector(selectShopItemData);
  let collection;
  if (collectionName) {
    collection = collections[collectionName];
    if (collection) {
      const { title, items } = collection;
      return (
        <div className="collection-page">
          <h2 className="title">{title}</h2>
          <div className="items">
            {items.map((item: Item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    }
  }
  return <></>;
};
