import React from "react";

import SortingDropdown from "../../components/SortingDropdown";
import styles from "./SubHeader.module.scss";

function SubHeader() {
  return (
    <div className={styles.SubHeaderContainer}>
      <div className={styles.SubHeader}>
        <span className={styles.PageTitle}>
          Cep Telefonu Fiyatları ve Modelleri
        </span>
        <span className={styles.SearchTextContainer}>
          <span>{"Aranan Kelime: "}</span>
        </span>
      </div>
      <div>
        <SortingDropdown />
      </div>
    </div>
  );
}

export default SubHeader;
