import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import CmsForm15 from "./CmsForm15";
import CmsUB04 from "./CmsUB04";

const PreviewPdf = () => {
  return (
    <>
      <PDFViewer width="100%" height="100%">
        {/* <CmsUB04 /> */}
        <CmsForm15 />
      </PDFViewer>
    </>
  );
};

export default PreviewPdf;
