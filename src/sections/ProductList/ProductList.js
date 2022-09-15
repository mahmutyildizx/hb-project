import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import styles from "./ProductList.module.scss";

function ProductList() {
  const { products, allProducts, page, searchTerm, cart } = useSelector(
    (state) => state.products
  );
  const productsData =
    products.length > 0 || searchTerm ? products : allProducts;
  const productPerPage = 12;
  const totalProducts = productsData.length;

  const indexOfLastPage = page * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const filterProducts = productsData.slice(indexOfFirstPage, indexOfLastPage);

  if (!filterProducts.length) {
    return <div style={{fontSize: '22px'}}>Herhangi bir sonuç bulunamadı</div>;
  }
  
  return (
    <div>
      <div className={styles.productListContainer}>
        {filterProducts.map((item) => {
          return (
            <ProductCard
              key={item.id}
              data={item}
              isInCart={cart.find((cartItem) => cartItem.id === item.id)}
            />
          );
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
