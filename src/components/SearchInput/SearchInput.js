import React from "react";
import styles from "./SearchInput.module.scss";

function SearchInput() {
  return (
    <div className={styles.searchInput}>
      <img src="/searchIcon.svg" alt="logo" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
      />
    </div>
  );
}

export default SearchInput;
