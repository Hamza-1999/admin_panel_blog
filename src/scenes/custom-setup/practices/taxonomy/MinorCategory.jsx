import React from "react";

const MinorCategory = ({
  minorOptions,
  selectedCategory,
  setSelectedCategory,
  setSelectedCode,
}) => {
  return (
    <li
      style={{
        fontSize: "1.2rem",
        marginTop: "15px",
        letterSpacing: "1.24px",
      }}
      onClick={() => {
        setSelectedCategory(minorOptions.taxonomyMinorCategoryName);
        setSelectedCode(minorOptions.taxonomyMinorCode);
      }}
      className={
        selectedCategory === minorOptions.taxonomyMinorCategoryName
          ? "selected"
          : ""
      }
    >
      {minorOptions.taxonomyMinorCategoryName}
    </li>
  );
};

export default MinorCategory;
