import React from "react";
import { sortingOptions } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { handleSort } from "../../features/productsSlice";
import styles from "./SortingDropdown.module.scss";

function Sort() {
  const sort = useSelector((state) => state.products.sort);
  const dispatch = useDispatch();
  return (
    <div className={styles.sortingContainer}>
      <select onChange={(e) => dispatch(handleSort(e.target.value))} className={styles.sortingDropdown}>
        <option value="">Sıralama</option>
        {sortingOptions.map((item) => {
          return (
            <option
              key={item.value}
              value={item.value}
              defaultValue={sort === item.value}
            >
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Sort;
