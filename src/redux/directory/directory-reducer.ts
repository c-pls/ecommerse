import * as constants from "./directory-contants";

const directoryReducer = (
  state = constants.INIT_STATE,
  action: constants.DirectoryAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
