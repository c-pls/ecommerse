import { createSelector } from "reselect";
import * as constants from "./directory-contants";

const selectDirectory = (state: constants.AState) => state.directory;

export const selectDirectoryData = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
