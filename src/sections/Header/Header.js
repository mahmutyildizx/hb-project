import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Basket from "../../components/Basket";
import Cart from "../../components/Cart";
import SearchInput from "../../components/SearchInput";
import styles from "./Header.module.scss";

function Header() {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <img src="/Logo.svg" alt="logo" />
        </Link>
      </div>
      <SearchInput />

      <div className={styles.basketContainer}>
        <Basket totalQuantity={getTotalQuantity} />
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Header;
