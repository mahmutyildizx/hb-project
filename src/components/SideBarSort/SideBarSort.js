import React from "react";
import { sortingOptions } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { handleSort } from "../../features/productsSlice";
import styles from "./SideBarSort.module.scss";

function SideBarSort() {
  const sort = useSelector((state) => state.products.sort);
  console.log(sort);
  const dispatch = useDispatch();
  return (
    <div className={styles.sideBarSortContainer}>
      <div className={styles.sideBarSortList}>
        <span className={styles.sideBarSortTitle}>Sıralama</span>
        <ul>
          {sortingOptions.map((item) => {
            return (
              <li
                onClick={() => {
                  dispatch(handleSort(item.value));
                }}
                key={item.value}
                className={styles.sideBarSortingItem}
              >
                <span
                  className={sort === item.value ? styles.activeFilter : ""}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBarSort;
