import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";
import InsuranceInfo from "./InsuranceInfo";
import PayerInfo from "./PayerInfo";
import { useFormik } from "formik";
import { patientSchema } from "../../schemas/patientSchema";
import InsuredModalForm from "./InsuredModalForm";
import galleryAvatar from "../../assets/gallery_avatar.png";
import { ExpandMore } from "@mui/icons-material";
import LinkFamily from "./LinkFamily";
import { getData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

const MainInsurance = ({ formik }) => {
  const [open, setOpen] = useState(false);
  const [priorityTypes, setPriorityTypes] = useState([]);
  const [openInsuranceModal, setOpenInsuranceModal] = useState(false);
  const [openLinkFamModal, setOpenLinkFamModal] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = () => {
    if (formik.values.showInsuranceData === true) {
      formik.values.showInsuranceData = false;
    }
    formik.setFieldValue("selectedPriorityType", 1);
    setOpenInsuranceModal(true);
  };

  console.log(priorityTypes, "check1234");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const selectedPriorityType = formik.values.selectedPriorityType;
  // priorityTypes handle
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenInsuranceModal(true);
    setOpen(false);
  };

  // handle add insurance data
  const handleAddInsurance = (insuranceData) => {
    formik.setFieldValue("insuredPartyDTO", [
      ...formik.values.insuredPartyDTO,
      insuranceData,
    ]);
    // setShowInsuranceData(true);
    formik.values.showInsuranceData = true;
    setOpenInsuranceModal(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const getPriorityTypes = async () => {
    try {
      const response = await getData(`${path}/ct-priorityType`);
      if (response.status === "Success") {
        setPriorityTypes(response.result);
      } else {
        setPriorityTypes([]);
      }
    } catch (err) {
      console.log(err, "check error");
    }
  };

  useEffect(() => {
    getPriorityTypes();
  }, [setPriorityTypes]);
  // accordion styling
  const accordioStyling = {
    primaryText: {
      fontSize: "1.6rem !important",
      color: "#0358E2",
      fontWeight: 600,
      background: "#DBE8FC",
      padding: "8px 12px",
    },

    secondaryText: {
      fontSize: "1.4rem",
      fontWeight: "500",
      color: "#262626",
    },
  };

  // handle cell click
  const handleCellClick = (params) => {
    console.log(params, "params data");
    formik.values.showInsuranceData = true;
    formik.setFieldValue("insuredPartyDTO", [
      ...formik.values.insuredPartyDTO,
      params,
    ]);
  };

  console.log(formik.values, "checkingDTO");
  return (
    <>
      {/* modal work here */}
      <CustomModal
        open={openInsuranceModal}
        handleClose={() => {
          setOpenInsuranceModal(false);
          formik.values.showInsuranceData = true;
        }}
      >
        <InsuredModalForm
          handleClose={() => setOpenInsuranceModal(false)}
          handleAddInsurance={handleAddInsurance}
          formik={formik}
          selectedPriorityType={selectedPriorityType}
        />
      </CustomModal>
      {/* Link Family Modal */}
      <CustomModal
        open={openLinkFamModal}
        handleClose={() => setOpenLinkFamModal(false)}
      >
        <LinkFamily handleCellClick={handleCellClick} />
      </CustomModal>
      <Box minHeight="300px">
        <Stack flexDirection="row">
          <Box>
            <ButtonGroup
              // variant="contained"
              // color="light"
              style={{ border: "1px solid #0554D3" }}
              ref={anchorRef}
              aria-label="split button"
            >
              <Button
                style={{
                  color: "#0554D3",
                  background: "#fff",
                  border: "none",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
                onClick={handleClick}
                //   size="large"
              >
                Add New
              </Button>
              <Button
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
                style={{ border: "none" }}
              >
                <ArrowDropDownIcon
                  style={{ fontSize: "2.5rem", color: "#0554D3" }}
                />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {priorityTypes.map((option, index) => (
                          <MenuItem
                            key={option.id}
                            selected={index === selectedIndex}
                            onClick={(event) => {
                              formik.setFieldValue(
                                "selectedPriorityType",
                                option.priorityTypeId
                              );
                              handleMenuItemClick(event, index);
                            }}
                            sx={{
                              fontSize: "1.3rem",
                              color: "#0554D3",
                              fontWeight: "600",
                            }}
                          >
                            {option?.priorityType}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          <Box marginLeft="20px">
            <Button
              sx={{
                color: "#0554D3",
                background: "#fff",
                fontSize: "1.2rem",
                border: "1px solid #0554D3",
                fontWeight: 700,
              }}
              onClick={() => setOpenLinkFamModal(true)}
            >
              Link Family
            </Button>
          </Box>
        </Stack>

        {formik.values.showInsuranceData === true &&
          formik.values.insuredPartyDTO?.length > 0 && (
            <div style={{ marginTop: "21px" }}>
              <Box>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore
                        sx={{
                          fontSize: "25px",
                          color: "#216FED",
                          border: "1px solid #216FED",
                          borderRadius: "50px",
                        }}
                      />
                    }
                  >
                    <Typography component="h4">Insured Parties</Typography>
                  </AccordionSummary>
                  {formik.values.insuredPartyDTO?.map((item) => (
                    <>
                      <AccordionDetails>
                        <Typography
                          sx={accordioStyling.primaryText}
                          component="h4"
                        >
                          {`${item.insuredFirstName}, ${item.insuredLastName} (Individual - linked to #7867690)`}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "20px",
                            alignItems: "flex-start",
                          }}
                        >
                          <Stack gap="10px">
                            <Typography sx={accordioStyling.secondaryText}>
                              DOB:{" "}
                              {new Date(
                                item.insuredDateOfBirth
                              ).toLocaleDateString()}
                            </Typography>
                            <Typography sx={accordioStyling.secondaryText}>
                              {item.insuredGenderIdentityName}
                            </Typography>
                          </Stack>

                          <Stack gap="10px">
                            <Typography
                              sx={accordioStyling.secondaryText}
                            >{`${item.insuredAddress}, ${item.insuredCityName}`}</Typography>

                            <Typography
                              sx={accordioStyling.secondaryText}
                            >{`${item.insuredStateName} ${item.insuredZipCode}`}</Typography>
                          </Stack>
                          <Stack gap="10px" justifyContent="flex-start">
                            <Typography sx={accordioStyling.secondaryText}>
                              Cell: {item.insuredCellPhone}
                            </Typography>
                            {item.insuredHomePhone && (
                              <Typography sx={accordioStyling.secondaryText}>
                                Home: {item.insuredHomePhone}
                              </Typography>
                            )}
                            {item.insuredWorkPhone && (
                              <Typography sx={accordioStyling.secondaryText}>
                                Work: {item.insuredWorkPhone}
                              </Typography>
                            )}
                            {item.insuredExt && (
                              <Typography sx={accordioStyling.secondaryText}>
                                Ext: {item.insuredExt}
                              </Typography>
                            )}
                          </Stack>
                        </Box>
                      </AccordionDetails>
                    </>
                  ))}
                </Accordion>
              </Box>

              <Box marginTop="15px">
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore
                        sx={{
                          fontSize: "25px",
                          color: "#216FED",
                          border: "1px solid #216FED",
                          borderRadius: "50px",
                        }}
                      />
                    }
                  >
                    <Typography fontSize="1.6rem" component="h3">
                      Primary Payers
                    </Typography>
                  </AccordionSummary>
                  {formik.values.insuredPartyDTO?.map((item) => (
                    <>
                      {item.payerInfoPayerName && item.payerInfoMemberId && (
                        <AccordionDetails>
                          <Typography
                            sx={accordioStyling.primaryText}
                          >{`${item.payerInfoPayerName}. (#${item.payerInfoSequenceNumber})`}</Typography>

                          <Stack direction="row" gap="30px" padding="20px">
                            <Box>
                              <img
                                src={galleryAvatar}
                                style={{
                                  width: "150px",
                                }}
                              />
                            </Box>
                            <Stack
                              direction="row"
                              gap="100px"
                              sx={{
                                width: "100%",
                              }}
                            >
                              <Stack gap="10px">
                                <Typography sx={accordioStyling.secondaryText}>
                                  Insured:{" "}
                                  {`${item.insuredLastName} ${item.insuredFirstName}`}
                                </Typography>
                                <Typography sx={accordioStyling.secondaryText}>
                                  Member ID: {item.payerInfoMemberId}
                                </Typography>
                                <Typography sx={accordioStyling.secondaryText}>
                                  Group ID: {item.payerInfoGroupId}
                                </Typography>
                              </Stack>
                              <Stack gap="10px">
                                <Typography sx={accordioStyling.secondaryText}>
                                  Copay: ${item.payerInfoCopayAmount}
                                </Typography>
                                <Typography sx={accordioStyling.secondaryText}>
                                  Co-Insurance:{" "}
                                  {item.payerInfoCoInsurancePercent}%
                                </Typography>
                                <Typography sx={accordioStyling.secondaryText}>
                                  Deductible: ${item.payerInfoDeductibleAmount}
                                </Typography>
                                <Typography sx={accordioStyling.secondaryText}>
                                  Out Of Pocket Max: $
                                  {item.payerInfoOutOfPocketMax}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </AccordionDetails>
                      )}
                    </>
                  ))}
                </Accordion>
              </Box>
            </div>
          )}
      </Box>
    </>
  );
};

export default MainInsurance;
