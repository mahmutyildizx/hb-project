import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";
function ProductList() {
  return (
    <div className={styles.productListContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList;
