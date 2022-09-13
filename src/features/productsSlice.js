import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
import { baseUrl } from "../constants/constants";

const initialState = {
  allProducts: [],
  products: [],
  page: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    productFilter: (state, action) => {
      const { key, value } = action.payload;
      // state.products = [
      //   ...state.products,
      //   ...state.allProducts.filter((item) => {
      //     return item[key] === value;
      //   })
      // ];
      state.products = state.allProducts.filter((item) => {
        return item[key] === value;
      });
    },
    // sortProductsAsc: (state, action) => {
    //   state.data = action.payload.sort((a, b) =>
    //     a.price < b.price ? 1 : a.price > b.price ? -1 : 0
    //   );
    // },
    // sortProductsDesc: (state, action) => {
    //   state.data = action.payload.sort((a, b) =>
    //     a.price < b.price ? -1 : a.price > b.price ? 1 : 0
    //   );
    // },
  },
});

export const getProductsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(baseUrl);
    dispatch(getProducts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};
export default productsSlice.reducer;
export const { getProducts, productFilter, sortProductAsc, sortProductDesc } =
  productsSlice.actions;
