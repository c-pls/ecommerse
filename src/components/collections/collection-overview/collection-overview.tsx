import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../../redux/shop/shop-selector";

import { gql, useQuery } from "@apollo/client";
import { CollectionPreview } from "../collection-preview/collection-preview";
import { Spinner } from "../../spinner/spinner";

interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface Collection {
  id: number;
  title: string;
  items: Item[];
  routeName: string;
}

const GET_COLLECTIONS = gql`
  query GetCollections {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const CollectionOverview = () => {
  // const collections: Collection[] = useSelector(selectCollectionsForPreview);
  const { loading, error, data } = useQuery(GET_COLLECTIONS);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <Spinner />;
  } else {
    const collections: Collection[] = data.collections;
    return (
      <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
};
