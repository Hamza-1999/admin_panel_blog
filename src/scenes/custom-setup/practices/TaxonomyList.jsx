import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const categories = [
  {
    name: "Agency",
    intermediates: [
      {
        name: "INtermediate 1",
        subs: ["Sub 1", "Sub 2", "Sub 3"],
      },
    ],
  },
  {
    name: "Skin",
    intermediates: [
      {
        name: "Intermediate 2",
        subs: ["Sub 1", "Sub 2", "Sub 3", "Sub 4"],
      },
    ],
  },
];

const Taxonomy = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  return (
    <>
      <div>Taxonomy List</div>
      <SelectedCategory selectedCategory={selectedCategory} />
      <Box>
        {categories.map((majorCat, index) => (
          <MajorCategory
            key={index}
            majorOptions={majorCat}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </Box>
    </>
  );
};

const SelectedCategory = ({ selectedCategory }) => {
  return (
    <Box
      sx={{
        background: "lightgrey",
        margin: "20px  0",
        fontSize: "1.2rem",
        padding: "8px",
      }}
      className="selected-category"
    >
      {selectedCategory}
    </Box>
  );
};

const MajorCategory = ({
  majorOptions,
  setSelectedCategory,
  selectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box margin={"20px 0"}>
      <Typography variant="h3" component={"h3"} onClick={toggleOpen}>
        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} />{" "}
        {majorOptions.name}
      </Typography>
      {isOpen && (
        <div>
          {majorOptions.intermediates.map((intermediateCategory, index) => (
            <IntermediateCategory
              key={index}
              intermediateOptions={intermediateCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      )}
    </Box>
  );
};

const IntermediateCategory = ({
  intermediateOptions,
  setSelectedCategory,
  selectedCategory,
}) => {
  const [selectedSub, setSelectedSub] = useState(null);

  const handleSubSelect = (subName) => {
    setSelectedSub(selectedSub === subName ? null : subName);
    setSelectedCategory(subName);
  };

  return (
    <div>
      <h3 onClick={() => handleSubSelect(intermediateOptions.name)}>
        {intermediateOptions.name}
      </h3>
      {selectedSub === intermediateOptions.name && (
        <ul>
          {intermediateOptions.subs.map((sub, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(sub)}
              className={selectedCategory === sub ? "selected" : ""}
            >
              {sub}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Taxonomy;
