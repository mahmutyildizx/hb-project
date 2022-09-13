import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
import { baseUrl } from "../constants/constants";

const initialState = {
  allProducts: [],
  products: [],
  sort: "",
  searchTerm: "",
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
      state.products = state.allProducts.filter((item) => {
        return item[key] === value;
      });
      state.page = 1;
      state.searchTerm = "";
    },
    handlePagination: (state, action) => {
      state.page = action.payload;
    },
    handleSort: (state, action) => {
      state.sort = action.payload;
      state.page = 1;
      state.searchTerm = "";
      const products =
        state.products.length > 0 ? state.products : state.allProducts;
      state.products = [...products].sort((a, b) => {
        if (state.sort === "lowest") {
          return a.price - b.price;
        } else if (state.sort === "highest") {
          return b.price - a.price;
        } else if (state.sort === "newest") {
          return new Date(b.createdDate) - new Date(a.createdDate);
        } else if (state.sort === "oldest") {
          return new Date(a.createdDate) - new Date(b.createdDate);
        } else {
          return state.products;
        }
      });
    },
    handleSearch: (state, action) => {
      state.searchTerm = action.payload;
      state.page = 1;
      if (action.payload === "") {
        state.products = state.allProducts;
      }
      const products =
        state.products.length > 0 ? state.products : state.allProducts;
      state.products = [...products].filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
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
export const {
  getProducts,
  productFilter,
  handleSort,
  handlePagination,
  handleSearch,
} = productsSlice.actions;
