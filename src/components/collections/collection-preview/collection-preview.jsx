import React from "react";

import {useNavigate} from 'react-router-dom'

import CollectionItem from "../collection-item/collection-item.jsx";



import "./collection-preview.scss";

const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate()
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() =>navigate(`${routeName}`) } >{title.toUpperCase()}</h1>
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

export default CollectionPreview;