import React from 'react'
import {Helmet} from 'react-helmet-async';

function NoPage() {
    return (
        <>
            <Helmet>
                <title>alovservis.az | NoPage</title>
            </Helmet>
            <div style={{
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>Error 404
            </div>
        </>
    )
}

export default NoPage
