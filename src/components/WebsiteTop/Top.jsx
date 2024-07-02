import React from "react";
import "./Top.scss";
import {FaPhone} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Top() {
    const { t } = useTranslation();
    return (
        <>
            <section className="topbar">
                <div className="topbar-items">
                    <div className="topbar-left">
                        <p><FaLocationDot/>{t('location')}</p>
                        <p><FaPhone/> 055-600-84-83</p>
                        <p><MdAttachEmail/> info@alovservis.az</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px', fontSize: '20px'}}>
                   
                    </div>
                </div>

            </section>
        </>
    );
}

export default Top;
