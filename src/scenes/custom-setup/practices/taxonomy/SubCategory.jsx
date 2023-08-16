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
  selectedCode,
  setSelectedCode,
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
  };
  return (
    <Box marginLeft={"70px"}>
      <Stack onClick={toggleOpen} alignItems={"center"} flexDirection={"row"}>
        {subOptions.taxonomyMinorCategoryDtos?.length > 0 ? (
          isOpen ? (
            <ArrowDropDownIcon sx={{ fontSize: "2.2rem" }} />
          ) : (
            <ArrowRightIcon sx={{ fontSize: "2.2rem" }} />
          )
        ) : null}

        <Typography variant="h3" component={"h3"} onClick={handleSubSelect}>
          {subOptions.taxonomySubCategoryName}
        </Typography>
      </Stack>

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
              />
            );
          })}
        </ul>
      )}
    </Box>
  );
};

export default SubCategory;
