import {Helmet} from 'react-helmet-async';

function NoPage() {
    return (
        <>
            <Helmet>
            <title>Alov servis - Kombi servis,Ucuz və zəmanətli işlər üçün bizimlə əlaqə saxlayın.</title>
            </Helmet>
            <div style={{
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>Error 404 Not Found
            </div>
        </>
    )
}

export default NoPage
