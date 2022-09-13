import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../features/productsSlice";
import Pagination from "../../components/Pagination";
import styles from "./ProductList.module.scss";
function ProductList() {
  const { products, allProducts, page, searchTerm } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);
  const productsData =
    products.length > 0 || searchTerm ? products : allProducts;
  const productPerPage = 12;
  const totalProducts = productsData.length;

  const indexOfLastPage = page * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const filterProducts = productsData.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <div>
      <div className={styles.productListContainer}>
        {filterProducts.map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
      <Pagination
        currentPage={page}
        totalProducts={totalProducts}
        productPerPage={productPerPage}
      />
    </div>
  );
}

export default ProductList;
