import React from "react";
import styles from "./Pagination.module.scss";

function Pagination() {
  //   const totalPages = Math.ceil(totalPosts / postPerPage);

  //   let pages = [];

  //   for (let p = 1; p <= totalPages; p++) {
  //     pages.push(p);
  //   }

  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        <li>
          <button
            className={styles.paginationLink}
            // onClick={() => setCurrentPage(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {/* {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage && `active`}`}
            onClick={() => setCurrentPage(page)}
          >
            <button className={styles.pageLink}>{page}</button>
          </li>
        ))} */}

        <li>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </li>
        <li>
          <button
            className={styles.pageLink}
            // onClick={() => setCurrentPage(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
