import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
  error: null,
};
export const productFetch = createAsyncThunk(
  "products/productFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/products");
      return res?.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      //immer
      state.status = "pending";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productFetch.rejected]: (state, action) => {
      //immer
      state.status = "rejcted";
      state.items.error = action.payload;
    },
  },
});
export default productSlice.reducer;
