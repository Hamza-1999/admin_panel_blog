import React from "react";

const MinorCategory = ({
  minorOptions,
  selectedCategory,
  setSelectedCategory,
  setSelectedCode,
  setTaxonomyName,
}) => {
  return (
    <li
      style={{
        fontSize: "1.1rem",
        letterSpacing: "2.1px",
        lineHeight: "30px",
        cursor: "default",
      }}
      onClick={() => {
        setSelectedCategory(minorOptions.taxonomyMinorCategoryName);
        setSelectedCode(minorOptions.taxonomyMinorCode);
        setTaxonomyName(minorOptions.taxonomyMinorCategoryName);
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
