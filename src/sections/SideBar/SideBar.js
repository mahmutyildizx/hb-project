import React from "react";
import Filter from "../../components/Filter";
import styles from "./SideBar.module.scss";

function SideBar({ data }) {
  return (
    <div className={styles.SideBarContainer}>
      <div className={styles.SideBar}>
        <Filter data={data} />
      </div>
    </div>
  );
}

export default SideBar;
