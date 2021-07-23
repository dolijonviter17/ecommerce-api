import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./ProductReducer";

const reducers = combineReducers({
  allProducts: ProductReducer,
  product: SelectedProductReducer,
});
export default reducers;
