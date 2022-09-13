import React from "react";
import Link from "next/link";
import Button from "../../components/Button";
import Basket from "../../components/Basket";
import SearchInput from "../../components/SearchInput";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <img src="/Logo.svg" alt="logo" />
        </Link>
      </div>
      <SearchInput />

      <div className={styles.basketContainer}>
        <Button name="Sepetim" badge={"2"} />
        {/* <Basket /> */}
      </div>
    </div>
  );
}

export default Header;
