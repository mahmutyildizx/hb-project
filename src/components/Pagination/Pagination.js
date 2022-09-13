import React from "react";
import { useDispatch } from "react-redux";
import { handlePagination } from "../../features/productsSlice";
import cn from "classnames";
import styles from "./Pagination.module.scss";

function Pagination({ currentPage, totalProducts, productPerPage }) {
  const totalNumberOfPages = Math.ceil(totalProducts / productPerPage);
  const dispatch = useDispatch();
  const paginateProducts = [];

  for (let i = 1; i <= totalNumberOfPages; i++) {
    paginateProducts.push(i);
  }

  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        <li>
          <button
            className={cn(styles.paginationItem, {
              [styles.disabled]: currentPage === 1,
            })}
            onClick={() => dispatch(handlePagination(currentPage - 1))}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>
        {paginateProducts.map((item) => (
          <li
            key={item}
            className={cn(styles.pageItem, {
              [styles.active]: currentPage === item,
            })}
            onClick={() => dispatch(handlePagination(item))}
          >
            <button
              className={cn(styles.paginationItem, {
                [styles.active]: currentPage === item,
              })}
            >
              {item}
            </button>
          </li>
        ))}

        <li>
          <button
            className={cn(styles.paginationItem, {
              [styles.disabled]: currentPage === totalNumberOfPages,
            })}
            onClick={() => dispatch(handlePagination(currentPage + 1))}
            disabled={currentPage === totalNumberOfPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
