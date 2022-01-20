import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../../redux/shop/shop-selector.js";

import { CollectionPreview } from "../collection-preview/collection-preview";

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

export const CollectionOverview = () => {
  const collections: Collection[] = useSelector(selectCollectionsForPreview);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
