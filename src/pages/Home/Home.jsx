import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BsFillMotherboardFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async';
function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>alovservis.az | Home</title>
      </Helmet>

      <section className="section-home-top">
        <div className="section-home-top-general">
          <div>
            <p className="alovservishead">ALOV & {t("SERVICE")}</p>
          </div>
          <div className="">
            <p className="alovservistext">{t("home_title")}</p>
          </div>
          <div className="section-home-top-btn">
            <button className="kombiustasi-btn">
              <Link to={"/combimaster"}>{t("combimasterpage")}</Link>
            </button>
            <button className="bizimleelaqe-btn">
              <Link to={"/contactus"}>{t("contactuspage")}</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="section-home-aboutus">
        <div className="container section-home-about">
          <div className="home-about-general">
            <div>
              <p className="home-about-top">{t("about_title")}</p>
              <p className="home-about-head">{t("about_head")}</p>
              <div className="services-items-opinion">
                <div className="services-items-opinion-col-2">
                  {" "}
                  <p>{t("about_item_1")}</p>
                  <p>{t("about_item_2")}</p>
                </div>
                <div className="services-items-opinion-col-2">
                  <p>{t("about_item_3")}</p>
                  <p>{t("about_item_4")}</p>
                </div>
              </div>

              <div className="services-items-opinion-col-3">
                <div>
                  <p className="callmenowtext">{t("about_call_text")}</p>
                  <a href={"tel:+9940556008483"} className="callmenownumber">
                    055-600-84-83
                  </a>
                </div>
                <div>
                  <button className="callmenow">
                    <Link to={"/contactus"}>{t("about_call_btn")}</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="home-aboutus-img"
              src="https://alovservisimages.netlify.app/img/kombi-temizli%C4%9Fi-1024x1024.png"
              alt=""
              style={{ width: "100%", padding: "20px" }}
            />
          </div>
        </div>
      </section>

      <section className="section-home-services">
        <div className="home-services-general">
          <div className="services-staff">
            <p className="home-about-top">{t("services_about")}</p>
            <p className="home-about-head">{t("services_head")}</p>
          </div>
          <div className="home-cards">
            <div className="home-card">
              <div>
                <FaHome style={{ fontSize: "30px" }} />
              </div>
              <p className="home-card-head">{t("combimasterpage")}</p>
              <p className="home-card-text">{t("combimaster_text")}</p>
            </div>
            <div className="home-card">
              <div>
                <GrUserWorker style={{ fontSize: "30px" }} />
              </div>
              <p className="home-card-head">{t("combibrainspage")}</p>
              <p className="home-card-text">{t("combibrains_text")}</p>
            </div>

            <div className="home-card">
              <div>
                <BsFillMotherboardFill style={{ fontSize: "30px" }} />
              </div>
              <p className="home-card-head">{t("salesofdetailspage")}</p>
              <p className="home-card-text">{t("salesofdetails_text")}</p>
            </div>
            <div className="home-card">
              <div>
                <MdAttachEmail style={{ fontSize: "30px" }} />
              </div>
              <p className="home-card-head">{t("contactuspage")}</p>
              <p className="home-card-text">{t("contactus_text")}</p>
            </div>

            <div className="home-card-tel">
              <p className="home-card-tel-head">{t("contactus_number_head")}</p>
              <p className="home-card-tel-head">{t("contactus_number_text")}</p>
              <p className="home-card-tel-head">
                <a
                  style={{ color: "white" }}
                  href={"tel:+9940556008483"}
                  className="callmenownumber"
                >
                  625gahjznznlk
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
