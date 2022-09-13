import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/use-debounce";
import { handleSearch } from "../../features/productsSlice";
import styles from "./SearchInput.module.scss";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 500);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 2) {
      setSearchTerm(debouncedSearchTerm);
      dispatch(handleSearch(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);


  return (
    <div className={styles.searchInput}>
      <img src="/searchIcon.svg" alt="logo" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
