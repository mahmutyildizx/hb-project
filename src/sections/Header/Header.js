import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import Basket from "../..//components/Basket";
import SearchInput from "../../components/SearchInput";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <Link href="/" className={styles.logoWrapper}>
        <Image src="/Logo.svg" alt="logo" width={211} height={35} />
      </Link>
      <SearchInput />

      <div className={styles.basketContainer}>
        <Button name="Sepetim" badge={"2"} />
        {/* <Basket /> */}
      </div>
    </div>
  );
}

export default Header;
