import { ActionType } from "../constants/ActionType";
export const SetProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};

export const SelectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const RemoveSelectedProduct = () => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCTS,
  };
};
