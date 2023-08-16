import React from "react";
import { useEffect } from "react";
import { newPatientAction } from "../../../../features/actions/createPatientAction";
import { useDispatch, useSelector } from "react-redux";
import { getTaxonomyAction } from "../../../../features/actions/taxonomyAction";
import { useState } from "react";
import MajorCategory from "./MajorCategory";
import IntermediateCategory from "./IntermediateCategory";
import SubCategory from "./SubCategory";
import { Box, Button, Typography } from "@mui/material";
import SelectedCategory from "./SelectedCategory";

const TaxonomyCategories = ({ handleClose, setFieldValue }) => {
  const dispatch = useDispatch();
  const { getTaxonomyData } = useSelector((state) => state.taxonomy);
  const [selectedCategory, setSelectedCategory] = useState("select category");
  const [selectedCode, setSelectedCode] = useState("");

  useEffect(() => {
    try {
      dispatch(getTaxonomyAction());
    } catch (error) {
      console.error(error, "taxonomy gettin in com error");
    }
  }, [dispatch]);

  const handleCloseModal = (itemCode) => {
    console.log(itemCode, "itemCode");
    setFieldValue("taxonomySpeciality", itemCode);
    handleClose();
  };
  return (
    <div>
      <Typography variant="h2" component={"h2"}>
        Taxonomy List
      </Typography>
      <SelectedCategory
        selectedCategory={selectedCategory}
        selectedCode={selectedCode}
      />

      {/* major component */}
      {getTaxonomyData.result?.map((majorCat, index) => {
        console.log(majorCat, "majorss55");
        return (
          <MajorCategory
            key={index}
            majorOption={majorCat}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            selectedCode={selectedCode}
            setSelectedCode={setSelectedCode}
          />
        );
      })}

      <Box textAlign={"right"} marginTop={"50px"}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCloseModal(selectedCode)}
        >
          Select
        </Button>
      </Box>
    </div>
  );
};

export default TaxonomyCategories;
