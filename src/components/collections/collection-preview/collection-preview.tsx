import React from "react";
import { useNavigate } from "react-router-dom";
import { CollectionItem } from "../collection-item/collection-item";
import "./collection-preview.scss";

interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface Props {
  title: string;
  items: Item[];
}

export const CollectionPreview = ({ title, items }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => navigate(`${title.toLocaleLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
