import React from "react";
import CombiBoards from "../components/CombiBoards/index.jsx";
import { Helmet } from 'react-helmet-async';
function CombiBrains() {
  return (
    <>
      <Helmet>
      <title>Alov servis - Kombi servis,Ucuz və zəmanətli işlər üçün bizimlə əlaqə saxlayın.</title>
      </Helmet>
      <CombiBoards />
    </>
  );
}

export default CombiBrains;
