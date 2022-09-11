import React, { useState } from "react";
import Select from "react-select";
import { sortingOptions } from "../../constants/constants";
import styles from "./SortingDropdown.module.scss";

function SortingDropdown() {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className={styles.sortingContainer}>
      <Select
        defaultValue={{ label: 'Sıralama', value: 'Sıralama' }}
        onChange={setSelectedOption}
        options={sortingOptions}
        className={styles.sortingDropdown}
        styles={{
          control: (provided) => ({
            ...provided,
            width: "120px",
          }),
          indicatorSeparator: () => ({ display: "none" }),
          valueContainer: (provided) => ({
            ...provided,
            padding: "14px",
          }),
        }}
      />
    </div>
  );
}

export default SortingDropdown;
