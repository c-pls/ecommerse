import React from "react";

import { useSelector } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectoryData } from "../../redux/directory/directory-selector.js";

import { MenuItem } from "../menu-item/menu-item-component";

import "./directory.scss";

const Directory = () => {
  const directoryData = useSelector((state) => {
    console.log("Hello, I am being fired");
    return state.directory.sections;
  });

  // const directoryData = useSelector(selectDirectoryData);
  // console.log(directoryData);

  const x = useSelector(
    createStructuredSelector({
      data: selectDirectoryData,
    })
  );

  console.log(x);

  //   createStructuredSelector({ selectDirectoryData })
  // );

  console.log(directoryData);
  return (
    <div className="directory-menu">
      {directoryData.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   directoryData: selectDirectoryData,
// });

export default Directory;
