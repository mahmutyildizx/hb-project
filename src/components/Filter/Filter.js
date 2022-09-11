import React from "react";
import styles from "./Filter.module.scss";

function Filter({ title, data }) {
  return (
    <div className={styles.filterContainer}>
      <div>
        <span className={styles.filterTitle}>Renk</span>
        {/* <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.brand}</span>
                <span>({item.count})</span>
              </li>
            );
          })}
        </ul> */}
        <ul className={styles.filterList}>
          <li>
            <span>Lacivert(1)</span>
          </li>
          <li>
            <span>Sarı(2)</span>
          </li>
          <li>
            <span>Kırmızı(3)</span>
          </li>
          <li>
            <span>Mor(4)</span>
          </li>
        </ul>
        <span className={styles.filterTitle}>Renk</span>
        {/* <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.brand}</span>
                <span>({item.count})</span>
              </li>
            );
          })}
        </ul> */}
        <ul className={styles.filterList}>
          <li>
            <span>Lacivert(1)</span>
          </li>
          <li>
            <span>Sarı(2)</span>
          </li>
          <li>
            <span>Kırmızı(3)</span>
          </li>
          <li>
            <span>Mor(4)</span>
          </li>
        </ul>
        <span className={styles.filterTitle}>Renk</span>
        {/* <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.brand}</span>
                <span>({item.count})</span>
              </li>
            );
          })}
        </ul> */}
        <ul className={styles.filterList}>
          <li>
            <span>Lacivert(1)</span>
          </li>
          <li>
            <span>Sarı(2)</span>
          </li>
          <li>
            <span>Kırmızı(3)</span>
          </li>
          <li>
            <span>Mor(4)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
