import { cartHiddenVar } from "../../cache";

export const toggleCart = () => {
  return cartHiddenVar(!cartHiddenVar());
};
