export const patientInitValues = {
  firstName: "",
  lastName: "",
  // patientAccountNo: null,
  accountNo: null,
  email: "",
  drivingLicense: "",
  dateOfBirth: null,
  dateOfDeath: null,
  cellPhone: null,
  homePhone: null,
  workPhone: null,
  ext: null,
  address: "",
  zipCode: "",
  emergencyContactFirstName: "",
  emergencyContactLastName: "",
  emergencyContactAddress: "",
  emergencyContactZipCode: "",
  emergencyContactState: "",
  emergencyContactCity: "",
  // dateOfDeath: null,
  // dropdowns
  genderIdentityName: "",
  maritalStatusName: "",
  raceStatusName: "",
  sexualOrientationName: "",
  employmentStatusName: "",
  referralSourceName: "",
  relationShipToPatientName: "",
  ethnicityName: "",
  studentStatusName: "",
  accountType: "",
  cityName: "",
  countryName: "",
  stateName: "",
  residenceTypeName: "",

  // Insured Information Data
  insuredFirstName: "",
  insuredLastName: "",
  insuredDateOfBirth: null,
  insuredAddress: "",
  insuredSSN: "",
  insuredZipCode: "",
  insuredHomePhone: null,
  insuredCellPhone: null,
  insuredWorkPhone: null,
  insuredExt: null,
  insuredEmail: "",
  insuredCityName: "",
  insuredStateName: "",
  insuredCountryName: "",
  insuredRelationShipToPatientName: "",
  insuredGenderIdentityName: "",
  insuredPriorityType: "",
  // employeeName: "",
  empAddress: "",
  empCityName: "",
  empStateName: "",
  insuredPartyName: "",
  empZipCode: "",
  empEmploymentStatusName: "",

  // patientName: "",

  // payer info data
  payerInfoMemberId: null,
  payerInfoGroupId: null,
  payerInfoCopayAmount: null,
  payerInfoCoInsurancePercent: null,
  payerInfoDeductibleAmount: null,
  payerInfoOutOfPocketMax: null,
  payerInfoEffectiveDate: null,
  payerInfoTerminationDate: null,
  payerInfoPriorityName: "",
  payerInfoPolicyType: "",
  payerInfoPayerName: "",
};

export const claimInitVal = {
  patientName: "",
  patientAccountNo: null,
  renderingProviderName: "",
  billingProviderName: "",
  supervisingProviderName: "",
  practiceAddress: "",
  practiceSequenceNo: null,
  primaryPayerInsuranceName: "",
  primaryPayerMemberId: null,
  primaryPayerGroupId: null,
  primaryPayerPolicyType: "",
  primaryPayerCopayDue: null,
  // payerSequenceNo: null,
  claimFrequency: "",
  referenceNumber: null,
  facilityName: "",
  claimType: "Professional",
  tcn: "abc",
  totalCharges: 200,
  totalBilled: 200,

  // claim charges
  icD_A: null,
  icD_B: null,
  icD_C: null,
  icD_D: null,
  icD_E: null,
  icD_F: null,
  icD_G: null,
  icD_H: null,
  icD_I: null,
  icD_J: null,
  icD_K: null,
  icD_L: null,

  // description
  icd_A_Description: "",
  icd_B_Description: "",
  icd_C_Description: "",
  icd_D_Description: "",
  icd_E_Description: "",
  icd_F_Description: "",
  icd_G_Description: "",
  icd_H_Description: "",
  icd_I_Description: "",
  icd_J_Description: "",
  icd_K_Description: "",
  icd_L_Description: "",
};

export const paymentInitValue = {
  isClaim: true,
  isPatientPayment: false,
  paymentBy: "",
  payerSequenceNo: null,
  payerId: null,
  payerName: "",
  paymentFrom: null,
  paymentFromName: "",
  paymentAmount: null,
  checkDate: null,
  checkNumber: "",
  patientAccountNo: null,
  patientId: null,
  isCopay: false,
  copayServiceDate: null,
  memo: "",
  claimNumber: null,
  claimInfoId: null,
  creditCardType: "",
  paymentMethod: "check",
  patientFirstName: "",
  patientLastName: "",
  tcn: "",
  dateOfService: null,
  providerId: null,
  billed: 0,
  allowed: 0,
  paid: 0,
  unpaid: 0,
  adjusted: 0,
  additionalActions: 0,
  balance: 0,
  isRemove: false,
  procedureCodes: "",
  amount: 0,
  startBalance: 0,
  deductible: null,
  claimStatus: "",
  otherCredits: null,
  endBalanace: 0,
  claimChargesDto: [],
  applied: 0,
};
