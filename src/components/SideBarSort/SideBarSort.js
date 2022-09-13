import React from "react";
import { sortingOptions } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { handleSort } from "../../features/productsSlice";
import styles from "./SideBarSort.module.scss";

function SideBarSort() {
  const dispatch = useDispatch();
  return (
    <div className={styles.sideBarSortContainer}>
      <div className={styles.sideBarSort}>
        <span className={styles.sideBarSortTitle}>Sıralama</span>
        <ul>
          {sortingOptions.map((item, index) => {
            return (
              <li
                onClick={() => {
                  dispatch(handleSort(item.value));
                }}
                key={index}
                className={styles.sideBarSortingItem}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBarSort;
