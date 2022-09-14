import React from "react";
import Link from "next/link";
import Basket from "../../components/Basket";
import Cart from "../../components/Cart";
import SearchInput from "../../components/SearchInput";
import styles from "./Header.module.scss";

function Header() {
  //totalQuantity={totalQuantity} handleClickBasket={handleClickBasket}
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <img src="/Logo.svg" alt="logo" />
        </Link>
      </div>
      <SearchInput />

      <div className={styles.basketContainer}>
        <Basket />
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Header;
