import React, { useState } from "react";
import TaxonomyList from "./TaxonomyList";
import CustomModal from "../../../components/CustomModal";

const Practice = () => {
  const [taxonomyListModal, setTaxonomyListModal] = useState(false);
  return (
    <>
      <div>Practice</div>

      <CustomModal
        open={taxonomyListModal}
        handleClose={() => setTaxonomyListModal(false)}
      >
        <TaxonomyList handleClose={() => setTaxonomyListModal(false)} />
      </CustomModal>

      <button onClick={() => setTaxonomyListModal(true)}>Add Taxonomy</button>
    </>
  );
};

export default Practice;
