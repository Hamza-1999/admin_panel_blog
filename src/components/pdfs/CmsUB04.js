import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import arrow from '../../assets/Union 1.png'
const styles = StyleSheet.create({
  body: {
    border: "0.5px solid black"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row"
  },
  flexCol: {
    display: "flex",
    flexDirection: "column"
  },
  h12: {
    height: "10px"
  },
  borderRight: {
    borderRight: "0.5px solid black"
  },
  borderRightDotted: {
    borderRight: "0.5px dashed black"
  },
  bgGray: {
    backgroundColor: "#ECECED"
  },
  textGray: {
    color: "#ECECED"
  }


});

const CmsUB04 = ({ pdfData }) => {
  return (
    <Document>
      <Page size={"LETTER"} style={{ padding: "35px  25px" }}>
        <View style={[styles.body]}>
          <View style={[styles.flexCol, { fontSize: "5.5px" }]}>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text>1</Text>
              </View>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text>1</Text>
              </View>
              <View style={[styles.borderRight, { width: "5%" }]}>
                <Text>3a PAT </Text>
                <Text>.CNTL #</Text>
              </View>
              <View style={[styles.borderRight, { width: "28%" }]}></View>
              <View style={[styles.borderRight, { width: "7%" }]}><Text>4 TYPE </Text>
                <Text>OF BILL</Text></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text></Text>
              </View>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text></Text>
              </View>
              <View style={[styles.borderRight, { width: "5%" }]}>
                <Text>b. MED.</Text>
                <Text>REC. #</Text>
              </View>
              <View style={[styles.borderRight, { width: "28%" }]}></View>
              <View style={[styles.borderRight, { width: "7%" }]}></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text></Text>
              </View>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text></Text>
              </View>
              <View style={[styles.borderRight, { width: "9%" }]}>
                <Text>5 FED. TAX NO.</Text>
              </View>
              <View style={[styles.borderRight, styles.flexRow, { width: "22%", justifyContent: "space-evenly" }]}>
                <View><Text>6</Text></View>
                <View>
                  <Text>STATMENT</Text>
                  <Text>FROM</Text>
                </View>
                <View>
                  <Text>COVERED PERIOD</Text>
                  <Text>THROUGH</Text>
                </View>
              </View>
              <View style={[styles.borderRight, { width: "9%" }]}><Text>7</Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text></Text>
              </View>
              <View style={[styles.borderRight, { width: "30%" }]}>
                <Text></Text>
              </View>
              <View style={[styles.borderRight, { width: "9%" }]}>
                <Text></Text>
              </View>
              <View style={[styles.borderRight, styles.flexRow, { width: "22%", justifyContent: "space-evenly" }]}>

                <View style={[styles.borderRight, { width: "50%" }]}>
                  <Text></Text>
                  <Text></Text>

                </View>
                <View style={[{ width: "50%" }]}>
                  <Text></Text>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.borderRight, { width: "9%" }]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.borderRight, styles.flexRow, { width: "40%" }]}>
                <View style={[styles.borderRight, { width: "35%" }]} ><Text>8 PATIENT NAME</Text></View>
                <View style={[styles.borderRight, { width: "3%" }]}><Text>a</Text></View>
                <View style={[{ width: "60%" }]}></View>
              </View>
              <View style={[styles.borderRight, styles.flexRow, { width: "60%" }]}>
                <View style={[styles.borderRight, { width: "25%" }]} ><Text>9 PATIENT ADDRESS</Text></View>
                <View style={[styles.borderRight, { width: "2%" }]}><Text>a</Text></View>
                <View style={[{ width: "60%" }]}></View>
              </View>

            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.borderRight, styles.flexRow, { width: "30%" }]}>
                <View style={[styles.borderRight, { width: "4%" }]}><Text>a</Text></View>
              </View>
              <View style={[styles.borderRight, styles.flexRow, { width: "40%" }]}>
                <View style={[styles.borderRight, { width: "4%" }]}><Text>b</Text></View>
              </View>
              <View style={[styles.borderRight, styles.flexRow, { width: "7%" }]}>
                <View style={[styles.borderRight, { width: "20%" }]}><Text>c</Text></View>
              </View>
              <View style={[styles.borderRight, styles.flexRow, { width: "16%" }]}>
                <View style={[styles.borderRight, { width: "10%" }]}><Text>d</Text></View>
              </View>
              <View style={[styles.borderRight, styles.flexRow, { width: "7%" }]}>
                <View style={[styles.borderRight, { width: "20%" }]}><Text>e</Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.flexRow, { width: "40%" }, styles.borderRight]}>
                <View style={[{ width: "25%" }, styles.borderRight]}><Text>10 BIRTHDATE</Text></View>
                <View style={[{ width: "11%" }, styles.borderRight]}><Text>11 SEX</Text></View>
                <View style={[{ width: "53%", justifyContent: "center" }, styles.flexCol, styles.borderRight]}>
                  <View style={[{ textAlign: "center" }]}>
                    <Text>ADMISSION</Text>
                  </View>
                  <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                    <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
                      <Text>12</Text>
                      <Text>DATE</Text>
                    </View>
                    <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
                      <Text>13 HR</Text>
                      <Text>  14 TYPE</Text>
                      <Text>  15 SRC</Text>
                    </View>
                  </View>
                </View>
                <View style={[{ width: "11%" }]}><Text>16 DHR</Text></View>
              </View>
              <View style={[{ width: "60%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "11%", textAlign: "center" }, styles.borderRight]}><Text>17 STAT</Text></View>
                <View style={[{ width: "50%" }, styles.flexCol, styles.borderRight]}>
                  <View style={[{ textAlign: "center" }]}><Text>CONDITION CODES</Text></View>
                  <View style={[styles.flexRow, { justifyContent: "space-evenly" }]}>
                    <Text>18</Text>
                    <Text>19</Text>
                    <Text>20</Text>
                    <Text>21</Text>
                    <Text>22</Text>
                    <Text>23</Text>
                    <Text>24</Text>
                    <Text>25</Text>
                    <Text>26</Text>
                    <Text>27</Text>
                    <Text>28</Text>
                  </View>
                </View>
                <View style={[{ width: "11%", textAlign: "center" }, styles.borderRight]}><Text>29 ACDT</Text><Text>STATE</Text></View>
                <View style={[{ width: "28%" }]}><Text>30</Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.flexRow, { width: "40%" }, styles.borderRight]}>
                <View style={[{ width: "25%" }, styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "11%" }, styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "53%" }, styles.flexRow, styles.borderRight]}>
                  <View style={[{ width: "30%" }, styles.borderRight]}></View>
                  <View style={[{ width: "15%" }, styles.borderRight]}></View>
                  <View style={[{ width: "15%" }, styles.borderRight]}></View>
                  <View style={[{ width: "15%" }]}></View>
                </View>
                <View style={[{ width: "11%" }]}><Text></Text></View>
              </View>
              <View style={[{ width: "60%" }, styles.h12, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "11%", textAlign: "center" }, styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "50%" }, styles.flexRow, styles.borderRight]}>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }, styles.borderRight]}></View>
                  <View style={[{ width: "9.09%" }]}></View>
                </View>
                <View style={[{ width: "11%", textAlign: "center" }, styles.borderRight]}><Text></Text><Text></Text></View>
                <View style={[{ width: "28%" }]}><Text></Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px" }, styles.borderRight]}>
                <View>
                  <Text>31</Text>
                  <Text>CODE</Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end" }]}>
                  <Text>OCCURRENCE</Text>
                  <Text>DATE</Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px" }, styles.borderRight]}>
                <View>
                  <Text>32</Text>
                  <Text>CODE</Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", textAlign: "right" }]}>
                  <Text>OCCURRENCE</Text>
                  <Text style={{ textAlign: "right" }}>DATE</Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px" }, styles.borderRight]}>
                <View>
                  <Text>33</Text>
                  <Text>CODE</Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", textAlign: "right" }]}>
                  <Text>OCCURRENCE</Text>
                  <Text style={{ textAlign: "right" }}>DATE</Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px" }, styles.borderRight]}>
                <View>
                  <Text>34</Text>
                  <Text>CODE</Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", textAlign: "right" }]}>
                  <Text>OCCURRENCE</Text>
                  <Text style={{ textAlign: "right" }}>DATE</Text>
                </View>
              </View>
              <View style={[styles.flexRow, styles.borderRight, { padding: "0px 1px" }]}>
                <View>
                  <Text>35</Text>
                  <Text>CODE</Text>
                </View>
                <View>
                  <Text>OCCURRENCE SPAN</Text>
                  <Text>FROM</Text>
                </View>
                <View>
                  <Text style={[{ marginTop: "5px" }]}>THROUGH</Text>
                </View>
              </View>
              <View style={[styles.flexRow, styles.borderRight, { padding: "0px 1px" }]}>
                <View>
                  <Text>36</Text>
                  <Text>CODE</Text>
                </View>
                <View>
                  <Text>OCCURRENCE SPAN</Text>
                  <Text>FROM</Text>
                </View>
                <View>
                  <Text style={[{ marginTop: "5px" }]}>THROUGH</Text>
                </View>
              </View>
              <View style={[{ width: "10%" }]}>
                <Text>37</Text>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>

              <View style={[styles.flexRow, styles.borderRight, { padding: "0px 1px", width: "21.5%" }]}>
                <View style={[{ width: "20%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, styles.borderRight, { padding: "0px 1px", width: "21.5%" }]}>
                <View style={[{ width: "20%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[{ width: "10%" }]}>
                <Text></Text>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, { justifyContent: "space-between", padding: "0px 1px", width: "12%" }, styles.borderRight]}>
                <View style={[{ width: "30%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[styles.flexCol, { justifyContent: "flex-end", width: "5%" }]}>
                  <Text></Text>
                </View>
              </View>

              <View style={[styles.flexRow, styles.borderRight, { padding: "0px 1px", width: "21.5%" }]}>
                <View style={[{ width: "20%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[styles.flexRow, styles.borderRight, { padding: "0px 1px", width: "21.5%" }]}>
                <View style={[{ width: "20%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }, styles.borderRight]}>
                  <Text></Text>
                </View>
                <View style={[{ width: "40%" }]}>
                  <Text></Text>
                </View>
              </View>
              <View style={[{ width: "10%" }]}>
                <Text></Text>
              </View>
            </View>

            <View style={[styles.flexRow]}>
              <View style={[styles.flexRow, styles.borderRight, { width: "51.7%" }]}>
                <View style={[{ width: "96%" }, styles.borderRight]}><Text>38</Text></View>
                <View style={[{ width: "4%" }]}></View>
              </View>
              <View style={[styles.flexRow, { width: "48.3%", borderBottom: "0.5px solid black" }]}>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[{ width: "22%" }]}><Text>39</Text><Text>CODE</Text></View>
                  <View style={[{ width: "69%" }]}><Text>VALUE CODES</Text><Text>AMOUNT</Text></View>
                  <View style={[{ width: "9%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[{ width: "22%" }]}><Text>40</Text><Text>CODE</Text></View>
                  <View style={[{ width: "69%" }]}><Text>VALUE CODES</Text><Text>AMOUNT</Text></View>
                  <View style={[{ width: "9%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[{ width: "22%" }]}><Text>41</Text><Text>CODE</Text></View>
                  <View style={[{ width: "69%" }]}><Text>VALUE CODES</Text><Text>AMOUNT</Text></View>
                  <View style={[{ width: "9%" }]}></View>
                </View>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[styles.flexRow, styles.borderRight, { width: "51.7%" }]}>
                <View style={[{ width: "96%" }, styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "4%" }]}><Text>a</Text></View>
              </View>
              <View style={[styles.flexRow, { width: "48.3%" }]}>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[styles.flexRow, styles.borderRight, { width: "51.7%" }]}>
                <View style={[{ width: "96%" }, styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "4%" }]}><Text>b</Text></View>
              </View>
              <View style={[styles.flexRow, { width: "48.3%" }]}>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[styles.flexRow, styles.borderRight, { width: "51.7%" }]}>
                <View style={[{ width: "96%" }, styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "4%" }]}><Text>c</Text></View>
              </View>
              <View style={[styles.flexRow, { width: "48.3%" }]}>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[styles.flexRow, styles.borderRight, { width: "51.7%" }]}>
                <View style={[{ width: "96%" }, styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "4%" }]}><Text>d</Text></View>
              </View>
              <View style={[styles.flexRow, { width: "48.3%" }]}>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
                <View style={[styles.borderRight, styles.flexRow, { width: "33.3%", justifyContent: "space-evenly", gap: "1px" }]}>
                  <View style={[styles.borderRight, { width: "22%" }]}><Text></Text></View>
                  <View style={[styles.borderRightDotted, { width: "65%" }]}><Text></Text></View>
                  <View style={[{ width: "13%" }]}></View>
                </View>
              </View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black", fontSize: "5.5px" }]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text>42 REV. CD.</Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text>43 DESCRIPTION</Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text>44 HCPCS / RATE / HIPPS CODE</Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text>45 SERV. DATE</Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text>46 SERV. UNITS</Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}><Text>47 TOTAL CHARGES</Text></View>
              <View style={[{ width: "15%", padding: "2px" }, styles.borderRight]}><Text>48 NON-COVERED CHARGES</Text></View>
              <View style={[{ width: "2%", padding: "2px" }]}><Text>49</Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>


            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "28%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "16%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "44%", padding: "2px", justifyContent: "space-between", fontSize: "8px", fontWeight: "extrabold" }, styles.flexRow, styles.borderRight]}>
                <View style={[styles.flexRow]}>
                  <View><Text>PAGE</Text></View>
                  <View style={{ borderBottom: "1.5px solid black", width: "20%" }}><Text></Text></View>
                  <View><Text>OF</Text></View>
                  <View style={{ borderBottom: "1.5px solid black", width: "20%" }}><Text></Text></View>
                </View>
                <View>
                  <Text>CREATION DATE</Text>
                </View>

              </View>
              <View style={[{ width: "10%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[styles.flexRow, { width: "10%", fontSize: "8px", fontWeight: "extrabold", justifyContent: "space-between", padding: "2px", backgroundColor: "black", color: "white" }, styles.borderRight]}>
                <Text>TOTAL</Text>
                <Image style={{ width: "20px", height: "8px" }} src={arrow}></Image>
              </View>
              <View style={[{ width: "11%", padding: "2px" }, styles.borderRight]}>
                <View style={[{ width: "75%" }, styles.borderRightDotted]}><Text></Text></View>
                <View style={{ width: "25%" }}><Text></Text></View>
              </View>
              <View style={[{ width: "15%", padding: "2px" }, styles.flexRow, styles.borderRight]}></View>
              <View style={[{ width: "2%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text>50 PAYER NAME</Text></View>
              <View style={[{ width: "20%", padding: "2px" }, styles.borderRight]}><Text>51 HEALTH PLAN ID</Text></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text>52 REL</Text>
                <Text>INFO</Text>
              </View>
              <View style={[{ width: "2%", padding: "2px" }, styles.borderRight]}></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text>53 ASG.</Text>
                <Text>BEN.</Text>
              </View>
              <View style={[{ width: "18%", padding: "2px" }, styles.borderRight]}><Text>54 PRIOR PAYMENTS</Text></View>
              <View style={[{ width: "18%", padding: "2px" }, styles.borderRight]}><Text>55 EST. AMOUNT DUE</Text></View>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text>56 NPI</Text></View>
              <View style={[{ width: "27%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow]}>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "20%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text></Text>
                <Text></Text>
              </View>
              <View style={[{ width: "2%", padding: "2px" }, styles.borderRight]}></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text></Text>
                <Text></Text>
              </View>
              <View style={[{ width: "18%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "18%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[styles.borderRightDotted, { width: "75%" }]}></View>
                <View style={[{ width: "25%" }]}></View>
              </View>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text>57</Text></View>
              <View style={[{ width: "27%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow]}>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "20%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text></Text>
                <Text></Text>
              </View>
              <View style={[{ width: "2%", padding: "2px" }, styles.borderRight]}></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text></Text>
                <Text></Text>
              </View>
              <View style={[{ width: "18%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "18%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[styles.borderRightDotted, { width: "75%" }]}></View>
                <View style={[{ width: "25%" }]}></View>
              </View>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text>OTHER</Text></View>
              <View style={[{ width: "27%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "20%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text></Text>
                <Text></Text>
              </View>
              <View style={[{ width: "2%", padding: "2px" }, styles.borderRight]}></View>
              <View style={[{ width: "6%" }, styles.borderRight]}>
                <Text></Text>
                <Text></Text>
              </View>
              <View style={[{ width: "18%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "18%", padding: "2px" }, styles.flexRow, styles.borderRight]}>
                <View style={[styles.borderRightDotted, { width: "75%" }]}></View>
                <View style={[{ width: "25%" }]}></View>
              </View>
              <View style={[{ width: "7%", padding: "2px" }, styles.borderRight]}><Text>PRV ID</Text></View>
              <View style={[{ width: "27%", padding: "2px" }]}></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text>58 INSURED’S NAME</Text></View>
              <View style={[{ width: "8.5%", padding: "2px" }, styles.borderRight]}><Text>59 P. REL</Text></View>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text>60 INSURED’S UNIQUE ID</Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text>61 GROUP NAME</Text></View>
              <View style={[{ width: "34%", padding: "2px" }, styles.borderRight]}><Text>62 INSURANCE GROUP NO.</Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "8.5%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "34%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "8.5%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "34%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "8.5%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "35%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "34%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "40%", padding: "2px" }, styles.borderRight]}><Text>63 TREATMENT AUTHORIZATION CODES</Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text>64 DOCUMENT CONTROL NUMBER</Text></View>
              <View style={[{ width: "30%", padding: "2px" }]}><Text>65 EMPLOYER NAME</Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "40%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12]}>
              <View style={[{ width: "40%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, styles.h12, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "40%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }, styles.borderRight]}><Text></Text></View>
              <View style={[{ width: "30%", padding: "2px" }]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "3%", padding: "2px" }, styles.borderRight]}>
                <Text>66</Text>
                <Text>DX</Text>
              </View>
              <View style={[{ width: "10%" }, styles.flexCol, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>67</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>A</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>B</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>C</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>D</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>E</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>F</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>G</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>H</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "13%", padding: "2px" }]}><Text>68</Text></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black" }]}>
              <View style={[{ width: "3%", padding: "2px" }, styles.borderRight]}>
                <Text></Text>
                <Text></Text>
              </View>
              <View style={[{ width: "10%" }, styles.flexCol, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>I</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>J</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>K</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>L</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>M</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>N</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>O</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>P</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>Q</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "13%", padding: "2px" }]}><Text></Text></View>
            </View>

            <View style={[styles.flexRow, { borderBottom: "0.5px solid black", height: "12px" }]}>
              <View style={[{ width: "6%", padding: "1px", textAlign: "center" }, styles.bgGray, styles.borderRight]}>
                <Text>69 ADMIT</Text>
                <Text>DX</Text>
              </View>
              <View style={[{ width: "10%" }, styles.flexCol, styles.borderRight]}>
              </View>
              <View style={[{ width: "10%", textAlign: "center", paddingTop: "1px" }, styles.flexCol, styles.borderRight]}>
                <Text>70 PATIENT</Text>
                <Text>REASON DX</Text>
              </View>
              <View style={[{ width: "8%" }, styles.flexRow, styles.borderRight]}>
                <Text style={[{ fontSize: "13px", padding: "2px", fontWeight: "extrabold" }, styles.textGray]}>a</Text>
              </View>
              <View style={[{ width: "8%" }, styles.flexRow, styles.borderRight]}>
                <Text style={[{ fontSize: "13px", padding: "2px", fontWeight: "extrabold" }, styles.textGray]}>b</Text>
              </View>
              <View style={[{ width: "8%" }, styles.borderRight]}>
                <Text style={[{ fontSize: "13px", padding: "2px", fontWeight: "extrabold" }, styles.textGray]}>c</Text>
              </View>
              <View style={[{ width: "5%", paddingTop: "1px" }, styles.borderRight]}>
                <Text>71 PPS</Text>
                <Text>CODE</Text>
              </View>
              <View style={[{ width: "8%" }, styles.flexRow, styles.borderRight]}>
              </View>
              <View style={[{ width: "2%" }, styles.borderRight]}>
                <Text>72</Text>
                <Text>ECI</Text>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>a</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>b</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "10%" }, styles.flexRow, styles.borderRight]}>
                <View style={[{ width: "85%", padding: "2px" }]}><Text style={[{ fontSize: "13px", fontWeight: "extrabold" }, styles.textGray]}>c</Text></View>
                <View style={[{ width: "15%" }, styles.bgGray]}></View>
              </View>
              <View style={[{ width: "13%", padding: "1px" }]}><Text>73</Text></View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow, { width: "60%" }]}>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", borderBottom: "0.5px solid black" , padding: "0px 3px" }, styles.borderRight, styles.bgGray]}>
                  <View><Text>74</Text></View>
                  <View style={[styles.flexCol ,{ borderBottom: "0.5px solid black"}]}>
                    <Text>PRINCIPAL PROCEDURE</Text>
                    <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                      <Text>CODE</Text>
                      <Text>DATE</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between",  borderBottom: "0.5px solid black" ,padding: "0px 3px", backgroundColor: "black", color: "white" , borderBottom: "0.5px solid black"}, styles.borderRight]}>
                  <View><Text>a.</Text></View>
                  <View style={[styles.flexCol]}>
                    <Text>PRINCIPAL PROCEDURE</Text>
                    <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                      <Text>CODE</Text>
                      <Text>DATE</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between",  borderBottom: "0.5px solid black" ,padding: "0px 3px" }, styles.borderRight, styles.bgGray]}>
                  <View><Text>b.</Text></View>
                  <View style={[styles.flexCol]}>
                    <Text>PRINCIPAL PROCEDURE</Text>
                    <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                      <Text>CODE</Text>
                      <Text>DATE</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow, { width: "10%" }, styles.borderRight]}><Text>75</Text></View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%" , borderBottom: "0.5px solid black"  } , styles.flexRow]}>
                <View style={[{ width: "25%" }, styles.bgGray, styles.borderRight]}><Text>76 ATTENDING</Text></View>
                <View style={[{ width: "40%" }, styles.borderRight]}><Text>NPI</Text></View>
                <View style={[{ width: "7%" }, styles.bgGray, styles.borderRight]}><Text>QUAL</Text></View>
                <View style={[{ width: "8%" },  styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "20%" }]}><Text></Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow, { width: "60%"  }]}>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", padding: "0px 3px", borderBottom: "0.5px solid black" }, styles.borderRight]}>
                   <View style={ [styles.borderRight , {width:"50%"}]}></View>
                   <View style={ [ {width:"50%"}]}></View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", padding: "0px 3px", borderBottom: "0.5px solid black" }, styles.borderRight]}>
                <View style={ [styles.borderRight , {width:"50%"}]}></View>
                   <View style={ [ {width:"50%"}]}></View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", padding: "0px 3px", borderBottom: "0.5px solid black" }, styles.borderRight]}>
                <View style={ [styles.borderRight , {width:"50%"}]}></View>
                   <View style={ [ {width:"50%"}]}></View>
                </View>
                <View style={[styles.flexRow, { width: "10%" }, styles.borderRight]}><Text></Text></View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%" ,borderBottom: "0.5px solid black"} , styles.flexRow]}>
                <View style={[{ width: "55%" }, styles.borderRight]}><Text>LAST</Text></View>
                <View style={[{ width: "45%" }]}><Text>FIRST</Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow, { width: "60%" }]}>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", borderBottom: "0.5px solid black" , padding: "0px 3px" }, styles.borderRight, styles.bgGray]}>
                  <View style={[{ borderBottom: "0.5px solid black"}]}><Text>c.</Text></View>
                  <View style={[styles.flexCol ,{ borderBottom: "0.5px solid black"}]}>
                    <Text>PRINCIPAL PROCEDURE</Text>
                    <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                      <Text>CODE</Text>
                      <Text>DATE</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", borderBottom: "0.5px solid black" , padding: "0px 3px", backgroundColor: "black", color: "white" , borderBottom: "0.5px solid black"}, styles.borderRight]}>
                  <View><Text>d.</Text></View>
                  <View style={[styles.flexCol]}>
                    <Text>PRINCIPAL PROCEDURE</Text>
                    <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                      <Text>CODE</Text>
                      <Text>DATE</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", borderBottom: "0.5px solid black" , padding: "0px 3px" }, styles.borderRight, styles.bgGray]}>
                  <View><Text>e.</Text></View>
                  <View style={[styles.flexCol]}>
                    <Text>PRINCIPAL PROCEDURE</Text>
                    <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                      <Text>CODE</Text>
                      <Text>DATE</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow, { width: "10%" }, styles.borderRight]}><Text></Text></View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%", borderBottom: "0.5px solid black" } , styles.flexRow]}>
                <View style={[{ width: "25%" }, styles.bgGray, styles.borderRight]}><Text>76 ATTENDING</Text></View>
                <View style={[{ width: "40%" }, styles.borderRight]}><Text>NPI</Text></View>
                <View style={[{ width: "7%" }, styles.bgGray, styles.borderRight]}><Text>QUAL</Text></View>
                <View style={[{ width: "8%" },  styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "20%" }]}><Text></Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow, { width: "60%"  }]}>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", padding: "0px 3px", borderBottom: "0.5px solid black" }, styles.borderRight]}>
                   <View style={ [styles.borderRight , {width:"50%"}]}></View>
                   <View style={ [ {width:"50%"}]}></View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", padding: "0px 3px", borderBottom: "0.5px solid black" }, styles.borderRight]}>
                <View style={ [styles.borderRight , {width:"50%"}]}></View>
                   <View style={ [ {width:"50%"}]}></View>
                </View>
                <View style={[styles.flexRow, { width: "30%", justifyContent: "space-between", padding: "0px 3px", borderBottom: "0.5px solid black" }, styles.borderRight]}>
                <View style={ [styles.borderRight , {width:"50%"}]}></View>
                   <View style={ [ {width:"50%"}]}></View>
                </View>
                <View style={[styles.flexRow, { width: "10%" }, styles.borderRight]}><Text></Text></View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%" ,borderBottom: "0.5px solid black"} , styles.flexRow]}>
                <View style={[{ width: "55%" }, styles.borderRight]}><Text>LAST</Text></View>
                <View style={[{ width: "45%" }]}><Text>FIRST</Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow , styles.borderRight , { width: "60%" , borderBottom: "0.5px solid black"}]}>
                <View style={[{width:"50%"} , styles.borderRight]}><Text>80 REMARKS</Text></View>
                <View style={[{width:"50%"} , styles.borderRight]}>
                  <View style={[{width:"11%"}  , styles.borderRight]}>
                      <Text>81CC</Text>
                      <Text>a</Text>
                  </View>
                  <View style={[{width:"12.5%"} , styles.borderRight]}>
                    
                  </View>
                  <View style={[{width:"35%"}  , styles.borderRight]}>
                 
                  </View>
                  <View style={[{width:"40%"}  , styles.borderRight]}>
                                    
                  </View>
                </View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%", borderBottom: "0.5px solid black" } , styles.flexRow]}>
                <View style={[{ width: "25%" }, styles.bgGray, styles.borderRight]}><Text>76 ATTENDING</Text></View>
                <View style={[{ width: "40%" }, styles.borderRight]}><Text>NPI</Text></View>
                <View style={[{ width: "7%" }, styles.bgGray, styles.borderRight]}><Text>QUAL</Text></View>
                <View style={[{ width: "8%" },  styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "20%" }]}><Text></Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow , styles.borderRight , { width: "60%" , borderBottom: "0.5px solid black"}]}>
                <View style={[{width:"50%"} , styles.borderRight]}><Text></Text></View>
                <View style={[{width:"50%"} , styles.borderRight]}>
                  <View style={[{width:"11%"}  , styles.borderRight]}>
                      <Text></Text>
                      <Text>b</Text>
                  </View>
                  <View style={[{width:"12.5%"} , styles.borderRight]}>
                    
                  </View>
                  <View style={[{width:"35%"}  , styles.borderRight]}>
                 
                  </View>
                  <View style={[{width:"40%"}  , styles.borderRight]}>
                                    
                  </View>
                </View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%" ,borderBottom: "0.5px solid black"} , styles.flexRow]}>
                <View style={[{ width: "55%" }, styles.borderRight]}><Text>LAST</Text></View>
                <View style={[{ width: "45%" }]}><Text>FIRST</Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow , styles.borderRight , { width: "60%" , borderBottom: "0.5px solid black"}]}>
                <View style={[{width:"50%"} , styles.borderRight]}><Text></Text></View>
                <View style={[{width:"50%"} , styles.borderRight]}>
                  <View style={[{width:"11%"}  , styles.borderRight]}>
                      <Text>c</Text>
                      <Text></Text>
                  </View>
                  <View style={[{width:"12.5%"} , styles.borderRight]}>
                    
                  </View>
                  <View style={[{width:"35%"}  , styles.borderRight]}>
                 
                  </View>
                  <View style={[{width:"40%"}  , styles.borderRight]}>
                                    
                  </View>
                </View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%", borderBottom: "0.5px solid black" } , styles.flexRow]}>
                <View style={[{ width: "25%" }, styles.bgGray, styles.borderRight]}><Text>76 ATTENDING</Text></View>
                <View style={[{ width: "40%" }, styles.borderRight]}><Text>NPI</Text></View>
                <View style={[{ width: "7%" }, styles.bgGray, styles.borderRight]}><Text>QUAL</Text></View>
                <View style={[{ width: "8%" },  styles.borderRight]}><Text></Text></View>
                <View style={[{ width: "20%" }]}><Text></Text></View>
              </View>
            </View>

            <View style={[styles.flexRow, {  height: "12px" }]}>
              <View style={[styles.flexRow , styles.borderRight , { width: "60%" , borderBottom: "0.5px solid black"}]}>
                <View style={[{width:"50%"} , styles.borderRight]}><Text></Text></View>
                <View style={[{width:"50%"} , styles.borderRight]}>
                  <View style={[{width:"11%"}  , styles.borderRight]}>
                      <Text></Text>
                      <Text>d</Text>
                  </View>
                  <View style={[{width:"12.5%"} , styles.borderRight]}>
                    
                  </View>
                  <View style={[{width:"35%"}  , styles.borderRight]}>
                 
                  </View>
                  <View style={[{width:"40%"}  , styles.borderRight]}>
                                    
                  </View>
                </View>
              </View>
              <View style={[{ width: "0.5%" }, styles.borderRight]}></View>
              <View style={[{ width: "39%" ,borderBottom: "0.5px solid black"} , styles.flexRow]}>
                <View style={[{ width: "55%" }, styles.borderRight]}><Text>LAST</Text></View>
                <View style={[{ width: "45%" }]}><Text>FIRST</Text></View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CmsUB04;
