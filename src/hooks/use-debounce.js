import { useEffect } from "react";

import { handleSearch } from "../features/productsSlice";

import { useDispatch } from "react-redux";

const useDebounce = (value, delay) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (value.length >= 2) {
        dispatch(handleSearch(value));
      }
      if (value.length === 0) {
        dispatch(handleSearch(""));
      }
    }, delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [value, dispatch, delay]);
};

export default useDebounce;
