import { Box, Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import { useState } from "react";
import MinorCategory from "./MinorCategory";

const SubCategory = ({
  subOptions,
  selectedCategory,
  setSelectedCategory,
  setSelectedCode,
  setTaxonomyName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubSelect = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    setSelectedCategory(subOptions.taxonomySubCategoryName);
    setSelectedCode(subOptions.taxonomySubCode);
    setTaxonomyName(subOptions.taxonomySubCategoryName);
  };
  return (
    <Box marginLeft={"70px"}>
      <Box display="flex" alignItems="center">
        <Stack onClick={toggleOpen} alignItems={"center"} flexDirection={"row"}>
          {subOptions.taxonomyMinorCategoryDtos?.length > 0 ? (
            isOpen ? (
              <ArrowDropDownIcon sx={{ fontSize: "2.2rem" }} />
            ) : (
              <ArrowRightIcon sx={{ fontSize: "2.2rem" }} />
            )
          ) : null}
        </Stack>
        <Typography
          variant="h4"
          component={"h4"}
          letterSpacing={"1.24px"}
          sx={{ cursor: "default" }}
          lineHeight="30px"
          onClick={handleSubSelect}
        >
          {subOptions.taxonomySubCategoryName}
        </Typography>
      </Box>

      {isOpen && (
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {subOptions.taxonomyMinorCategoryDtos?.map((minorCat, index) => {
            return (
              <MinorCategory
                key={index}
                minorOptions={minorCat}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setSelectedCode={setSelectedCode}
                setTaxonomyName={setTaxonomyName}
              />
            );
          })}
        </ul>
      )}
    </Box>
  );
};

export default SubCategory;
