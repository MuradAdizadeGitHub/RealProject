import React from "react";
import WhyDoWe from "../components/WhyDoWe/index.jsx";
import { Helmet } from 'react-helmet-async';
function CombiMaster() {
  return (
    <>
      <Helmet>
        <title>Alov servis - Kombi servis,Ucuz və zəmanətli işlər üçün bizimlə əlaqə saxlayın.</title>
      </Helmet>
      <WhyDoWe />
    </>
  );
}

export default CombiMaster;
