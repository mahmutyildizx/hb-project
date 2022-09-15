import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFilter } from "../../features/productsSlice";
import styles from "./Filter.module.scss";

function Filter({ title, data }) {
  const activeFilter = useSelector((state) => state.products.activeFilter);
  const dispatch = useDispatch();
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterList}>
        <span className={styles.filterTitle}>{title}</span>
        <ul>
          {data.map((item, index) => {
            return (
              <li
                onClick={() => {
                  dispatch(
                    productFilter({
                      key: title === "Renk" ? "color" : "brand",
                      value: item.name,
                    })
                  );
                }}
                key={index}
                className={styles.filterItem}
              >
                <span
                  className={activeFilter === item.name ? styles.activeFilter : ""}
                >
                  {`${item.name} (${item.count})`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
