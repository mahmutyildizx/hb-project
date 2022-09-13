import React from "react";
import { useDispatch } from "react-redux";
import { handleSearch } from "../../features/productsSlice";
import styles from "./SearchInput.module.scss";

function SearchInput() {
  const [search, setSearch] = React.useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(handleSearch(e.target.value));
  };

  return (
    <div className={styles.searchInput}>
      <img src="/searchIcon.svg" alt="logo" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
