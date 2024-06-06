import { userSlice } from "./authSlice/authSlice";
import { productSlice } from "./productSlice/productSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
  [productSlice.reducerPath]: productSlice.reducer,
});

rootReducer.middleware = [userSlice.middleware,productSlice.middleware];

export default rootReducer;