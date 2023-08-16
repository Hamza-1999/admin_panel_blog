import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import IntermediateCategory from "./IntermediateCategory";

const MajorCategory = ({
  majorOption,
  selectedCategory,
  setSelectedCategory,
  setSelectedCode,
  selectedCode,
}) => {
  console.log(majorOption, "majorOptions");
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box margin={"20px 0"}>
      <Stack onClick={toggleOpen} alignItems={"center"} flexDirection={"row"}>
        {isOpen ? (
          <ArrowDropDownIcon sx={{ fontSize: "2.2rem" }} />
        ) : (
          <ArrowRightIcon sx={{ fontSize: "2.2rem" }} />
        )}
        <Typography variant="h3" component={"h3"}>
          {majorOption.taxonomyMajorCategoryName}
        </Typography>
      </Stack>

      {isOpen &&
        majorOption.taxonomyIntermediateCategoryDtos?.map(
          (intermediateCat, index) => (
            <IntermediateCategory
              key={index}
              intermediateOptions={intermediateCat}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setSelectedCode={setSelectedCode}
              selectedCode={selectedCode}
            />
          )
        )}
    </Box>
  );
};

export default MajorCategory;
