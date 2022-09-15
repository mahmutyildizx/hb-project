import React from "react";
import { useSelector } from "react-redux";
import SortingDropdown from "../../components/SortingDropdown";
import styles from "./SubHeader.module.scss";

function SubHeader() {
  const { searchTerm } = useSelector((state) => state.products);

  return (
    <div className={styles.subHeaderContainer}>
      <div className={styles.subHeader}>
        <span className={styles.pageTitle}>
          Cep Telefonu Fiyatları ve Modelleri
        </span>

        <span className={styles.searchTextContainer}>
          {searchTerm && <span>{`Aranan Kelime: ${searchTerm}`}</span>}
        </span>
      </div>
      <div>
        <SortingDropdown />
      </div>
    </div>
  );
}

export default SubHeader;
