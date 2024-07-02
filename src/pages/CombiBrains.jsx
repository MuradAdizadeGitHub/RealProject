import React from "react";
import CombiBoards from "../components/CombiBoards/index.jsx";
import { Helmet } from 'react-helmet-async';
function CombiBrains() {
  return (
    <>
      <Helmet>
        <title>alovservis.az | Combi Boards</title>
      </Helmet>
      <CombiBoards />
    </>
  );
}

export default CombiBrains;
