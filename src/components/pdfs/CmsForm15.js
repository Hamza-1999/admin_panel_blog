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
  primaryText: { fontSize: "9px", fontWeight: "light" },
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
                    border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <View style={styles.checkboxWrapper}>
                    <View style={styles.checkbox}></View>
                    <View>
                      <Text style={styles.primaryText}>1. Medicare</Text>
                      <Text style={styles.primaryText}>(Medicare#)</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <Text style={styles.primaryText}>Medicaid</Text>
                  <View style={styles.checkboxWrapper}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.primaryText}>(Medicaid#)</Text>
                  </View>
                </View>
                <View
                  style={{
                    border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <Text style={styles.primaryText}>Tricare</Text>
                  <View style={styles.checkboxWrapper}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.primaryText}>(Id#/Dod#)</Text>
                  </View>
                </View>
                <View
                  style={{
                    border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <Text style={styles.primaryText}>Champva</Text>
                  <View style={styles.checkboxWrapper}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.primaryText}>(Member Id#)</Text>
                  </View>
                </View>
                <View
                  style={{
                    border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <Text style={styles.primaryText}>Group Health Plan</Text>
                  <View style={styles.checkboxWrapper}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.primaryText}>(Id#)</Text>
                  </View>
                </View>
                <View
                  style={{
                    border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <Text style={styles.primaryText}>Feca Blklung</Text>
                  <View style={styles.checkboxWrapper}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.primaryText}>(Id#)</Text>
                  </View>
                </View>
                <View
                  style={{
                    border: "1px solid black",
                    width: "14%",
                  }}
                >
                  <Text style={styles.primaryText}>Other</Text>
                  <View style={styles.checkboxWrapper}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.primaryText}>(Id#)</Text>
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
