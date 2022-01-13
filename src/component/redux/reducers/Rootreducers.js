import { combineReducers } from "redux";
import ProductsReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import ProfileReducer from "./ProfileReducer";
import CheckOutReducer from "./CheckOutReducer";
import { cartDetailReducer } from "./cartDetailReducer";

const rootReducer = combineReducers({
      productState : ProductsReducer ,
      cartState : cartReducer ,
      profileState : ProfileReducer,
      CheckOutState : CheckOutReducer ,
      cartDetailState : cartDetailReducer,
})

export default rootReducer;