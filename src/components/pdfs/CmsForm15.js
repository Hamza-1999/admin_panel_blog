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
    flexDirection: "row",
  },
  bodyWrapper1: { width: "60%", border: "1px solid blue" },
  bodyWrapper1Content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  bodyWrapper2: { width: "40%", border: "1px solid yellow" },
  checkbox: { width: "10px", height: "10px", border: "1px solid red" },
  checkboxWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  flexRowAround: {
    display: "flex", flexDirection: "row"
  },
  flexColAround25: {
    display:"flex" , flexDirection:"column"  , justifyContent: 'flex-end' , width : "25%"
  },
  flexColAround75: {
    display:"flex" , flexDirection:"column"  , justifyContent: 'flex-end' , width : "75%"
  },
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
            <View style={styles.bodyWrapper1}>
              <View style={styles.bodyWrapper1Content}>
                <View
                  style={{
                    // border: "1px solid black",
                    width: "15%",
                  }}
                >
                  <View style={styles.flexRowAround}>
                    <View style={styles.flexColAround25}>
                      <Text style={styles.primaryText}>1.</Text>
                      <View style={styles.checkbox}></View>
                    </View>
                    <View style={styles.flexColAround75}>
                      <Text style={styles.primaryText}> MEDICARE</Text>
                      <Text style={styles.primaryText}>(Medicare#)</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    // border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <View style={styles.flexRowAround}>
                    <View style={styles.flexColAround25}>
                      <View style={styles.checkbox}></View>
                    </View>
                    <View style={styles.flexColAround75}>
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
                  <View style={styles.flexRowAround}>
                    <View style={styles.flexColAround25}>
                      <View style={styles.checkbox}></View>
                    </View>
                    <View style={styles.flexColAround45}>
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
                  <View style={styles.flexRowAround}>
                    <View style={styles.flexColAround25}>
                      <View style={styles.checkbox}></View>
                    </View>
                    <View style={styles.flexColAround45}>
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
                  <View style={styles.flexRowAround}>
                    <View style={styles.flexColAround25}>
                      <View style={styles.checkbox}></View>
                    </View>
                    <View style={styles.flexColAround75}>
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
                  <View style={styles.flexRowAround}>
                    <View style={styles.flexColAround25}>
                      <View style={styles.checkbox}></View>
                    </View>
                    <View style={styles.flexColAround75}>
                      <Text style={styles.primaryText}>FECA</Text>
                      <Text style={styles.primaryText}>BLK LUNG</Text>
                      <Text style={styles.primaryText}>(lD#)</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    // border: "1px solid black",
                    width: "16%",
                  }}
                >
                  <View style={styles.flexRowAround}>
                    <View style={styles.flexColAround25}>
                      <View style={styles.checkbox}></View>
                    </View>
                    <View style={styles.flexColAround75}>
                      <Text style={styles.primaryText}>OTHER</Text>
                      <Text style={styles.primaryText}>(lD#)</Text>
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
      </Page>
    </Document>
  );
};

export default CmsForm15;
