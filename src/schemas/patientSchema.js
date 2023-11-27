import * as yup from "yup";

export const patientSchema = yup.object({
  insuredFirstName: yup.string().required("First Name is Required"),
  insuredLastName: yup.string().required("Last Name is Required"),
  insuredAddress: yup.string().required("Address is Required"),
  insuredCellPhone: yup.string().required("Cell Phone is Required"),
  insuredCityName: yup.string().required("City is Required"),
  insuredGenderIdentityName: yup.string().required("Gender is Required"),
  insuredStateName: yup.string().required("State is Required"),
  insuredZipCode: yup.string().required("Zipcode is Required"),
  payerInfoPayerName: yup.string().required("Payer is required"),
  payerInfoMemberId: yup.string().required("Member Id is Required"),
});
