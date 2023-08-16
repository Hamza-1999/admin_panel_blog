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
  setSelectedCode,
}) => {
  console.log(intermediateOptions, "interoptions22");
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
  };

  return (
    <Box marginLeft={"40px"}>
      <Stack onClick={toggleOpen} alignItems={"center"} flexDirection={"row"}>
        {intermediateOptions.taxonomySubCategoryDtos?.length > 0 ? (
          isOpen ? (
            <ArrowDropDownIcon sx={{ fontSize: "2.2rem" }} />
          ) : (
            <ArrowRightIcon sx={{ fontSize: "2.2rem" }} />
          )
        ) : null}

        <Typography
          variant="h3"
          component={"h3"}
          onClick={handleIntermediateSelect}
        >
          {intermediateOptions.taxonomyIntermediateCategoryName}
        </Typography>
      </Stack>

      {/* {isOpen && (
        <ul>
          {intermediateOptions.taxonomySubCategoryDtos?.map((subCat, index) => {
            return (
              <SubCategory
                key={index}
                subOptions={subCat}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}
        </ul>
      )} */}

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
            />
          );
        })}
    </Box>
  );
};

export default IntermediateCategory;
