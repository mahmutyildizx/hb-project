import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Basket from "../../components/Basket";
import Cart from "../../components/Cart";
import SearchInput from "../../components/SearchInput";
import styles from "./Header.module.scss";

function Header() {
  const cart = useSelector((state) => state.products.cart);
  const products = useSelector((state) => state.products.allProducts);
  const cartProducts = products
    .filter((item) => cart.find((cartItem) => cartItem.id === item.id))
    .reverse();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <img src="/Logo.svg" alt="logo" />
        </Link>
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
