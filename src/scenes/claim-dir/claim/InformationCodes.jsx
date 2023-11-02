import { Box, FormControl, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomSelectBox2 from "../../../components/CustomSelectBox2";
import CustomField from "../../../components/CustomField";
import CustomModal from "../../../components/CustomModal";
import Diagnosis from "../../custom-setup/diagnosis/Diagnosis";
import OtherProcdure from "../../custom-setup/other-procedure/OtherProcedure";
import { SignalCellularNull } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const InformationCodes = ({ formik }) => {
  const [openDiagnosisModal, setOpenDiagnosisModal] = useState(false);
  const [openProcedureModal, setOpenProcedureModal] = useState(false);
  console.log("claimDTO", formik.values)
  const types = [
    {
      id: 1,
      type: "One",
    },
    {
      id: 2,
      type: "Two",
    },
    {
      id: 3,
      type: "Three",
    },
  ];
  const [diagnoseTable , setDiagnoseTable] = useState(null)

  let claimInfoCodeName = [
    {
      id: 1,
      name: "Injury Caues"
    }, {
      id: 2,
      name: "Patient Visit Reason"
    }, {
      id: 3,
      name: "Other Diagnosis"
    }, {
      id: 4,
      name: "Other Procedure"
    }, {
      id: 5,
      name: "Occurrence Span"
    }, {
      id: 6,
      name: "Occurrence"
    }, {
      id: 7,
      name: "Value"
    }, {
      id: 8,
      name: "Condition"
    }
  ]

  //   handle diagnosis
  const handleInsDiagnosis = (value , daignoseTableId) => {
    console.log(value, daignoseTableId ,"check handle diagnos");

    formik.values.insClaimInfoDetailDto.push({
      insClaimInfoCTId: value?.id,
      insClaimInfoCodeId: daignoseTableId,
      codeType : value?.codeType,
      description : value?.diagnosisDescription,
      from: null,
      to: null,
      valueAmount: 0,
      poaId : null,
    })
    console.log("formik.value" , formik.values)
    setOpenDiagnosisModal(false);
    setOpenProcedureModal(false);
  };

  const clickClaimInfoSearch = (claimId) => {
    if (claimId === 1 || claimId === 2 || claimId === 3) {
      console.log("daignose model")
      setDiagnoseTable(claimId)
      setOpenDiagnosisModal(true)      
    }else{
      console.log("procedure model")
      setDiagnoseTable(claimId)
      setOpenProcedureModal(true)
    }
  }

  const handleValueChange = (parentId , childId , type , e)=>{
/// store insClaimInfoDetailDto value into insCalimDto Val
    let insClaimDto = formik?.values?.insClaimInfoDetailDto
    // findIndex of current Child
    let found = insClaimDto.findIndex((val)=> val?.insClaimInfoCTId === childId && val?.insClaimInfoCodeId === parentId)
    // replace values if integer than convert into integer
     if (found !== -1) {
      let currentObj = insClaimDto[found]
      if (type === "valueAmount") {
        currentObj[type]  = parseFloat(e.target.value)
      }else{
        currentObj[type]  = e.target.value
      }
      formik.setFieldValue("insClaimInfoDetailDto", insClaimDto);
    }
  }

  const handleDelete = (parentId , childId)=>{
     console.log("parentId , childId " , parentId , childId )
     let insClaimDto = formik?.values?.insClaimInfoDetailDto
     // findIndex of current Child
     let found = insClaimDto.findIndex((val)=> val?.insClaimInfoCTId === childId && val?.insClaimInfoCodeId === parentId)
     // replace values if integer than convert into integer
      if (found !== -1) {
       insClaimDto.splice(found , 1)
      }
      formik.setFieldValue("insClaimInfoDetailDto", insClaimDto);
  }
  return (
    <>
      {/* modals */}
      { diagnoseTable === 1 || diagnoseTable ===  2 || diagnoseTable ===  3 ? <CustomModal
        open={openDiagnosisModal}
        handleClose={() => setOpenDiagnosisModal(false)}
      >
        <Diagnosis
          handleClose={() => setOpenDiagnosisModal(false)}
          formik={formik}
          diagnoseTable={diagnoseTable}
          //   icdIdentifier={icdIdentifier}
          handleInsDiagnosis={handleInsDiagnosis}
        />
      </CustomModal>  : 
      <CustomModal
      open={openProcedureModal}
        handleClose={() => setOpenProcedureModal(false)}
      >
        <OtherProcdure
          handleClose={() => setOpenProcedureModal(false)}
          formik={formik}
          diagnoseTable={diagnoseTable}
          //   icdIdentifier={icdIdentifier}
          handleInsDiagnosis={handleInsDiagnosis}
        />
      </CustomModal>}
      {/* modals end */}
      <Box
        display="grid"
        gap="20px"
        sx={{
          marginTop: "20px",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(1, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 450px))",
          },
        }}
      >
        <Stack
          className="infoCodeContainer"
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <FormControl fullWidth>
            <CustomSearchField label="Principal DIagnosis" />
          </FormControl>
          <Typography
            variant="h6"
            component="span"
            className="ft_content"
            width={{ xs: "100%", sm: "30%", md: "38%" }}
            display={formik.values.formType === "1" && "none"}
          >
            {/* {formik.values.formType === "2"
                    ? "2300 REF~P4"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
          </Typography>
        </Stack>
        {/* POA */}
        <Stack
          className="infoCodeContainer"
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <FormControl fullWidth>
            <CustomSelectBox2
              name="admissionTypeId"
              value={formik.values.admissionTypeId}
              dropdownOptions={types?.map((opt) => ({
                value: opt.type,
                id: opt.id,
              }))}
              label="POA"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </FormControl>
          <Typography
            variant="h6"
            component="span"
            className="ft_content"
            width={{ xs: "100%", sm: "30%", md: "38%" }}
            display={formik.values.formType === "1" && "none"}
          >
            {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
          </Typography>
        </Stack>
        {/* Admitting Diagnosis */}
        <Stack
          className="infoCodeContainer"
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <FormControl fullWidth>
            <CustomSearchField label="Admitting Diagnosis" />
          </FormControl>
          <Typography
            variant="h6"
            component="span"
            className="ft_content"
            width={{ xs: "100%", sm: "30%", md: "38%" }}
            display={formik.values.formType === "1" && "none"}
          >
            {/* {formik.values.formType === "2"
                    ? "2300 REF~P4"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
          </Typography>
        </Stack>
      </Box>
      {claimInfoCodeName?.map((val, index) => {
        return (
          <Box>
            <Typography sx={{ marginTop: "10px" }} >{val?.name}</Typography>
            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "10px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 920px))",
                },
              }}
            >
              <table style={{ border: "1px solid black" , padding:"2px" , borderRadius:"6px"}}>
                <thead style={{backgroundColor:"#ECECED"}}>
                  <tr >
                    <th style={{ border: "1px solid black"  , padding:"2px"}}>Code</th>
                    {(val.id === 4 || val.id === 5 || val.id === 6) && <th style={{ border: "1px solid black", padding:"2px" }}>{ (val?.id === 4 || val?.id === 6) ? "Date" : "From"}</th>}
                    {(val.id ===  5 ) && <th style={{ border: "1px solid black" , padding:"2px"}}>To</th>}
                    {val.id === 7 && <th style={{ border: "1px solid black" , padding:"2px"}}>Amount</th>}
                    <th style={{ border: "1px solid black" , padding:"2px"}}>Description</th>
                    {val.id === 3 && <th style={{ border: "1px solid black", padding:"2px" }}>POA</th>}
                     <th style={{ border: "1px solid black" , width:"20px" , padding:"2px"}}></th>
                  </tr>
                </thead>
                {formik?.values?.insClaimInfoDetailDto?.map((el , id)=>{
                  return(     
                    el?.insClaimInfoCodeId === val?.id &&
                    (<tbody>
                     
                    <tr>
                      <td style={{cursor:"pointer" ,border: "1px solid black"  , padding:"2px"}} onClick={()=> clickClaimInfoSearch(val?.id)}><div style={{display:"flex"}}><div>{el?.codeType}</div><div>S</div></div></td>
                      {(val.id === 4 || val.id === 5 || val.id === 6) && <td style={{ border: "1px solid black" }}> <input
                        type="date"
                        style={{ padding :"3px" , width:"100%" }}
                      value={el?.from}
                      onChange={(e)=> handleValueChange(val?.id , el?.insClaimInfoCTId , "from"  , e)}
                      /></td>}
                      {(val.id ===  5 ) && <td style={{ border: "1px solid black"}}><input
                        type="date"
                      value={el?.to}
                      style={{ padding :"3px" , width:"100%" }}
                      onChange={(e)=> handleValueChange(val?.id , el?.insClaimInfoCTId , "to" , e)}
                      /></td>}
                      {val.id === 7 && <td style={{ border: "1px solid black" }}><input style={{ padding :"3px" , width:"100%" }} type="number" value={el?.valueAmount} onChange={(e)=> handleValueChange(val?.id , el?.insClaimInfoCTId , "valueAmount"  , e)} ></input></td>}
                      <td>{el?.description}</td>
                      {val.id === 3 && <td ><select value={el?.poaId} style={{ padding :"3px" , width:"100%" }} onChange={(e)=> handleValueChange(val?.id , el?.insClaimInfoCTId , "poaId"  , e)}>
                        <option  >Select</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select></td>}
                      <td style={{cursor:"pointer" , border: "1px solid black" }} onClick={()=> handleDelete(val?.id , el?.insClaimInfoCTId) }><CloseIcon /></td>
                    </tr>
                   
                  </tbody>)
                  )
                })}
                <tbody>
                  <tr>
                    <td style={{cursor:"pointer"  , padding:"2px" , display:"flex" , justifyContent:"flex-end"}} onClick={()=> clickClaimInfoSearch(val?.id)}><div><div></div><div><SearchIcon /></div></div></td>
                    {(val.id === 4 || val.id === 5 || val.id === 6) && <td style={{ border: "1px solid black"}}> <input
                      type="date"
                      disabled
                      style={{ padding :"3px" , width:"100%" }}
                    // value={selectedDate}
                    // onChange={handleDateChange}
                    /></td>}
                    {(val.id ===  5 ) && <td style={{ border: "1px solid black" }}><input
                      type="date"
                      disabled
                      style={{ padding :"3px" , width:"100%" }}
                    // value={selectedDate}
                    // onChange={handleDateChange}
                    /></td>}
                    {val.id === 7 && <td style={{ border: "1px solid black" }}><input disabled style={{ padding :"3px" , width:"100%" }}  type="number"></input></td>}
                    <td style={{ border: "1px solid black"  , padding:"2px"}}></td>
                    {val.id === 3 && <td style={{ border: "1px solid black" }}><select disabled style={{ padding :"3px" , width:"100%" }}>
                      <option>Select</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select></td>}
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>
        )
      })}

    </>
  );
};

export default InformationCodes;
