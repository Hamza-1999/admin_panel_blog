import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import SubCategory from "./SubCategory";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const IntermediateCategory = ({
  intermediateOptions,
  selectedCategory,
  setSelectedCategory,
  selectedCode,
  setTaxonomyName,
  setSelectedCode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleIntermediateSelect = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    setSelectedCategory(intermediateOptions.taxonomyIntermediateCategoryName);
    setSelectedCode(intermediateOptions.taxonomyIntermediateCode);
    setTaxonomyName(intermediateOptions.taxonomyIntermediateCategoryName);
  };

  return (
    <Box marginLeft={"40px"}>
      <Box display="flex" alignItems="center">
        <Stack onClick={toggleOpen} alignItems={"center"} flexDirection={"row"}>
          {intermediateOptions.taxonomySubCategoryDtos?.length > 0 ? (
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
          sx={{ cursor: "default" }}
          letterSpacing="1.24px"
          lineHeight={"30px"}
          onClick={handleIntermediateSelect}
        >
          {intermediateOptions.taxonomyIntermediateCategoryName}
        </Typography>
      </Box>

      {isOpen &&
        intermediateOptions.taxonomySubCategoryDtos?.map((subCat, index) => {
          return (
            <SubCategory
              key={index}
              subOptions={subCat}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
              setTaxonomyName={setTaxonomyName}
            />
          );
        })}
    </Box>
  );
};

export default IntermediateCategory;
