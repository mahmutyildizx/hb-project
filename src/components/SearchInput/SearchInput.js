import React, { useState } from "react";
import { useSelector } from "react-redux";
import useDebounce from "../../hooks/use-debounce";
import styles from "./SearchInput.module.scss";

function SearchInput() {
  const { searchTerm } = useSelector((state) => state.products);
  const [searchTermInput, setSearchTermInput] = useState(searchTerm);
  
  const debouncedSearchTerm = useDebounce(searchTermInput.trim(), 500);

  const handleOnChange = (e) => {
    setSearchTermInput(e.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <img src="/searchIcon.svg" alt="logo" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        value={debouncedSearchTerm}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default SearchInput;
