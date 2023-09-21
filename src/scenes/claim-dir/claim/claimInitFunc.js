// function to get icd fields index and set codes according to alphabets
export const icdInitialCodes = (prefix, diagnosisDetailDto) => {
  const initialValues = {};
  const icdFieldsNames = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
  ];
  // iterate field names
  icdFieldsNames.forEach((fieldName, index) => {
    const icD_Code =
      diagnosisDetailDto && diagnosisDetailDto[index]
        ? diagnosisDetailDto[index].diagnosisCode
        : null;
    initialValues[prefix + fieldName] = icD_Code || null;
  });

  return initialValues;
};

// function to get icd fields index and set Ids according to alphabets
export const icdInitialId = (prefix, diagnosisDetailDto) => {
  const initialValues = {};
  const icdFieldsNames = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
  ];
  // iterate field names
  icdFieldsNames.forEach((fieldName, index) => {
    const icD_Id =
      diagnosisDetailDto && diagnosisDetailDto[index]
        ? diagnosisDetailDto[index].diagnosisCodesId
        : null;
    initialValues[prefix + fieldName] = icD_Id || null;
  });

  return initialValues;
};

// function to get icd fields index and set description according to alphabets
export const icdInitDescription = (prefix, diagnosisDetailDto) => {
  const initialValues = {};
  const icdFieldsNames = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
  ];
  // iterate field names
  icdFieldsNames.forEach((fieldName, index) => {
    const icD_Description =
      diagnosisDetailDto && diagnosisDetailDto[index]
        ? diagnosisDetailDto[index].diagnosisDescription
        : null;
    initialValues[prefix + fieldName] = icD_Description || null;
  });

  return initialValues;
};
