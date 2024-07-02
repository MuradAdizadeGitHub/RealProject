import { useTranslation } from 'react-i18next';
import './index.scss'


function CombiBoards() {
    const { t } = useTranslation();
    return (
       <>
        <section className='section-combibrains-img'>
        <div className="section-combibrains-head">
            <p className="section-combibrains-text">
            {t('combibrains')}
            </p>
        </div>
        </section>
        <section id={"combiBoards"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-7 col-md-7 col-sm-12 col-xs-12"}>
                        <img src={"https://alovservisimages.netlify.app/img/kart1.jpg"} alt={"Image"}/>
                        <h2>
                        {t('combibrains_head')}
                        </h2>
                        <h3>
                        {t('combibrains_text_1')}
                        </h3>
                        <h3> {t('combibrains_text_2')}</h3>
                    </div>
                    <div className={"col-5 col-md-5 col-sm-12 col-xs-12"}>
                        <img src={"https://alovservisimages.netlify.app/img/kombi-beyin-tamiri-595x446.jpg.webp"}
                             alt={"Image"}/>
                        <img src={"https://alovservisimages.netlify.app/img/kombi%20servisi.jpg"}
                             alt={"Image"}/>
                        <img src={"https://alovservisimages.netlify.app/img/kenarlik.jpg"}
                             alt={"Image"}/>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
}

export default CombiBoards;