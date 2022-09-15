import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
import { baseUrl } from "../constants/constants";

const initialState = {
  allProducts: [],
  isProductsLoading: false,
  products: [],
  cart: [],
  sort: "",
  searchTerm: "",
  activeFilter: "",
  page: 1,
};

const setLocalStorageCart = (cart) => {
  window.localStorage.setItem("cartProducts", JSON.stringify(cart));
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.allProducts = action.payload;
      state.isProductsLoading = false;
    },
    setProductsLoading: (state) => {
      state.isProductsLoading = true;
    },
    productFilter: (state, action) => {
      const { key, value } = action.payload;
      state.products = state.allProducts
        .filter((item) => {
          if (item[key] === value) {
            state.activeFilter = value;
          }
          return item[key] === value;
        })
        .sort((a, b) => {
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
      // const products = state.products.length > 0 ? state.products : state.allProducts;
      state.products = [...state.products].sort((a, b) => {
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
        state.searchTerm = "";
      }
      const products =
        state.products.length > 0 ? state.products : state.allProducts;
      state.products = [...products].filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item === action.payload.id);
      if (!itemInCart) {
        state.cart.push({ id: action.payload.id });
        setLocalStorageCart(state.cart);
      }
    },
    removeItemFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
      setLocalStorageCart(state.cart);
    },
    setInitialCart: (state, action) => {
      state.cart = action.payload;
    },
    handleClear: (state) => {
      state.sort = "";
      state.searchTerm = "";
      state.activeFilter = "";
      state.page = 1;
    },
  },
});

export const getProductsAsync = () => async (dispatch) => {
  try {
    dispatch(setProductsLoading());
    const response = await axios.get(baseUrl);
    dispatch(getProducts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export default productsSlice.reducer;
export const {
  getProducts,
  setProductsLoading,
  productFilter,
  handlePagination,
  handleSort,
  handleSearch,
  addToCart,
  removeItemFromCart,
  setInitialCart,
  handleClear,
} = productsSlice.actions;
