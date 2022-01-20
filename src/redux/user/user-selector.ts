import { createSelector } from "reselect";

type currentUser = any;
interface GlobalState {
  user: currentUser;
}
const selectUser = (state: GlobalState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
