import React from "react";
import Filter from "../../components/Filter";
import SideBarSort from "../../components/SideBarSort/SideBarSort";
import { sortingOptions } from "../../constants/constants";
import { useSelector } from "react-redux";
import styles from "./SideBar.module.scss";

function SideBar() {
  const products = useSelector((state) => state.products.allProducts);
  let colorOptions = [];
  let brandOptions = [];

  products?.forEach((element) => {
    const colorIndex = colorOptions.findIndex(
      (el) => el.name === element.color
    );
    if (colorIndex > -1) {
      colorOptions[colorIndex] = {
        ...colorOptions[colorIndex],
        count: colorOptions[colorIndex].count + 1,
      };
    } else {
      colorOptions.push({
        name: element.color,
        count: 1,
      });
    }
    const brandIndex = brandOptions.findIndex(
      (el) => el.name === element.brand
    );
    if (brandIndex > -1) {
      brandOptions[brandIndex] = {
        ...brandOptions[brandIndex],
        count: brandOptions[brandIndex].count + 1,
      };
    } else {
      brandOptions.push({
        name: element.brand,
        count: 1,
      });
    }
  });

  return (
    <div className={styles.sideBarContainer}>
      <Filter data={colorOptions} title="Renk" />
      <SideBarSort />
      <Filter data={brandOptions} title="Marka" />
    </div>
  );
}

export default SideBar;
