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
  payerInfoSequenceNumber: null,
  // billing info
  isSendStatement: false,
  statementTypeId: null,
  mailStatementId: null,
  patientComment1: "",
  patientComment2: "",
  isFinalDemandNotice: false,
  collectionDate: null,
  collectionReason: "",
  billingRelationshipToPatientId: null,
  guarantorFirstName: "",
  guarantorLastName: "",
  guarantorMI: "",
  guarantorDOB: null,
  guarantorSSN: "",
  guarantorAddress: "",
  guarantorCity: "",
  guarantorState: "",
  guarantorZipCode: "",
  isInternationalAddress: false,
  guarantorHomePhone: "",
  guarantorCellPhone: "",
  guarantorWorkPhone: "",
  guarantorEmail: "",
  guarantorRemarks: "",

  // claim defaults
  defaultProviderId: null,
  defaultOrderingProviderId: null,
  defaultOfficeLocation: "",
  defaultFacilityId: null,
  defaultRenderingProviderId: null,
  assignmentOfBenefitId: null,
  providerAcceptanceId: null,
  isIncludeIllnessInfo: null,
  accidentDate: null,
  accidentState: "",
  accidentTypeId: null,
  admissionDate: null,
  admissionHourId: null,
  lastMenstrualDate: null,
  initialTreatmentDate: null,

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
  cpT_1: null,
  cpT_2: null,
  cpT_3: null,
  cpT_4: null,
  cpT_5: null,
  cpT_6: null,
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
  frequencyTypeId: null,
  referenceNumber: null,

  claimTypeId: 1,
  // tcn: "abc",
  // totalCharges: 200,
  // totalBilled: 200,

  // claim diagnosis id
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

  // claim diagnosis name
  icD_Code_A: "",
  icD_Code_B: "",
  icD_Code_C: "",
  icD_Code_D: "",
  icD_Code_E: "",
  icD_Code_F: "",
  icD_Code_G: "",
  icD_Code_H: "",
  icD_Code_I: "",
  icD_Code_J: "",
  icD_Code_K: "",
  icD_Code_L: "",

  // description
  icd_Description_A: "",
  icd_Description_B: "",
  icd_Description_C: "",
  icd_Description_D: "",
  icd_Description_E: "",
  icd_Description_F: "",
  icd_Description_G: "",
  icd_Description_H: "",
  icd_Description_I: "",
  icd_Description_J: "",
  icd_Description_K: "",
  icd_Description_L: "",

  // additioal info init vals
  formTypeId: 1,
  isEmployment: false,
  isAutoAccident: false,
  isOtherAccident: false,
  accidentDate: null,
  lastMenstrualDate: null,
  initialTreatmentDate: null,
  lastSeenDate: null,
  unableToWorkFromDate: null,
  unableToWorkToDate: null,
  isPatientHomebound: false,
  claimCodes: "",
  otherClaimId: null,
  claimInformation: "",
  claimNote: "",
  reasonCode: "",
  reasonDelayCodeId: null,
  hospitalizedFromDate: null,
  hospitalizedToDate: null,
  labCharges: 0,
  specialProgramCodeId: null,
  patientSignatureId: null,
  insuredSignatureId: null,
  providerAcceptanceId: null,
  documentationMethodId: null,
  documentationTypeId: null,
  patientHeight: 0,
  patientWeight: 0,
  serviceAuthorizationId: null,
  demonstrationProject: "",
  mammographyCertification: "",
  investigationalDeviceExemption: "",
  ambulatoryPatientGroup: "",

  // ambulance info
  ambulanceClaimType: "false",
  transportReasonId: null,
  transportMiles: 0,
  ambPatientWeight: 0,
  roundTripReason: "",
  stretcherReason: "",
  pickupAddress: "",
  pickupCity: "",
  pickupState: "",
  pickupZipCode: "",
  dropOffName: "",
  dropOffAddress: "",
  dropOffCity: "",
  dropOffState: "",
  dropOffZipCode: "",
  certificationFieldType: "",

  // institutional
  // isProfessional: 1,
  statementCoversFromDate: null,
  statementCoversToDate: null,
  admissionDate: null,
  admissionHourId: null,
  admissionTypeId: null,
  admissionSourceId: null,
  dischargeHourId: null,
  patientStatusId: null,
  delayReasonCodeId: null,
  pps: "",
  patientDueAmount: 0,
  remarks: "",
  releaseOfInfoId: null,
  assignmentOfBenefitId: null,
  // providerAcceptAssignment: null,
  epsdT_1: 0,
  epsdT_2: 0,
  epsdT_3: 0,
  principalDiagnosisId: null,
  poa: null,
  admittingDiagnosisId: null,
  injuryCauseId: null,
  patientVisitReasonId: null,
  otherDiagnosisId: null,
  principalProcedureId: null,
  principalProcedureDate: null,
  occurrenceSpanId: null,
  occurrenceSpanFromDate: null,
  occurrenceSpanToDate: null,
  occurrenceId: null,
  occurrenceDate: null,
  valueId: null,
  valueAmount: 0,
  conditionId: null,

  // intial value of INfoCOde DTO
  insClaimInfoDetailDto: [],
};

export const paymentInitVal3 = {
  isClaim: true,
  paymentByTypeId: 2,
  payerSequenceNo: null,
  payerId: null,
  paymentFrom: null,
  paymentFromName: null,
  paymentBy: null,
  payerName: null,
  paymentAmount: 0,
  checkDate: null,
  checkNumber: null,
  paymentTypeId: null,
  copayServiceDate: null,
  memo: null,
  eftNumber: null,
  paymentMethodId: null,
  creditCardTypeId: null,
  providerId: null,
  providerName: null,
  sequenceNo: null,
  totalPaymentReceived: 0,
  applied: 0,
};
