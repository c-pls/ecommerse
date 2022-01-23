import React from "react";
import { useParams } from "react-router-dom";
import { CollectionItem } from "../../components/collections/collection-item/collection-item";
import "./collection.scss";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "../../components/spinner/spinner";

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

interface Collections<Collection> {
  [key: string]: Collection;
}

const GET_COLLECTION_BY_TITLE = gql`
  query GetCollectionByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

export const CollectionPage = () => {
  const params = useParams();
  let collectionName = params.collectionName;
  const { loading, error, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: collectionName },
  });
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <Spinner />;
  } else {
    const collection = data.getCollectionsByTitle;
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
};
