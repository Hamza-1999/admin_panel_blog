import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import QrImg from "../../assets/qr-code.png";

const styles = StyleSheet.create({
  mainContainer: { color: "red", border: "1px solid red" },
  headerWrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headerContentBox: {
    border: "1px solid green",
    width: "49%",
  },
  heading: { fontSize: "12pt", fontWeight: "heavy", margin: "4px 0" },
  primaryText: { fontSize: "6px", fontWeight: "ultralight" },
  primaryTextBlack: {
    fontSize: "8px",
    fontWeight: "ultralight",
    color: "black",
  },
  primaryTextBlack2: {
    fontSize: "7px",
    fontWeight: "ultralight",
    color: "black",
  },
  secondaryText: {
    fontSize: "10pt",
    color: "black",
    wordSpacing: "1.5px",
  },
  //PCA
  pcaHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "10px",
  },
  pcaBox: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  pcaBoxItem: { width: "8px", height: "12px", border: "1px solid red" },

  // body section
  bodyContainer: {
    borderTop: "3px solid red",
    borderLeft: "1px solid red",
    borderBottom: "3px solid red",
    borderRight: "1px solid red",
    display: "flex",
    flexDirection: "column",
  },
  bodyContainerInner: {
    // borderTop: "3px solid red",
    // borderLeft: "1px solid red",
    borderBottom: "1px solid red",
    // borderRight: "1px solid red",
    display: "flex",
    flexDirection: "row",
  },
  bodyWrapper1: { width: "60%", border: "0px 1px 1px 0px solid red" },
  bodyWrapper1Content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  bodyWrapper2: { width: "40%", borderLeft: "1px solid red" },
  checkbox: { width: "10px", height: "10px", border: "1px solid red" },
  checkboxWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexRowAround: {
    justifyContent: "space-around",
  },
  flexCol25: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "25%",
  },
  flexRow25: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    width: "25%",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  flexCol75: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "75%",
  },
  borderRightDotted: {
    borderRight: "0.5px dashed red",
  },
  gap5px: {
    gap: "5px",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignTextCenter: {
    textAlign: "center",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
});

const CmsForm15 = ({ pdfData }) => {
  return (
    <Document>
      <Page size="LETTER" style={{ padding: "12px" }}>
        <View style={styles.mainContainer}>
          <View style={styles.headerWrapper}>
            <View style={styles.headerContentBox}>
              <Image src={QrImg} style={{ width: "40px" }} />
              <Text style={styles.heading}>HEALTH INSURANCE CLAIM FORM</Text>
              <Text style={styles.primaryText}>
                APPROVED BY NATIONAL UNIFORM CLAIM COMMITTEE (NUCC) 02/12
              </Text>
            </View>
            <View style={styles.headerContentBox}>
              <Text style={styles.secondaryText}>
                TRAVELERS CASUALITY AND SURETY COMPANY PO BOX 430 BUFFALO, NY
                14240-0430
              </Text>
            </View>
          </View>

          {/* PCA */}
          <View style={styles.pcaHeader}>
            <View style={styles.pcaBox}>
              <View style={styles.pcaBoxItem}></View>
              <View style={styles.pcaBoxItem}></View>
              <View style={styles.pcaBoxItem}></View>
              <Text style={styles.primaryText}>PICA</Text>
            </View>

            <View style={styles.pcaBox}>
              <Text style={styles.primaryText}>PICA</Text>
              <View style={styles.pcaBoxItem}></View>
              <View style={styles.pcaBoxItem}></View>
              <View style={styles.pcaBoxItem}></View>
            </View>
          </View>

          {/* main body */}
          <View style={styles.bodyContainer}>
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View style={styles.bodyWrapper1Content}>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "15%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.flexCol25}>
                        <Text style={styles.primaryText}>1.</Text>
                        <View style={styles.checkbox}></View>
                      </View>
                      <View style={styles.flexCol75}>
                        <Text style={styles.primaryText}> MEDICARE</Text>
                        <Text style={styles.primaryText}>(Medicare#)</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "16%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.flexCol25}>
                        <View style={styles.checkbox}></View>
                      </View>
                      <View style={styles.flexCol75}>
                        <Text style={styles.primaryText}>MEDICAID</Text>
                        <Text style={styles.primaryText}>(Medicaid#)</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "14%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.flexCol25}>
                        <View style={styles.checkbox}></View>
                      </View>
                      <View style={styles.flexCol45}>
                        <Text style={styles.primaryText}>TRICARE</Text>
                        <Text style={styles.primaryText}>(lD#/DoD#)</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "5%",
                    }}
                  ></View>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "16%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.flexCol25}>
                        <View style={styles.checkbox}></View>
                      </View>
                      <View style={styles.flexCol45}>
                        <Text style={styles.primaryText}>CHAMPVA</Text>
                        <Text style={styles.primaryText}>(Member lD#)</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "19%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.flexCol25}>
                        <View style={styles.checkbox}></View>
                      </View>
                      <View style={styles.flexCol75}>
                        <Text style={styles.primaryText}>GROUP</Text>
                        <Text style={styles.primaryText}>HEALTH PLAN</Text>
                        <Text style={styles.primaryText}>(lD#)</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "17%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.flexCol25}>
                        <View style={styles.checkbox}></View>
                      </View>
                      <View style={styles.flexCol75}>
                        <Text style={styles.primaryText}>FECA</Text>
                        <Text style={styles.primaryText}>BLK LUNG</Text>
                        <Text style={styles.primaryText}>(lD#)</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid black",
                      width: "14%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.flexCol25}>
                        <View style={styles.checkbox}></View>
                      </View>
                      <View style={styles.flexCol75}>
                        <Text style={styles.primaryText}>OTHER</Text>
                        <Text style={styles.primaryText}>(lD#)</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <View style={[styles.flexCol, styles.gap5px]}>
                  <View style={[styles.flexRow, styles.spaceBetween]}>
                    <Text style={[styles.primaryText]}>
                      {" "}
                      1a. INSURED'S ID. NUMBER{" "}
                    </Text>
                    <Text style={[styles.primaryText]}>
                      (For Program in item 1)
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.primaryTextBlack]}>225356731</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View style={[styles.bodyWrapper1Content, styles.spaceBetween]}>
                  <View
                    style={{
                      borderRight: "0.5px solid red",
                      width: "64%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View
                        style={[
                          styles.flexCol,
                          styles.spaceBetween,
                          { gap: "5px" },
                        ]}
                      >
                        <Text style={styles.primaryText}>
                          2. PATIENT'S NAME (Last Name , First Name , Middle
                          Name)
                        </Text>
                        <Text style={styles.primaryTextBlack}>
                          CORTEZ , JAYDA
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid red",
                      width: "35%",
                    }}
                  >
                    <View style={`${styles.flexRow}`}>
                      <View style={[styles.flexCol, styles.spaceAround]}>
                        <Text style={styles.primaryText}>
                          3. PATIENT'S BIRTH DATE SEX
                        </Text>
                        <View style={[styles.flexRow, styles.flexRowAround]}>
                          <View style={styles.flexCol}>
                            <Text style={styles.primaryText}>MM</Text>
                            <Text style={styles.primaryTextBlack}>06</Text>
                          </View>
                          <View style={styles.borderRightDotted}></View>
                          <View style={styles.flexCol}>
                            <Text style={styles.primaryText}>DD</Text>
                            <Text style={styles.primaryTextBlack}>27</Text>
                          </View>
                          <View style={styles.borderRightDotted}></View>
                          <View style={styles.flexCol}>
                            <Text style={styles.primaryText}>YY</Text>
                            <Text style={styles.primaryTextBlack}>1997</Text>
                          </View>
                          <View style={styles.flexRow}>
                            <Text style={styles.primaryText}>M</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                          <View style={styles.flexRow}>
                            <Text style={styles.primaryText}>F</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <View style={[styles.flexCol, styles.gap5px]}>
                  <View>
                    <Text style={styles.primaryText}>
                      2. PATIENT'S NAME (Last Name , First Name , Middle Name)
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.primaryTextBlack}>CORTEZ , JAYDA</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View style={[styles.bodyWrapper1Content, styles.spaceBetween]}>
                  <View
                    style={{
                      borderRight: "0.5px solid red",
                      width: "64%",
                    }}
                  >
                    <View style={styles.flexRow}>
                      <View
                        style={[
                          styles.flexCol,
                          styles.spaceBetween,
                          { gap: "5px" },
                        ]}
                      >
                        <Text style={styles.primaryText}>
                          2. PATIENT'S ADDRESS (No., Street)
                        </Text>
                        <Text style={styles.primaryTextBlack}>
                          4808 108TH ST APT 3C
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid red",
                      width: "35%",
                    }}
                  >
                    <View style={`${styles.flexRow}`}>
                      <View
                        style={[
                          styles.flexCol,
                          styles.spaceAround,
                          styles.gap5px,
                        ]}
                      >
                        <Text style={styles.primaryText}>
                          3. PATIENT RELATIONSHIP TO INSURED
                        </Text>
                        <View style={[styles.flexRow, styles.flexRowAround]}>
                          <View
                            style={[styles.flexRow, styles.alignItemsCenter]}
                          >
                            <Text style={styles.primaryText}>Self</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                          <View
                            style={[styles.flexRow, styles.alignItemsCenter]}
                          >
                            <Text style={styles.primaryText}>Spouse</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                          <View
                            style={[styles.flexRow, styles.alignItemsCenter]}
                          >
                            <Text style={styles.primaryText}>Child</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                          <View
                            style={[styles.flexRow, styles.alignItemsCenter]}
                          >
                            <Text style={styles.primaryText}>Other</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <View style={[styles.flexCol, styles.gap5px]}>
                  <View>
                    <Text style={[styles.primaryText]}>
                      {" "}
                      1a. INSURED'S ADDRESS (No., Street){" "}
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.primaryTextBlack]}>
                      4808 108TH ST APT 3C
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View style={[styles.flexRow, styles.spaceBetween]}>
                  <View
                    style={[
                      styles.flexCol,
                      { borderRight: "0.5px solid red", width: "64%" },
                    ]}
                  >
                    <View
                      style={[
                        styles.flexRow,
                        { borderBottom: "0.5px solid red" },
                      ]}
                    >
                      <View style={[styles.flexRow]}>
                        <View
                          style={[
                            styles.flexCol,
                            {
                              borderRight: "0.5px solid red",
                              gap: "5px",
                              width: "95%",
                            },
                          ]}
                        >
                          <Text style={styles.primaryText}>CITY</Text>
                          <Text style={styles.primaryTextBlack}>CORONA</Text>
                        </View>
                      </View>
                      <View style={styles.flexRow}>
                        <View
                          style={[
                            styles.flexCol,
                            styles.spaceBetween,
                            { gap: "5px", textAlign: "center" },
                          ]}
                        >
                          <Text style={styles.primaryText}>STATE</Text>
                          <Text style={styles.primaryTextBlack}>NY</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View
                        style={[
                          styles.flexRow,
                          { borderBottom: "0.5px solid red" },
                        ]}
                      >
                        <View style={[styles.flexRow]}>
                          <View
                            style={[
                              styles.flexCol,
                              {
                                borderRight: "0.5px solid red",
                                gap: "5px",
                                width: "60%",
                              },
                            ]}
                          >
                            <Text style={styles.primaryText}>ZIP CODE</Text>
                            <Text style={styles.primaryTextBlack}>11368</Text>
                          </View>
                        </View>
                        <View style={[styles.flexRow]}>
                          <View
                            style={[
                              styles.flexCol,
                              styles.spaceBetween,
                              { gap: "5px" },
                            ]}
                          >
                            <Text style={[styles.primaryText]}>
                              TELEPHONE (Include Area Code)
                            </Text>
                            <Text
                              style={{
                                fontSize: "12px",
                                fontWeight: "extrabold",
                              }}
                            >
                              ( )
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: "1px solid red",
                      width: "35%",
                    }}
                  >
                    <Text style={styles.primaryText}>
                      {" "}
                      8. RESERVED FOR NUCC USE
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <View
                  style={[styles.flexRow, { borderBottom: "0.5px solid red" }]}
                >
                  <View style={[styles.flexRow]}>
                    <View
                      style={[
                        styles.flexCol,
                        {
                          borderRight: "0.5px solid red",
                          gap: "5px",
                          width: "95%",
                        },
                      ]}
                    >
                      <Text style={styles.primaryText}>CITY</Text>
                      <Text style={styles.primaryTextBlack}>CORONA</Text>
                    </View>
                  </View>
                  <View style={styles.flexRow}>
                    <View
                      style={[
                        styles.flexCol,
                        styles.spaceBetween,
                        { gap: "5px", textAlign: "center" },
                      ]}
                    >
                      <Text style={styles.primaryText}>STATE</Text>
                      <Text style={styles.primaryTextBlack}>NY</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={[
                      styles.flexRow,
                      { borderBottom: "0.5px solid red" },
                    ]}
                  >
                    <View style={[styles.flexRow]}>
                      <View
                        style={[
                          styles.flexCol,
                          {
                            borderRight: "0.5px solid red",
                            gap: "5px",
                            width: "60%",
                          },
                        ]}
                      >
                        <Text style={styles.primaryText}>ZIP CODE</Text>
                        <Text style={styles.primaryTextBlack}>11368</Text>
                      </View>
                    </View>
                    <View style={[styles.flexRow]}>
                      <View
                        style={[
                          styles.flexCol,
                          styles.spaceBetween,
                          { gap: "5px" },
                        ]}
                      >
                        <Text style={[styles.primaryText]}>
                          TELEPHONE (Include Area Code)
                        </Text>
                        <Text
                          style={{ fontSize: "12px", fontWeight: "extrabold" }}
                        >
                          ( )
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View style={[styles.flexRow]}>
                  <View
                    style={{
                      width: "64%",
                      borderBottom: "0.5px solid red",
                      borderRight: "0.5px solid red",
                    }}
                  >
                    <Text style={[styles.primaryText]}>
                      {" "}
                      9. OTHER INSURED'S NAME (Last Name , First Name , Middle
                      Intial)
                    </Text>
                  </View>
                  <View style={{ width: "35%" }}>
                    <Text style={[styles.primaryText]}>
                      {" "}
                      10. IS PATIENT CONDITION RELATED TO:
                    </Text>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View
                    style={{
                      width: "64%",
                      borderBottom: "0.5px solid red",
                      borderRight: "0.5px solid red",
                    }}
                  >
                    <Text style={[styles.primaryText]}>
                      {" "}
                      a. OTHER INSURED'S POLICY OR GROUP NUMBER
                    </Text>
                  </View>
                  <View style={[styles.flexCol, { width: "35%" }]}>
                    <Text style={[styles.primaryText]}>
                      {" "}
                      a. EMPLOYMENT (Current and Previous)
                    </Text>
                    <View style={[styles.flexRow, styles.spaceAround]}>
                      <View style={[styles.flexRow]}>
                        <View style={styles.checkbox}></View>
                        <Text style={[styles.primaryText]}>YES</Text>
                      </View>
                      <View style={[styles.flexRow]}>
                        <View style={styles.checkbox}></View>
                        <Text style={[styles.primaryText]}>NO</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View
                    style={{
                      width: "64%",
                      borderBottom: "0.5px solid red",
                      borderRight: "0.5px solid red",
                    }}
                  >
                    <Text style={[styles.primaryText]}>
                      {" "}
                      b. RESERVED FOR NUCC USE
                    </Text>
                  </View>
                  <View style={[styles.flexCol, { width: "35%" }]}>
                    <Text style={[styles.primaryText]}> b. AUTO ACCIDENT?</Text>
                    <View style={[styles.flexRow, styles.spaceAround]}>
                      <View style={[styles.flexRow]}>
                        <View style={styles.checkbox}></View>
                        <Text style={[styles.primaryText]}>YES</Text>
                      </View>
                      <View style={[styles.flexRow]}>
                        <View style={styles.checkbox}></View>
                        <Text style={[styles.primaryText]}>NO</Text>
                      </View>
                      <View style={[styles.flexCol]}>
                        <Text style={[styles.primaryText]}>Place (State)</Text>{" "}
                        <View style={styles.checkbox}></View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View
                    style={{
                      width: "64%",
                      borderBottom: "0.5px solid red",
                      borderRight: "0.5px solid red",
                    }}
                  >
                    <Text style={[styles.primaryText]}>
                      {" "}
                      c. RESERVED FOR NUCC USE
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.flexCol,
                      { width: "35%", borderBottom: "0.5px solid red" },
                    ]}
                  >
                    <Text style={[styles.primaryText]}> c. AUTO ACCIDENT?</Text>
                    <View style={[styles.flexRow, styles.spaceAround]}>
                      <View style={[styles.flexRow]}>
                        <View style={styles.checkbox}></View>
                        <Text style={[styles.primaryText]}>YES</Text>
                      </View>
                      <View style={[styles.flexRow]}>
                        <View style={styles.checkbox}></View>
                        <Text style={[styles.primaryText]}>NO</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View
                    style={{
                      width: "64%",
                      borderBottom: "0.5px solid red",
                      borderRight: "0.5px solid red",
                    }}
                  >
                    <Text style={[styles.primaryText]}>
                      {" "}
                      d. INSURANCE PLAN NAME AND PROGRASM NAME{" "}
                    </Text>
                  </View>
                  <View style={[styles.flexCol, { width: "35%" }]}>
                    <Text style={[styles.primaryText]}>
                      {" "}
                      10d. CLAIM CODE (Designated by NUCC)
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <View
                  style={{
                    borderBottom: "0.5px solid red",
                    borderRight: "0.5px solid red",
                  }}
                >
                  <Text style={[styles.primaryText]}>
                    {" "}
                    11. INSURED'S POLICY GROUP OF FECA NUMBER
                  </Text>
                </View>
                <View>
                  <View
                    style={[
                      styles.flexRow,
                      { borderBottom: "0.5px solid red" },
                    ]}
                  >
                    <View
                      style={[
                        styles.flexCol,
                        styles.spaceAround,
                        { width: "60%" },
                      ]}
                    >
                      <Text style={styles.primaryText}>
                        {" "}
                        a. INSURED'S DATE OF BIRTH
                      </Text>
                      <View
                        style={[
                          styles.flexRow,
                          { gap: "3px", marginLeft: "10px" },
                        ]}
                      >
                        <View style={styles.flexCol}>
                          <Text style={styles.primaryText}>MM</Text>
                          <Text style={styles.primaryTextBlack}>06</Text>
                        </View>
                        <View style={styles.borderRightDotted}></View>
                        <View style={styles.flexCol}>
                          <Text style={styles.primaryText}>DD</Text>
                          <Text style={styles.primaryTextBlack}>27</Text>
                        </View>
                        <View style={styles.borderRightDotted}></View>
                        <View style={styles.flexCol}>
                          <Text style={styles.primaryText}>YY</Text>
                          <Text style={styles.primaryTextBlack}>1997</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.flexCol,
                        { justifyContent: "center", width: "40%" },
                      ]}
                    >
                      <Text
                        style={[styles.primaryText, { textAlign: "center" }]}
                      >
                        SEX
                      </Text>
                      <View style={[styles.flexRow, styles.spaceAround]}>
                        <View style={styles.flexRow}>
                          <Text style={styles.primaryText}>M</Text>
                          <View style={styles.checkbox}></View>
                        </View>
                        <View style={styles.flexRow}>
                          <Text style={styles.primaryText}>F</Text>
                          <View style={styles.checkbox}></View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.flexCol,
                    {
                      borderBottom: "0.5px solid red",
                      borderRight: "0.5px solid red",
                    },
                  ]}
                >
                  <Text style={[styles.primaryText]}>
                    {" "}
                    b. OTHER CLAIM ID (Designated by NUCC)
                  </Text>
                  <View
                    style={[
                      styles.borderRightDotted,
                      { height: "4px", marginLeft: "6px" },
                    ]}
                  ></View>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainerInner}>
              <View style={[styles.flexRow, { height: "50px" }]}>
                <View style={styles.bodyWrapper1}>
                  <View
                    style={{
                      display: "flex",
                      height: "100%",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <View style={[styles.flexCol]}>
                      <Text
                        style={[
                          styles.primaryText,
                          { textAlign: "center", fontWeight: "heavy" },
                        ]}
                      >
                        READ BACK OF FORM BEFORE COMPLETING & SIGNING THIS FORM.
                      </Text>

                      <View style={[styles.flexRow, { marginTop: "3px" }]}>
                        <Text style={[styles.primaryText]}>12. </Text>
                        <Text style={[styles.primaryText, { width: "90%" }]}>
                          PATIENT OR AUTHORIZED PERSONS'S SIGNATURE I authorize
                          the release of any medical or other information
                          necessary to process the claim. I also request payment
                          of government benefits either to myself or to the
                          party who accepts assignment below.
                        </Text>
                      </View>
                    </View>
                    {/* signed date  */}
                    <View style={[styles.flexRow, styles.spaceBetween]}>
                      <View style={[styles.flexRow, { width: "65%" }]}>
                        <Text style={[styles.primaryText]}>SIGNED: </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "0.5px solid red", width: "85%" },
                          ]}
                        >
                          03/14/2022
                        </Text>
                      </View>

                      <View style={[styles.flexRow, { width: "35%" }]}>
                        <Text style={[styles.primaryText]}>DATE:</Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "0.5px solid red", width: "65%" },
                          ]}
                        ></Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.bodyWrapper2}>
                  <View
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={[styles.flexRow]}>
                      <Text style={[styles.primaryText]}>13.</Text>
                      <View style={{ width: "90%" }}>
                        <Text style={[styles.primaryText]}>
                          INSURED'S OR AUTHORIZED PERSON'S SIGNATURE I authorize
                          payment of medical benefits to the undersigned
                          physician or supplier for services destricted below.
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.flexRow]}>
                      <Text style={[styles.primaryText]}>SIGNED </Text>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { borderBottom: "0.5px solid red" },
                        ]}
                      >
                        SIGNATURE OF FILE
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* from 14 point */}
            <View style={styles.bodyContainerInner}>
              <View style={[styles.bodyWrapper1]}>
                <View style={[styles.flexRow]}>
                  {/* 14 */}
                  <View style={{ width: "60%" }}>
                    <View style={[styles.flexRow]}>
                      <Text style={[styles.primaryText]}>14. </Text>
                      <Text style={[styles.primaryText]}>
                        DATE OF CURRENT ILLNESS, INJURY, OR PREGNANCY (LMP)
                      </Text>
                    </View>
                    {/* 14 second part */}
                    <View style={[styles.flexRow, styles.alignItemsCenter]}>
                      <View
                        style={[
                          styles.flexRow,
                          styles.spaceAround,
                          { width: "50%" },
                        ]}
                      >
                        <View
                          style={[
                            styles.flexCol,
                            { borderRight: "0.5px dashed red" },
                          ]}
                        >
                          <Text style={[styles.primaryText]}>MM</Text>
                          <Text style={[styles.primaryTextBlack]}>01</Text>
                        </View>
                        <View style={{ borderRight: "0.5px dashed red" }}>
                          <Text style={[styles.primaryText]}>DD</Text>
                          <Text style={[styles.primaryTextBlack]}>20</Text>
                        </View>
                        <View style={{ borderRight: "0.5px dashed red" }}>
                          <Text style={[styles.primaryText]}>YY</Text>
                          <Text style={[styles.primaryTextBlack]}>2022</Text>
                        </View>
                      </View>
                      <View style={[styles.flexRow, { width: "50%" }]}>
                        <Text
                          style={[
                            styles.primaryText,
                            { borderRight: "0.5px dashed red !important" },
                          ]}
                        >
                          QUAL
                        </Text>
                        <Text style={[styles.primaryTextBlack]}>431</Text>
                      </View>
                    </View>
                  </View>
                  {/* 15 */}
                  <View style={{ width: "40%", borderLeft: "1px solid red" }}>
                    <View style={[styles.flexRow]}>
                      <Text style={[styles.primaryText]}>15. </Text>
                      <Text style={[styles.primaryText]}>Other Date</Text>
                    </View>
                    {/* 15 second part */}
                    <View style={[styles.flexRow, styles.alignItemsCenter]}>
                      <View style={[styles.flexRow, { width: "50%" }]}>
                        <Text
                          style={[
                            styles.primaryText,
                            { borderRight: "0.5px dashed red !important" },
                          ]}
                        >
                          QUAL
                        </Text>
                        <Text style={[styles.primaryTextBlack]}>431</Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow,
                          styles.spaceAround,
                          { width: "50%" },
                        ]}
                      >
                        <View style={{ borderRight: "0.5px dashed red" }}>
                          <Text style={[styles.primaryText]}>MM</Text>
                          <Text style={[styles.primaryTextBlack]}>01</Text>
                        </View>
                        <View style={{ borderRight: "0.5px dashed red" }}>
                          <Text style={[styles.primaryText]}>DD</Text>
                          <Text style={[styles.primaryTextBlack]}>20</Text>
                        </View>
                        <View style={{ borderRight: "0.5px dashed red" }}>
                          <Text style={[styles.primaryText]}>YY</Text>
                          <Text style={[styles.primaryTextBlack]}>2022</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.bodyWrapper2]}>
                {/* 16 */}
                <View style={[styles.flexRow]}>
                  <Text style={[styles.primaryText]}>16. </Text>
                  <Text style={[styles.primaryText]}>
                    DATES PATIENT UNABLE TO WORK IN CURRENT OCCUPATION{" "}
                  </Text>
                </View>
                {/* 16 second part */}
                <View style={[styles.flexRow]}>
                  <View
                    style={[
                      styles.flexRow,
                      styles.alignItemsCenter,
                      { width: "50%" },
                    ]}
                  >
                    <Text style={[styles.primaryText, { width: "30%" }]}>
                      FROM
                    </Text>
                    <View
                      style={[
                        styles.flexRow,
                        styles.spaceAround,
                        { width: "70%" },
                      ]}
                    >
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>MM</Text>
                        <Text style={[styles.primaryTextBlack]}>01</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>DD</Text>
                        <Text style={[styles.primaryTextBlack]}>20</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>YY</Text>
                        <Text style={[styles.primaryTextBlack]}>2022</Text>
                      </View>
                    </View>
                  </View>
                  {/* 16 second part portion II */}
                  <View
                    style={[
                      styles.flexRow,
                      styles.alignItemsCenter,
                      { width: "50%", border: "1px solid cyan" },
                    ]}
                  >
                    <Text style={[styles.primaryText, { width: "30%" }]}>
                      To
                    </Text>
                    <View
                      style={[
                        styles.flexRow,
                        styles.spaceAround,
                        { width: "70%" },
                      ]}
                    >
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>MM</Text>
                        <Text style={[styles.primaryTextBlack]}>01</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>DD</Text>
                        <Text style={[styles.primaryTextBlack]}>20</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>YY</Text>
                        <Text style={[styles.primaryTextBlack]}>2022</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* from 17 point */}
            <View style={styles.bodyContainerInner}>
              <View style={[styles.bodyWrapper1, styles.flexRow]}>
                <View style={{ width: "60%" }}>
                  <View style={[styles.flexRow]}>
                    <Text style={styles.primaryText}>17. </Text>
                    <Text style={styles.primaryText}>
                      NAME OF REFFERING PROVIDER OR OTHER SOURCE
                    </Text>
                  </View>
                  <View style={[styles.flexRow]}>
                    <View
                      style={{
                        borderRight: "0.5px dashed red",
                        width: "10%",
                      }}
                    ></View>
                    <Text style={styles.primaryTextBlack}>
                      Referring Provider Name here
                    </Text>
                  </View>
                </View>
                {/* 17 second part */}
                <View style={{ width: "40%" }}>
                  <View
                    style={[
                      styles.flexRow,
                      {
                        borderBottom: "0.5px dashed red",
                        backgroundColor: "pink",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.primaryText,
                        { borderRight: "1px solid red" },
                      ]}
                    >
                      17a.
                    </Text>
                    <Text
                      style={[
                        styles.primaryText,
                        { borderRight: "1px solid red" },
                      ]}
                    >
                      NPI
                    </Text>
                    <Text style={[styles.primaryTextBlack]}></Text>
                  </View>
                  <View style={[styles.flexRow]}>
                    <Text
                      style={[
                        styles.primaryText,
                        { borderRight: "1px solid red" },
                      ]}
                    >
                      17b.
                    </Text>
                    <Text
                      style={[
                        styles.primaryText,
                        { borderRight: "1px solid red" },
                      ]}
                    >
                      NPI
                    </Text>
                    <Text style={[styles.primaryTextBlack]}></Text>
                  </View>
                </View>
              </View>
              {/* 18 part */}
              <View style={[styles.bodyWrapper2]}>
                {/* 18 */}
                <View style={[styles.flexRow]}>
                  <Text style={[styles.primaryText]}>18. </Text>
                  <Text style={[styles.primaryText]}>
                    HOSPITALIZATION DATES RELATED TO CURRENT SERVICES
                  </Text>
                </View>
                {/* 18 second part */}
                <View style={[styles.flexRow]}>
                  <View
                    style={[
                      styles.flexRow,
                      styles.alignItemsCenter,
                      { width: "50%", border: "1px solid green" },
                    ]}
                  >
                    <Text style={[styles.primaryText, { width: "30%" }]}>
                      FROM
                    </Text>
                    <View
                      style={[
                        styles.flexRow,
                        styles.spaceAround,
                        { width: "70%" },
                      ]}
                    >
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>MM</Text>
                        <Text style={[styles.primaryTextBlack]}>01</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>DD</Text>
                        <Text style={[styles.primaryTextBlack]}>20</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>YY</Text>
                        <Text style={[styles.primaryTextBlack]}>2022</Text>
                      </View>
                    </View>
                  </View>
                  {/* 16 second part portion II */}
                  <View
                    style={[
                      styles.flexRow,
                      styles.alignItemsCenter,
                      { width: "50%", border: "1px solid cyan" },
                    ]}
                  >
                    <Text style={[styles.primaryText, { width: "30%" }]}>
                      To
                    </Text>
                    <View
                      style={[
                        styles.flexRow,
                        styles.spaceAround,
                        { width: "70%" },
                      ]}
                    >
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>MM</Text>
                        <Text style={[styles.primaryTextBlack]}>01</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>DD</Text>
                        <Text style={[styles.primaryTextBlack]}>20</Text>
                      </View>
                      <View style={{ borderRight: "0.5px dashed red" }}>
                        <Text style={[styles.primaryText]}>YY</Text>
                        <Text style={[styles.primaryTextBlack]}>2022</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* from 19 points */}
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View>
                  <Text style={[styles.primaryText]}>19. </Text>
                  <Text style={[styles.primaryText]}>
                    ADDITIONAL CLAIM INFORMATION (Designated by NUCC)
                  </Text>
                </View>
                <View>
                  <Text style={[styles.primaryTextBlack]}>
                    19 part text here
                  </Text>
                </View>
              </View>
              {/* 20 point */}
              <View style={[styles.bodyWrapper2, { border: "1px solid blue" }]}>
                <View style={[styles.flexRow]}>
                  <View style={{ width: "50%", border: "1px solid green" }}>
                    <Text style={[styles.primaryText]}>OUTSIDE LAB?</Text>
                  </View>
                  <View style={{ width: "50%", border: "1px solid cyan" }}>
                    <Text style={[styles.primaryText]}>$ CHARGES</Text>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View
                    style={[
                      styles.flexRow,
                      { borderRight: "1px solid red", width: "33%" },
                    ]}
                  >
                    <View style={styles.flexRow}>
                      <View style={styles.checkbox}></View>
                      <Text style={styles.primaryText}>YES</Text>
                    </View>
                    <View style={styles.flexRow}>
                      <View style={styles.checkbox}></View>
                      <Text style={styles.primaryText}>NO</Text>
                    </View>
                  </View>
                  <View style={{ borderRight: "1px solid red", width: "33%" }}>
                    <Text></Text>
                  </View>
                  <View style={{ width: "33%" }}>
                    <Text></Text>
                  </View>
                </View>
              </View>
            </View>

            {/* from 21 point  */}
            <View
              style={[
                styles.bodyContainerInner,
                { borderBottom: "none !important" },
              ]}
            >
              <View style={styles.bodyWrapper1}>
                <View
                  style={[
                    styles.flexRow,
                    styles.spaceBetween,
                    { width: "100%" },
                  ]}
                >
                  <View
                    style={[
                      styles.flexRow,
                      { width: "80%", border: "1px solid green" },
                    ]}
                  >
                    <Text style={styles.primaryText}>21. </Text>
                    <Text style={styles.primaryText}>
                      DIAGNOSIS OR NATURE OF ILLNESS OR INJURY Relate A-L to
                      service line below (24E)
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.flexRow,
                      { width: "20%", border: "1px solid cyan" },
                    ]}
                  >
                    <Text style={styles.primaryText}>ICD Ind. </Text>
                    <View
                      style={{
                        borderRight: "0.5px dashed red",
                        borderLeft: "0.5px dashed red",
                      }}
                    >
                      <Text style={styles.primaryTextBlack}>0</Text>
                    </View>
                  </View>
                </View>
                {/* Diagnones Code Field */}
                <View style={{ paddingTop: "3px", paddingBottom: "3px" }}>
                  <View>
                    <View
                      style={[
                        styles.flexRow,
                        styles.spaceBetween,
                        // styles.justifyContentCenter,
                      ]}
                    >
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>A. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        >
                          S46311A
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>B. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>C. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>D. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={[styles.flexRow, styles.spaceBetween]}>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>E. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        >
                          S46311A
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>F. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>G. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>H. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={[styles.flexRow, styles.spaceBetween]}>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>I. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        >
                          S46311A
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>J. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>K. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                      <View
                        style={[
                          styles.flexRow25,
                          styles.alignItemsCenter,
                          styles.justifyContentCenter,
                        ]}
                      >
                        <Text style={styles.primaryText}>L. </Text>
                        <Text
                          style={[
                            styles.primaryTextBlack,
                            { borderBottom: "1px solid red", width: "60%" },
                          ]}
                        ></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={[styles.bodyWrapper2, { borderBottom: "1px solid red" }]}
              >
                {/* point 22 */}
                <View>
                  <View style={[styles.flexRow]}>
                    <View style={[{ width: "50%" }]}>
                      <View style={[styles.flexRow]}>
                        <Text style={styles.primaryText}>22. </Text>
                        <Text style={styles.primaryText}>
                          RESUBMISSION CODE
                        </Text>
                      </View>

                      <View
                        style={{ borderRight: "1px solid red", width: "100%" }}
                      >
                        <Text style={styles.primaryTextBlack}>Hello</Text>
                      </View>
                    </View>
                    <View style={{ width: "50%" }}>
                      <View>
                        <Text style={styles.primaryText}>
                          ORIGINAL REF. NO.
                        </Text>
                      </View>
                      <View style={{ width: "100%" }}>
                        <Text style={styles.primaryTextBlack}></Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* point 23 */}
                <View>
                  <View style={[styles.flexRow]}>
                    <Text style={styles.primaryText}>23. </Text>
                    <Text style={styles.primaryText}>
                      PRIOR AUTHORIZATION NUMBER
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.primaryTextBlack}></Text>
                  </View>
                </View>
              </View>
            </View>
            {/* from 24 point*/}
            <View style={[styles.bodyContainerInner]}>
              <View style={styles.bodyWrapper1}>
                <View style={[styles.flexRow]}>
                  <View
                    style={[
                      styles.flexRow,
                      {
                        width: "85%",
                        borderTop: "1px solid red",
                      },
                    ]}
                  >
                    {/* first 35 */}
                    <View style={{ width: "35%" }}>
                      <View
                        style={{
                          borderRight: "1px solid red",
                          borderBottom: "1px solid red",
                          height: "30px",
                        }}
                      >
                        <View style={[styles.flexRow]}>
                          <Text style={styles.primaryText}>24.</Text>
                          <Text style={styles.primaryText}>A.</Text>
                          <Text style={styles.primaryText}>
                            DATE(S) OF SERVICE
                          </Text>
                        </View>
                        <View style={styles.flexRow}>
                          <Text
                            style={[
                              styles.primaryText,
                              { width: "50%", textAlign: "center" },
                            ]}
                          >
                            From
                          </Text>
                          <Text
                            style={[
                              styles.primaryText,
                              { width: "50%", textAlign: "center" },
                            ]}
                          >
                            To
                          </Text>
                        </View>

                        <View style={[styles.flexRow, styles.spaceBetween]}>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              { width: "50%", justifyContent: "space-evenly" },
                            ]}
                          >
                            <Text style={[styles.primaryText]}>MM</Text>
                            <Text style={[styles.primaryText]}>DD</Text>
                            <Text style={[styles.primaryText]}>YY</Text>
                          </View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              { width: "50%", justifyContent: "space-evenly" },
                            ]}
                          >
                            <Text style={[styles.primaryText]}>MM</Text>
                            <Text style={[styles.primaryText]}>DD</Text>
                            <Text style={[styles.primaryText]}>YY</Text>
                          </View>
                        </View>
                      </View>
                      {/* rows work */}
                      <View style={[styles.flexRow, { height: "20px" }]}>
                        <View
                          style={{
                            width: "50%",
                            borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.flexRow, { height: "20px" }]}>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.flexRow, { height: "20px" }]}>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.flexRow, { height: "20px" }]}>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.flexRow, { height: "20px" }]}>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                      </View>
                      <View style={[styles.flexRow, { height: "20px" }]}>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "50%",
                            // borderRight: "1px solid red",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{ backgroundColor: "pink", height: "50%" }}
                          ></View>
                          <View
                            style={[
                              styles.flexRow,
                              // styles.spaceBetween,
                              {
                                justifyContent: "space-evenly",
                                borderRight: "1px solid red",
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              10
                            </Text>
                            <Text
                              style={[
                                styles.primaryTextBlack,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              31
                            </Text>
                            <Text style={styles.primaryTextBlack}>19</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    {/* 12.5% */}
                    <View style={{ width: "12.5%" }}>
                      <View
                        style={{
                          borderRight: "1px solid red",
                          // borderLeft: "1px solid red",
                          borderBottom: "1px solid red",
                          height: "30px",
                        }}
                      >
                        <Text
                          style={[styles.primaryText, { textAlign: "center" }]}
                        >
                          B. PLACE OF SERVICE
                        </Text>
                      </View>

                      <View
                        style={{ height: "20px", borderRight: "1px solid red" }}
                      >
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View style={{ height: "50%" }}>
                          <Text
                            style={[
                              styles.primaryTextBlack,
                              { textAlign: "center" },
                            ]}
                          >
                            15
                          </Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text
                            style={[
                              styles.primaryTextBlack,
                              { textAlign: "center" },
                            ]}
                          >
                            15
                          </Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text
                            style={[
                              styles.primaryTextBlack,
                              { textAlign: "center" },
                            ]}
                          >
                            15
                          </Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text
                            style={[
                              styles.primaryTextBlack,
                              { textAlign: "center" },
                            ]}
                          >
                            15
                          </Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text
                            style={[
                              styles.primaryTextBlack,
                              { textAlign: "center" },
                            ]}
                          >
                            15
                          </Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text
                            style={[
                              styles.primaryTextBlack,
                              { textAlign: "center" },
                            ]}
                          >
                            15
                          </Text>
                        </View>
                      </View>
                    </View>
                    {/* 12.5% */}
                    <View
                      style={{
                        width: "12.5%",
                        // borderRight: "1px solid red",
                      }}
                    >
                      <View
                        style={{
                          height: "30px",
                          borderBottom: "1px solid red",
                          borderRight: "1px solid red",
                        }}
                      >
                        <Text
                          style={[styles.primaryText, { textAlign: "center" }]}
                        >
                          C. EMG
                        </Text>
                      </View>

                      {/* rows */}
                      <View
                        style={{ height: "20px", borderRight: "1px solid red" }}
                      >
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View style={{ height: "50%" }}>
                          <Text></Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text></Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text></Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text></Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text></Text>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ height: "50%", backgroundColor: "pink" }}
                        ></View>
                        <View
                          style={{
                            height: "50%",
                            borderRight: "1px solid red",
                          }}
                        >
                          <Text></Text>
                        </View>
                      </View>
                    </View>
                    {/* second 45% */}
                    <View style={{ width: "45%" }}>
                      <View
                        style={{
                          height: "30px",
                          borderBottom: "1px solid red",
                          borderRight: "1px solid red",
                        }}
                      >
                        <View style={[styles.flexRow]}>
                          <Text style={styles.primaryText}>D. </Text>
                          <Text style={[styles.primaryText, { width: "100%" }]}>
                            PROCEDURES, SERVICES, OR SUPPLIES
                          </Text>
                        </View>
                        <View style={{ textAlign: "center" }}>
                          <Text style={styles.primaryText}>
                            (Explain Unusual Circumstances)
                          </Text>
                        </View>
                        <View style={styles.flexRow}>
                          <View
                            style={{
                              width: "40%",
                              borderRight: "1px solid red",
                            }}
                          >
                            <Text style={styles.primaryText}>CPT/HCPCS</Text>
                          </View>
                          <View style={{ width: "60%" }}>
                            <Text
                              style={[
                                styles.primaryText,
                                { textAlign: "center" },
                              ]}
                            >
                              MODIFIER
                            </Text>
                          </View>
                        </View>
                      </View>

                      {/* row */}
                      <View
                        style={{ height: "20px", borderRight: "1px solid red" }}
                      >
                        <View
                          style={{ backgroundColor: "pink", height: "50%" }}
                        ></View>
                        <View style={[styles.flexRow, { height: "50%" }]}>
                          <View
                            style={{
                              width: "40%",
                              borderRight: "1px solid red",
                            }}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack2,
                                styles.alignTextCenter,
                              ]}
                            >
                              1902h897
                            </Text>
                          </View>
                          <View style={[styles.flexRow, { width: "60%" }]}>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                15
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                16
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                17
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                              ]}
                            >
                              <Text style={[styles.primaryTextBlack2]}>18</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ backgroundColor: "pink", height: "50%" }}
                        ></View>
                        <View
                          style={[
                            styles.flexRow,
                            { height: "50%", borderRight: "1px solid red" },
                          ]}
                        >
                          <View
                            style={{
                              width: "40%",
                              borderRight: "1px solid red",
                            }}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack2,
                                styles.alignTextCenter,
                              ]}
                            >
                              1902h897
                            </Text>
                          </View>
                          <View style={[styles.flexRow, { width: "60%" }]}>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                15
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                16
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                17
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                              ]}
                            >
                              <Text style={[styles.primaryTextBlack2]}>18</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ backgroundColor: "pink", height: "50%" }}
                        ></View>
                        <View
                          style={[
                            styles.flexRow,
                            { height: "50%", borderRight: "1px solid red" },
                          ]}
                        >
                          <View
                            style={{
                              width: "40%",
                              borderRight: "1px solid red",
                            }}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack2,
                                styles.alignTextCenter,
                              ]}
                            >
                              1902h897
                            </Text>
                          </View>
                          <View style={[styles.flexRow, { width: "60%" }]}>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                15
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                16
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                17
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                              ]}
                            >
                              <Text style={[styles.primaryTextBlack2]}>18</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ backgroundColor: "pink", height: "50%" }}
                        ></View>
                        <View
                          style={[
                            styles.flexRow,
                            { height: "50%", borderRight: "1px solid red" },
                          ]}
                        >
                          <View
                            style={{
                              width: "40%",
                              borderRight: "1px solid red",
                            }}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack2,
                                styles.alignTextCenter,
                              ]}
                            >
                              1902h897
                            </Text>
                          </View>
                          <View style={[styles.flexRow, { width: "60%" }]}>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                15
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                16
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                17
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                              ]}
                            >
                              <Text style={[styles.primaryTextBlack2]}>18</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ backgroundColor: "pink", height: "50%" }}
                        ></View>
                        <View
                          style={[
                            styles.flexRow,
                            { height: "50%", borderRight: "1px solid red" },
                          ]}
                        >
                          <View
                            style={{
                              width: "40%",
                              borderRight: "1px solid red",
                            }}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack2,
                                styles.alignTextCenter,
                              ]}
                            >
                              1902h897
                            </Text>
                          </View>
                          <View style={[styles.flexRow, { width: "60%" }]}>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                15
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                16
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                17
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                              ]}
                            >
                              <Text style={[styles.primaryTextBlack2]}>18</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={{ height: "20px" }}>
                        <View
                          style={{ backgroundColor: "pink", height: "50%" }}
                        ></View>
                        <View
                          style={[
                            styles.flexRow,
                            { height: "50%", borderRight: "1px solid red" },
                          ]}
                        >
                          <View
                            style={{
                              width: "40%",
                              borderRight: "1px solid red",
                            }}
                          >
                            <Text
                              style={[
                                styles.primaryTextBlack2,
                                styles.alignTextCenter,
                              ]}
                            >
                              1902h897
                            </Text>
                          </View>
                          <View style={[styles.flexRow, { width: "60%" }]}>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                15
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.justifyContentCenter,
                                styles.flexRow25,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                16
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                                { borderRight: "0.5px dashed red" },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.primaryTextBlack2,
                                  styles.alignTextCenter,
                                ]}
                              >
                                17
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.flexRow25,
                                styles.justifyContentCenter,
                              ]}
                            >
                              <Text style={[styles.primaryTextBlack2]}>18</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ width: "15%" }}>
                    <View
                      style={{
                        height: "31px",
                        borderBottom: "1px solid red",
                      }}
                    >
                      <Text
                        style={[styles.primaryText, styles.alignTextCenter]}
                      >
                        E. DIAGNOSIS POINTER
                      </Text>
                    </View>

                    {/* rows */}
                    <View style={{ height: "20px" }}>
                      <View
                        style={{ height: "50%", backgroundColor: "pink" }}
                      ></View>
                      <View style={{ height: "50%" }}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          ABCD
                        </Text>
                      </View>
                    </View>
                    <View style={{ height: "20px" }}>
                      <View
                        style={{ height: "50%", backgroundColor: "pink" }}
                      ></View>
                      <View style={{ height: "50%" }}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          ABCD
                        </Text>
                      </View>
                    </View>
                    <View style={{ height: "20px" }}>
                      <View
                        style={{ height: "50%", backgroundColor: "pink" }}
                      ></View>
                      <View style={{ height: "50%" }}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          ABCD
                        </Text>
                      </View>
                    </View>
                    <View style={{ height: "20px" }}>
                      <View
                        style={{ height: "50%", backgroundColor: "pink" }}
                      ></View>
                      <View style={{ height: "50%" }}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          ABCD
                        </Text>
                      </View>
                    </View>
                    <View style={{ height: "20px" }}>
                      <View
                        style={{ height: "50%", backgroundColor: "pink" }}
                      ></View>
                      <View style={{ height: "50%" }}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          ABCD
                        </Text>
                      </View>
                    </View>
                    <View style={{ height: "20px" }}>
                      <View
                        style={{ height: "50%", backgroundColor: "pink" }}
                      ></View>
                      <View style={{ height: "50%" }}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          ABCD
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* from F  */}
              <View
                style={[
                  styles.bodyWrapper2,
                  styles.flexRow,
                  { borderLeft: "none !important" },
                ]}
              >
                <View style={{ width: "30%" }}>
                  <View
                    style={[
                      styles.flexRow,
                      styles.alignItemsCenter,
                      styles.justifyContentCenter,
                      {
                        height: "31px",
                        borderBottom: "1px solid red",
                        borderLeft: "1px solid red",
                        borderRight: "1px solid red",
                      },
                    ]}
                  >
                    <Text style={[styles.primaryText]}>F. $ CHARGES</Text>
                  </View>

                  {/* rows */}
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      borderRight: "1px solid red",
                      borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "pink",
                        height: "50%",
                      }}
                    ></View>
                    <View
                      style={[
                        styles.flexRow,
                        {
                          height: "50%",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          {
                            borderRight: "0.5px dashed red",
                            textAlign: "right",
                            width: "80%",
                          },
                        ]}
                      >
                        1000
                      </Text>
                      <Text style={[styles.primaryTextBlack, { width: "20%" }]}>
                        .00
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "pink",
                        height: "50%",
                      }}
                    ></View>
                    <View
                      style={[
                        styles.flexRow,
                        {
                          height: "50%",
                          borderRight: "1px solid red",
                          borderLeft: "1px solid red",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          {
                            borderRight: "0.5px dashed red",
                            textAlign: "right",
                            width: "80%",
                          },
                        ]}
                      >
                        250
                      </Text>
                      <Text style={[styles.primaryTextBlack, { width: "20%" }]}>
                        .00
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "pink",
                        height: "50%",
                      }}
                    ></View>
                    <View
                      style={[
                        styles.flexRow,
                        {
                          height: "50%",
                          borderRight: "1px solid red",
                          borderLeft: "1px solid red",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          {
                            borderRight: "0.5px dashed red",
                            textAlign: "right",
                            width: "80%",
                          },
                        ]}
                      >
                        250
                      </Text>
                      <Text style={[styles.primaryTextBlack, { width: "20%" }]}>
                        .00
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "pink",
                        height: "50%",
                      }}
                    ></View>
                    <View
                      style={[
                        styles.flexRow,
                        {
                          height: "50%",
                          borderRight: "1px solid red",
                          borderLeft: "1px solid red",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          {
                            borderRight: "0.5px dashed red",
                            textAlign: "right",
                            width: "80%",
                          },
                        ]}
                      >
                        250
                      </Text>
                      <Text style={[styles.primaryTextBlack, { width: "20%" }]}>
                        .00
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "pink",
                        height: "50%",
                      }}
                    ></View>
                    <View
                      style={[
                        styles.flexRow,
                        {
                          height: "50%",
                          borderRight: "1px solid red",
                          borderLeft: "1px solid red",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          {
                            borderRight: "0.5px dashed red",
                            textAlign: "right",
                            width: "80%",
                          },
                        ]}
                      >
                        250
                      </Text>
                      <Text style={[styles.primaryTextBlack, { width: "20%" }]}>
                        .00
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "pink",
                        height: "50%",
                      }}
                    ></View>
                    <View
                      style={[
                        styles.flexRow,
                        {
                          height: "50%",
                          borderRight: "1px solid red",
                          borderLeft: "1px solid red",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          {
                            borderRight: "0.5px dashed red",
                            textAlign: "right",
                            width: "80%",
                          },
                        ]}
                      >
                        250
                      </Text>
                      <Text style={[styles.primaryTextBlack, { width: "20%" }]}>
                        .00
                      </Text>
                    </View>
                  </View>
                </View>
                {/* 10% */}
                <View style={{ width: "10%" }}>
                  <View
                    style={{ height: "31px", borderBottom: "1px solid red" }}
                  >
                    <Text style={[styles.primaryText]}>G.Days OR UNITS</Text>
                  </View>

                  {/* ROWS */}
                  <View
                    style={{ height: "20x", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ backgroundColor: "pink", height: "50%" }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { textAlign: "right" },
                        ]}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ height: "20x", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ backgroundColor: "pink", height: "50%" }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { textAlign: "right" },
                        ]}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ height: "20x", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ backgroundColor: "pink", height: "50%" }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { textAlign: "right" },
                        ]}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ height: "20x", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ backgroundColor: "pink", height: "50%" }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { textAlign: "right" },
                        ]}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ height: "20x", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ backgroundColor: "pink", height: "50%" }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { textAlign: "right" },
                        ]}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ height: "20x", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ backgroundColor: "pink", height: "50%" }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { textAlign: "right" },
                        ]}
                      >
                        1
                      </Text>
                    </View>
                  </View>
                </View>
                {/* second 10% */}
                <View style={{ width: "10%" }}>
                  <View
                    style={{
                      height: "31px",
                      borderBottom: "1px solid red",
                      borderLeft: "1px solid red",
                    }}
                  >
                    <Text style={[styles.primaryText]}>
                      H. EPSDT FAMILY PLAN
                    </Text>
                  </View>

                  {/* ROWS */}
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{ height: "50%", backgroundColor: "pink" }}
                    ></View>
                    <View style={{ height: "50%" }}></View>
                  </View>
                  <View
                    style={{ height: "20px", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ height: "50%", backgroundColor: "pink" }}
                    ></View>
                    <View
                      style={{ height: "50%", borderLeft: "1px solid red" }}
                    ></View>
                  </View>
                  <View
                    style={{ height: "20px", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ height: "50%", backgroundColor: "pink" }}
                    ></View>
                    <View
                      style={{ height: "50%", borderLeft: "1px solid red" }}
                    ></View>
                  </View>
                  <View
                    style={{ height: "20px", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ height: "50%", backgroundColor: "pink" }}
                    ></View>
                    <View
                      style={{ height: "50%", borderLeft: "1px solid red" }}
                    ></View>
                  </View>
                  <View
                    style={{ height: "20px", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ height: "50%", backgroundColor: "pink" }}
                    ></View>
                    <View
                      style={{ height: "50%", borderLeft: "1px solid red" }}
                    ></View>
                  </View>
                  <View
                    style={{ height: "20px", borderBottom: "1px solid red" }}
                  >
                    <View
                      style={{ height: "50%", backgroundColor: "pink" }}
                    ></View>
                    <View
                      style={{ height: "50%", borderLeft: "1px solid red" }}
                    ></View>
                  </View>
                </View>

                {/* third 10% */}
                <View style={{ width: "10%", borderLeft: "1px solid red" }}>
                  <View
                    style={{ height: "31px", borderBottom: "1px solid red" }}
                  >
                    <Text style={[styles.primaryText]}>G.Days OR UNITS</Text>
                  </View>

                  {/* rows */}
                  <View style={{ height: "20px" }}>
                    <View
                      style={{
                        borderBottom: "0.5px dashed red",
                        height: "50%",
                        backgroundColor: "pink",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[styles.primaryText, styles.alignTextCenter]}
                      >
                        NPI
                      </Text>
                    </View>
                  </View>
                  <View style={{ height: "20px" }}>
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[styles.primaryText, styles.alignTextCenter]}
                      >
                        NPI
                      </Text>
                    </View>
                  </View>
                  <View style={{ height: "20px" }}>
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[styles.primaryText, styles.alignTextCenter]}
                      >
                        NPI
                      </Text>
                    </View>
                  </View>
                  <View style={{ height: "20px" }}>
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[styles.primaryText, styles.alignTextCenter]}
                      >
                        NPI
                      </Text>
                    </View>
                  </View>
                  <View style={{ height: "20px" }}>
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[styles.primaryText, styles.alignTextCenter]}
                      >
                        NPI
                      </Text>
                    </View>
                  </View>
                  <View style={{ height: "20px" }}>
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text
                        style={[styles.primaryText, styles.alignTextCenter]}
                      >
                        NPI
                      </Text>
                    </View>
                  </View>
                </View>
                {/* 40% */}
                <View
                  style={{
                    width: "40%",
                    borderLeft: "1px solid red",
                  }}
                >
                  <View
                    style={{
                      height: "31px",
                      borderBottom: "1px solid red",
                    }}
                  >
                    <Text style={[styles.primaryText]}>
                      J. RENDERING PROVIDER ID. #{" "}
                    </Text>
                  </View>

                  {/* rows */}
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      // borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text style={styles.primaryTextBlack}>1480976</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      // borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text style={styles.primaryTextBlack}>1480976</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      // borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text style={styles.primaryTextBlack}>1480976</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      // borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text style={styles.primaryTextBlack}>1480976</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      // borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text style={styles.primaryTextBlack}>1480976</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "20px",
                      borderBottom: "1px solid red",
                      // borderLeft: "1px solid red",
                    }}
                  >
                    <View
                      style={{
                        height: "50%",
                        backgroundColor: "pink",
                        borderBottom: "0.5px dashed red",
                      }}
                    ></View>
                    <View style={{ height: "50%" }}>
                      <Text style={styles.primaryTextBlack}>1480976</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* from point 25 */}
            <View style={[styles.bodyContainerInner]}>
              <View style={[styles.bodyWrapper1, styles.flexRow]}>
                {/* 40 */}
                <View
                  style={{
                    width: "40%",
                    borderRight: "0.5px solid red",
                  }}
                >
                  <View style={[styles.flexRow]}>
                    <View style={[styles.flexRow, { width: "70%" }]}>
                      <Text style={styles.primaryText}>25. </Text>
                      <Text style={styles.primaryText}>
                        FEDERAL TAX I.D. NUMBER
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.flexRow,
                        styles.spaceAround,
                        { width: "30%" },
                      ]}
                    >
                      <Text style={[styles.primaryText]}>SSN</Text>
                      <Text style={[styles.primaryText]}>EIN</Text>
                    </View>
                  </View>

                  <View style={[styles.flexRow]}>
                    <Text style={[styles.primaryTextBlack, { width: "70%" }]}>
                      842721554
                    </Text>
                    <View
                      style={[
                        styles.flexRow,
                        styles.spaceAround,
                        {
                          width: "30%",
                        },
                      ]}
                    >
                      <View style={[styles.checkbox]}>
                        <Text style={[styles.primaryTextBlack2]}>X</Text>
                      </View>
                      <View style={[styles.checkbox]}>
                        <Text style={[styles.primaryTextBlack2]}>X</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* 35 */}
                <View
                  style={{
                    width: "35%",
                    borderRight: "0.5px solid red",
                  }}
                >
                  <View style={[styles.flexRow]}>
                    <Text style={styles.primaryText}>26. </Text>
                    <Text style={styles.primaryText}>PATIENTS ACCOUNT N0</Text>
                  </View>
                  <View>
                    <Text style={[styles.primaryTextBlack]}>COPY1810675</Text>
                  </View>
                </View>
                {/* 25 */}
                <View
                  style={{
                    width: "25%",
                    // border: "1px solid cyan",
                  }}
                >
                  <View style={[styles.flexRow]}>
                    <Text style={styles.primaryText}>27. </Text>
                    <Text style={styles.primaryText}>ACCEPT ASSIGNMENT?</Text>
                  </View>
                  <View>
                    <Text style={[styles.alignTextCenter, { fontSize: "4px" }]}>
                      (For govt. claims, see back?)
                    </Text>
                  </View>
                  <View style={[styles.flexRow, styles.spaceAround]}>
                    <View style={[styles.checkboxWrapper]}>
                      <View style={styles.checkbox}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          X
                        </Text>
                      </View>
                      <Text style={styles.primaryText}>YES</Text>
                    </View>
                    <View style={[styles.checkboxWrapper]}>
                      <View style={styles.checkbox}>
                        <Text
                          style={[
                            styles.primaryTextBlack2,
                            styles.alignTextCenter,
                          ]}
                        >
                          X
                        </Text>
                      </View>
                      <Text style={styles.primaryText}>NO</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.bodyWrapper2, styles.flexRow]}>
                <View style={{ width: "33%", borderRight: "0.5px solid red" }}>
                  <View style={[styles.flexRow]}>
                    <Text style={styles.primaryText}>28. </Text>
                    <Text style={styles.primaryText}>TOTAL CHARGE</Text>
                  </View>
                  <View style={[styles.flexRow]}>
                    <Text style={[styles.primaryText, { width: "40%" }]}>
                      $
                    </Text>
                    <View style={[styles.flexRow, { width: "60%" }]}>
                      <Text
                        style={[
                          styles.primaryTextBlack,
                          { borderRight: "0.5px dashed red" },
                        ]}
                      >
                        1250
                      </Text>
                      <Text style={[styles.primaryTextBlack]}>.00</Text>
                    </View>
                  </View>
                </View>
                <View></View>
                <View></View>
              </View>
            </View>
          </View>
        </View>
        {/* </View> */}
      </Page>
    </Document>
  );
};

export default CmsForm15;
