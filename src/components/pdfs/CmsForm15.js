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
  primaryTextBlack: { fontSize: "8px", fontWeight: "ultralight", color: "black" },
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
    borderRight: "1px solid red",
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
    display: "flex", flexDirection: "row"
  },
  flexRowAround: {
    justifyContent: 'space-around'
  },
  flexCol25: {
    display: "flex", flexDirection: "column", justifyContent: 'flex-end', width: "25%"
  },
  flexCol: {
    display: "flex", flexDirection: "column"
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  flexCol75: {
    display: "flex", flexDirection: "column", justifyContent: 'flex-end', width: "75%"
  },
  borderRightDotted: {
    borderRight: '0.5px dashed red'
  },
  gap5px: {
    gap: "5px"
  },
  alignItemsCenter: {
    alignItems: "center"
  }
});

const CmsForm15 = ({ pdfData }) => {
  return (
    <Document>
      <Page style={{ padding: "12px" }}>
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
                    <Text style={[styles.primaryText]}> 1a. INSURED'S ID. NUMBER </Text>
                    <Text style={[styles.primaryText]}>(For Program in item 1)</Text>
                  </View>
                  <View><Text style={[styles.primaryTextBlack]}>225356731</Text></View>
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
                      <View style={[styles.flexCol, styles.spaceBetween, { gap: "5px" }]}>
                        <Text style={styles.primaryText}>2. PATIENT'S NAME (Last Name , First Name , Middle Name)</Text>
                        <Text style={styles.primaryTextBlack}>CORTEZ , JAYDA</Text>
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
                        <Text style={styles.primaryText}>3. PATIENT'S BIRTH DATE              SEX</Text>
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
                    <Text style={styles.primaryText}>2. PATIENT'S NAME (Last Name , First Name , Middle Name)</Text>
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
                      <View style={[styles.flexCol, styles.spaceBetween, { gap: "5px" }]}>
                        <Text style={styles.primaryText}>2. PATIENT'S ADDRESS (No., Street)</Text>
                        <Text style={styles.primaryTextBlack}>4808 108TH ST APT 3C
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
                      <View style={[styles.flexCol, styles.spaceAround, styles.gap5px]}>
                        <Text style={styles.primaryText}>3. PATIENT RELATIONSHIP TO INSURED</Text>
                        <View style={[styles.flexRow, styles.flexRowAround]}>
                          <View style={[styles.flexRow, styles.alignItemsCenter]}>
                            <Text style={styles.primaryText}>Self</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                          <View style={[styles.flexRow, styles.alignItemsCenter]}>
                            <Text style={styles.primaryText}>Spouse</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                          <View style={[styles.flexRow, styles.alignItemsCenter]}>
                            <Text style={styles.primaryText}>Child</Text>
                            <View style={styles.checkbox}></View>
                          </View>
                          <View style={[styles.flexRow, styles.alignItemsCenter]}>
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
                    <Text style={[styles.primaryText]}> 1a. INSURED'S ADDRESS (No., Street) </Text>
                  </View>
                  <View><Text style={[styles.primaryTextBlack]}>4808 108TH ST APT 3C</Text></View>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View style={[styles.flexRow, styles.spaceBetween]}>
                  <View style={[styles.flexCol, { borderRight: "0.5px solid red", width: "64%", }]}>
                    <View
                      style={[styles.flexRow, { borderBottom: "0.5px solid red" }]}
                    >
                      <View style={[styles.flexRow]}>
                        <View style={[styles.flexCol, { borderRight: "0.5px solid red", gap: "5px", width: "95%" }]}>
                          <Text style={styles.primaryText}>CITY</Text>
                          <Text style={styles.primaryTextBlack}>CORONA
                          </Text>
                        </View>
                      </View>
                      <View style={styles.flexRow}>
                        <View style={[styles.flexCol, styles.spaceBetween, { gap: "5px", textAlign: "center" }]}>
                          <Text style={styles.primaryText}>STATE</Text>
                          <Text style={styles.primaryTextBlack}>NY
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View
                        style={[styles.flexRow, { borderBottom: "0.5px solid red" }]}
                      >
                        <View style={[styles.flexRow]}>
                          <View style={[styles.flexCol, { borderRight: "0.5px solid red", gap: "5px", width: "60%" }]}>
                            <Text style={styles.primaryText}>ZIP CODE</Text>
                            <Text style={styles.primaryTextBlack}>11368
                            </Text>
                          </View>
                        </View>
                        <View style={[styles.flexRow]}>
                          <View style={[styles.flexCol, styles.spaceBetween, { gap: "5px" }]}>
                            <Text style={[styles.primaryText]}>TELEPHONE (Include Area Code)</Text>
                            <Text style={{ fontSize: "12px", fontWeight: "extrabold" }}>(        )
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
                    <Text style={styles.primaryText} >  8. RESERVED FOR NUCC USE</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <View
                  style={[styles.flexRow, { borderBottom: "0.5px solid red" }]}
                >
                  <View style={[styles.flexRow]}>
                    <View style={[styles.flexCol, { borderRight: "0.5px solid red", gap: "5px", width: "95%" }]}>
                      <Text style={styles.primaryText}>CITY</Text>
                      <Text style={styles.primaryTextBlack}>CORONA
                      </Text>
                    </View>
                  </View>
                  <View style={styles.flexRow}>
                    <View style={[styles.flexCol, styles.spaceBetween, { gap: "5px", textAlign: "center" }]}>
                      <Text style={styles.primaryText}>STATE</Text>
                      <Text style={styles.primaryTextBlack}>NY
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={[styles.flexRow, { borderBottom: "0.5px solid red" }]}
                  >
                    <View style={[styles.flexRow]}>
                      <View style={[styles.flexCol, { borderRight: "0.5px solid red", gap: "5px", width: "60%" }]}>
                        <Text style={styles.primaryText}>ZIP CODE</Text>
                        <Text style={styles.primaryTextBlack}>11368
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.flexRow]}>
                      <View style={[styles.flexCol, styles.spaceBetween, { gap: "5px" }]}>
                        <Text style={[styles.primaryText]}>TELEPHONE (Include Area Code)</Text>
                        <Text style={{ fontSize: "12px", fontWeight: "extrabold" }}>(        )
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
                  <View style={{ width: "64%", borderBottom: "0.5px solid red", borderRight: "0.5px solid red" }}>
                    <Text style={[styles.primaryText]}> 9. OTHER INSURED'S NAME (Last Name , First Name , Middle Intial)</Text>
                  </View>
                  <View style={{ width: "35%" }}>
                    <Text style={[styles.primaryText]}> 10. IS PATIENT CONDITION RELATED TO:</Text>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View style={{ width: "64%", borderBottom: "0.5px solid red", borderRight: "0.5px solid red" }}>
                    <Text style={[styles.primaryText]}> a. OTHER INSURED'S POLICY OR GROUP NUMBER</Text>
                  </View>
                  <View style={[styles.flexCol, { width: "35%" }]}>
                    <Text style={[styles.primaryText]}> a. EMPLOYMENT (Current and Previous)</Text>
                    <View style={[styles.flexRow, styles.spaceAround]}>
                      <View style={[styles.flexRow]} ><View style={styles.checkbox}></View><Text style={[styles.primaryText]}>YES</Text></View>
                      <View style={[styles.flexRow]}><View style={styles.checkbox}></View><Text style={[styles.primaryText]}>NO</Text></View>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View style={{ width: "64%", borderBottom: "0.5px solid red", borderRight: "0.5px solid red" }}>
                    <Text style={[styles.primaryText]}> b. RESERVED FOR NUCC USE</Text>
                  </View>
                  <View style={[styles.flexCol, { width: "35%" }]}>
                    <Text style={[styles.primaryText]}> b. AUTO ACCIDENT?</Text>
                    <View style={[styles.flexRow, styles.spaceAround]}>
                      <View style={[styles.flexRow]} ><View style={styles.checkbox}></View><Text style={[styles.primaryText]}>YES</Text></View>
                      <View style={[styles.flexRow]}><View style={styles.checkbox}></View><Text style={[styles.primaryText]}>NO</Text></View>
                      <View style={[styles.flexCol]}><Text style={[styles.primaryText]}>Place (State)</Text> <View style={styles.checkbox}></View></View>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View style={{ width: "64%", borderBottom: "0.5px solid red", borderRight: "0.5px solid red" }}>
                    <Text style={[styles.primaryText]}> c. RESERVED FOR NUCC USE</Text>
                  </View>
                  <View style={[styles.flexCol, { width: "35%", borderBottom: "0.5px solid red" }]}>
                    <Text style={[styles.primaryText]}> c. AUTO ACCIDENT?</Text>
                    <View style={[styles.flexRow, styles.spaceAround]}>
                      <View style={[styles.flexRow]} ><View style={styles.checkbox}></View><Text style={[styles.primaryText]}>YES</Text></View>
                      <View style={[styles.flexRow]}><View style={styles.checkbox}></View><Text style={[styles.primaryText]}>NO</Text></View>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow]}>
                  <View style={{ width: "64%", borderBottom: "0.5px solid red", borderRight: "0.5px solid red" }}>
                    <Text style={[styles.primaryText]}> d. INSURANCE PLAN NAME AND PROGRASM NAME </Text>
                  </View>
                  <View style={[styles.flexCol, { width: "35%" }]}>
                    <Text style={[styles.primaryText]}> 10d. CLAIM CODE (Designated by NUCC)</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <View style={{ borderBottom: "0.5px solid red", borderRight: "0.5px solid red" }}>
                  <Text style={[styles.primaryText]}> 11. INSURED'S POLICY GROUP OF FECA NUMBER</Text>
                </View>
                <View>
                  <View style={[styles.flexRow , {borderBottom: "0.5px solid red"}]}>
                    <View style={[styles.flexCol, styles.spaceAround  , {width : "60%"}]}>
                      <Text style={styles.primaryText}> a. INSURED'S DATE OF BIRTH</Text>
                      <View style={[styles.flexRow , {gap :"3px" , marginLeft : "10px"}]}>
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
                      <View style={[styles.flexCol, {justifyContent:"center" , width:"40%"}]}>
                        <Text style={[styles.primaryText , {textAlign :"center"}]}>SEX</Text>
                        <View style={[styles.flexRow , styles.spaceAround]}>
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
                <View style={ [styles.flexCol ,{ borderBottom: "0.5px solid red", borderRight: "0.5px solid red" }]}>
                  <Text style={[styles.primaryText]}> b. OTHER CLAIM ID (Designated by NUCC)</Text>
                  <View style={[styles.borderRightDotted , {height : "4px" , marginLeft:"6px"}]}></View>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainerInner}>
              <View style={styles.bodyWrapper1}>
                <View style={[styles.flexCol, { width: "97%" }]} >
                  <View style={[styles.flexRow, { justifyContent: "center", alignItems: "center" }]} ><Text style={{ fontSize: "7px", fontWeight: "bold", color: "red" }}>READ BACK OF FORM COMPLETEING & SIGING THIS FORM</Text></View>
                  <View style={[styles.flexRow]}>
                    <Text style={[styles.primaryText]}>12. </Text>
                    <View style={[styles.flexCol]}>
                      <Text style={[styles.primaryText]}>PATIENT'S OR AUTHORIZED PERSON'S SIGNATURE I authorize the release of any medical and other information necessary to process this claim. I also request payment of goverment benefits either to myself or to the party. who accept assigement below.</Text>
                      <View style={[styles.flexRow, styles.spaceBetween, { margin: "5px 0px 2px 0px" }]}>
                        <View style={[styles.flexRow]}><Text style={[styles.primaryText]}>SIGNED  </Text><Text style={[styles.primaryText, { borderBottom: "0.5px solid red" }]}>SIGNATURE OF FILE</Text></View>
                        <View style={[styles.flexRow]}><Text style={[styles.primaryText]}>DATE  </Text><Text style={[styles.primaryText, { borderBottom: "0.5px solid red" }]}>03/14/2022</Text></View>

                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapper2}>
                <Text>World</Text>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  );
};

export default CmsForm15;
