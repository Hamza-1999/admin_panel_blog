import { Box, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import { useState } from "react";
import ClaimInfo from "./ClaimInfo";
import ClaimCharges from "./ClaimCharges";

const NewClaim = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box margin="20px">
      <Header title="Claim" subtitle="Create a New Claim" />

      <Stack>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Claim" value={0} />
          <Tab label="Charges" value={1} />
        </Tabs>
      </Stack>

      <form>
        <Box>
          {tabValue === 0 && <ClaimInfo />}
          {tabValue === 1 && <ClaimCharges />}
        </Box>
      </form>
    </Box>
  );
};

export default NewClaim;
