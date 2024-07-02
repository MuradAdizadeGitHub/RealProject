import "./index.scss";
import { FaDice, FaMedal } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function WhyDoWe() {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-combimaster-img">
        <div className="section-combimaster-head">
            <p className="section-combimaster-text">
            {t('combimaster_head')}
            </p>
        </div>
      </section>
      <section id={"whyDoWe"}>
        <div className={"container"}>
          <div className={"titles"}>
            <h2>{t('whydowe')}</h2>
            <h3>
            {t('whydowe_head')}
            </h3>
          </div>
          <div className={"row"} style={{ marginTop: "30px" }}>
            <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
              <div className={"square"}>
                <FaDice />
              </div>
              <h4>{t('highquality_head')}</h4>
              <p>
              {t('highquality_text')}
              </p>
              <div className={"square"} style={{ marginTop: "40px" }}>
                <FaMedal />
              </div>
              <h4>{t('guaranteeofworkdone_head')}</h4>
              <p>
              {t('guaranteeofworkdone_text')}
              </p>
            </div>
            <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
              <img
                src={"https://alovservisimages.netlify.app/img/combik.png"}
                alt={"Image"}
              />
            </div>
            <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
              <div className={"square"}>
                <FaPeopleGroup />
              </div>
              <h4>{t('professionalstaff_head')}</h4>
              <p>
              {t('professionalstaff_text')}
              </p>
              <div className={"square"} style={{ marginTop: "40px" }}>
                <BsFillTelephoneFill />
              </div>
              <h4>{t('support_head')}</h4>
              <p>
              {t('support_text')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyDoWe;
