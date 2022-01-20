import React from "react";
import { useSelector } from "react-redux";

import { selectDirectoryData } from "../../redux/directory/directory-selector";

import { MenuItem } from "../menu-item/menu-item-component";

import "./directory.scss";

interface DirectoryData {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  routeName: string;
}

export const Directory = () => {
  const directoryData: DirectoryData[] = useSelector(selectDirectoryData);
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
