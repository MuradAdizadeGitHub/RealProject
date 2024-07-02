import React from 'react'
import CombiDetalsWrapper from "../components/CombiDetalsWrapper/index.jsx";
import { Helmet } from 'react-helmet-async';
function SaleOfParts() {
    return (
        <>
          <Helmet>
        <title>alovservis.az | SalesOfParts</title>
      </Helmet>
            <CombiDetalsWrapper/>
        </>
    )
}

export default SaleOfParts
