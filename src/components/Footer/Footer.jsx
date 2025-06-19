import React from "react";
import './Footer.scss'
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {GrUserWorker} from "react-icons/gr";
import {BsFillMotherboardFill, BsFillTelephoneFill} from "react-icons/bs";
import {IoIosSettings} from "react-icons/io";
import {MdContactSupport} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";
import {IoMailSharp} from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="" style={{backgroundColor: '#091E3E'}}>
                <div className="container footer-general">
                    <div className="footer-top">
                        <div className="footer-col-1">
                            <div>
                                <img
                                    src="https://alovservisimages.netlify.app/img/whitelogo.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>
                                    {t('footer_about')}
                                </p>
                            </div>
                            <div>
                                <p className="footer-bottom-number-head">{t("contactus_number_head")}</p>
                                <a href={'tel:+9940516514104'} className="footer-bottom-number">051-651-41-04</a>
                            </div>
                        </div>

                        <div className="footer-col-2">
                            <div>
                                <p className="footer-heads">{t('footer_head_1')}</p>
                            </div>
                            <div className="footer-col-2-items">
                                <div className="footer-col-2-contact-items">
                                    <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                        <FaLocationDot/>

                                        {t('location')}
                                    </p>
                                </div>
                                <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <IoMailSharp/>
                                    info@alovservis.az
                                </p>
                                <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}><BsFillTelephoneFill/>

                                    <a href={"tel:+9940516514104"}>051-651-41-04</a>
                                </p>
                            </div>
                            <div className="footer-logo">
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <FaHome/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <BsFillMotherboardFill/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <GrUserWorker/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <MdContactSupport/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-col-3">
                            <div>
                                <p className="footer-heads">{t('footer_head_2')}</p>
                            </div>
                            <div className="footer-items">
                                <Link to={'/'} style={{display: "flex", alignItems: 'center', gap: '10px'}}>
                                    <FaHome/>
                                    {t('homepage')}
                                </Link>
                                <Link to={'/combimaster'} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <GrUserWorker/>
                                    {t('combimasterpage')}
                                </Link>
                                <Link to={'/combibrains'} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <BsFillMotherboardFill/>
                                    {t('combibrainspage')}
                                </Link>
                                <Link to={'/salesofparts'} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <IoIosSettings/>
                                    {t('salesofdetailspage')}
                                </Link>
                                <Link to={'/contactus'}
                                      style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <MdContactSupport/>
                                    {t('contactuspage')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <p>©</p>
                <Link to={"/"}>Alov {t('service')}</Link>
                <p>2024</p>
            </div>
        </>
    )
}

export default Footer;