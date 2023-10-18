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
  mainContainer: { color: "red", padding: "15px" },
  headerWrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

const CmsForm15 = ({ pdfData }) => {
  return (
    <Document>
      <Page>
        <View>
          <View>
            <Image src={QrImg} style={{ width: "50px" }} />
            <Text style={{ fontWeight: "extrabold" }}>
              HEALTH INSURANCE CLAIM FORM
            </Text>
            <Text>
              APPROVED BY NATIONAL UNIFORM CLAIM COMMITTEE (NUCC) 02/12
            </Text>
          </View>
          <View>
            <Text>TRAVELERS</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CmsForm15;
