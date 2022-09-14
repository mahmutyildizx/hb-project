import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SortingDropdown from "../../components/SortingDropdown";
import styles from "./SubHeader.module.scss";

function SubHeader() {
  const { searchTerm } = useSelector((state) => state.products);
  
  return (
    <div className={styles.SubHeaderContainer}>
      <div className={styles.SubHeader}>
        <span className={styles.PageTitle}>
          Cep Telefonu Fiyatları ve Modelleri
        </span>
        <span
          className={styles.SearchTextContainer}
        >
          <span>{`Aranan Kelime: ${searchTerm}`}</span>
        </span>
      </div>
      <div>
        <SortingDropdown />
      </div>
    </div>
  );
}

export default SubHeader;
