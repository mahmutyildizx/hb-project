/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClear } from "../../features/productsSlice";
import Basket from "../../components/Basket";
import Cart from "../../components/Cart";
import SearchInput from "../../components/SearchInput";
import styles from "./Header.module.scss";

function Header() {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);
  const cartProducts = products
    .filter((item) => cart.find((cartItem) => cartItem.id === item.id))
    .reverse();

  const handleClearFunc = () => {
    dispatch(handleClear);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoWrapper} onClick={handleClearFunc}>
        <a href="/">
          <img src="/Logo.svg" alt="logo" />
        </a>
      </div>

      <SearchInput />

      <div className={styles.basketContainer}>
        <Basket totalQuantity={cart?.length} />
        <div className={styles.cart}>
          <Cart cartProducts={cartProducts} />
        </div>
      </div>
    </div>
  );
}

export default Header;
