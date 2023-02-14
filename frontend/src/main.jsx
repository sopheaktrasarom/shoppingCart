import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer, {
  productFetch,
} from "./Components/features/productSlice";
import { productApi } from "./Components/features/productApi";
import cartReducer from "./Components/features/cartSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
});
store.dispatch(productFetch());
store.dispatch(getTotals());
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
