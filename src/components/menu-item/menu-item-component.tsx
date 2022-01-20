import React from "react";

import { useNavigate } from "react-router-dom";

import "./menu-item.scss";

interface Props {
  title: string;
  imageUrl: string;
  size?: string;
  routeName: string;
}

export const MenuItem = ({ title, imageUrl, size, routeName }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`shop/${routeName}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
