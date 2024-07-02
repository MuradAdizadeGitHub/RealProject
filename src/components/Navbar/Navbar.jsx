import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
import NavbarBurger from "../NavbarBurger/index.jsx";
import { useTranslation } from "react-i18next";
import i18n from "i18next"; // Import i18n for changing language

function Navbar() {
    const { t } = useTranslation();
    return (
        <>
            <nav>
                <div className="navbar-general">
                    <div className="navbar-logo">
                        <img
                            className="navbar-logo-img"
                            src="https://alovservisimages.netlify.app/img/whitelogo.png"
                            alt="Logo"
                        />
                    </div>
                    <NavbarBurger />
                    <ul className="navbar-items">
                        <li>
                            <Link className={"Lilink"} to="/">{t('homepage')}</Link>
                        </li>
                        <li>
                            <Link className={"Lilink"} to="/combimaster">{t('combimasterpage')}</Link>
                        </li>
                        <li>
                            <Link className={"Lilink"} to="/combibrains">{t('combibrainspage')}</Link>
                        </li>
                        <li>
                            <Link className={"Lilink"} to="/salesofparts">{t('salesofdetailspage')}</Link>
                        </li>
                        <li>
                            <Link className={"Lilink"} to="/contactus">{t('contactuspage')}</Link>
                        </li>
                        <li>
                            <select
                                onChange={(e) => {
                                    i18n.changeLanguage(e.target.value);
                                }}
                            >
                                <option value="az">AZ</option>
                                <option value="tr">TUR</option>
                                <option value="ru">RU</option>
                                <option value="en">ENG</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
