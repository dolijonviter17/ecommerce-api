import { ActionType } from "../constants/ActionType";

const initialsState = {
  products: [],
};

export const ProductReducer = (state = initialsState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const SelectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionType.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
