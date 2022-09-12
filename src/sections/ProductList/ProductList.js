import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../features/productsSlice";
import Pagination from "../../components/Pagination";
import styles from "./ProductList.module.scss";
function ProductList() {
  const { products, allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAsync("products"));
  }, [dispatch]);
  const productsData = products.length > 0 ? products : allProducts;
  console.log("products", productsData);
  return (
    <>
      <div className={styles.productListContainer}>
        {productsData.map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
      <Pagination />
    </>
  );
}

export default ProductList;
