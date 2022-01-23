import React from "react";
import { useSelector } from "react-redux";

import { MenuItem } from "../menu-item/menu-item-component";
import { sections } from "./directory-data";
import "./directory.scss";

interface DirectoryData {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
}

export const Directory = () => {
  const directoryData: DirectoryData[] = sections;
  //   const x = useSelector(
  //     createStructuredSelector({
  //       data: selectDirectoryData,
  //     })
  //   );

  return (
    <div className="directory-menu">
      {directoryData.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
