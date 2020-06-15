import i18next from 'i18next';
import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { Element, scroller } from 'react-scroll';
import CVSpanish from '../../assets/CV.pdf';
import CVEnglish from '../../assets/CV_ingles.pdf';
import programmer from '../../assets/programmer.png';
import './main.scss';

function goTo(link) {
   scroller.scrollTo(link, {
      duration: 500,
      smooth: true,
   });
}

export default function Main() {
   const { t } = useTranslation();

   return (
      <Element name="home">
         <section className="main row align-items-center justify-content-center">
            <div className="col-sm-12 col-md mb-4">
               <h2 className="uppercase">
                  <Trans>hello</Trans>
               </h2>
               <h1 className="uppercase"> {t('intro')} </h1>
               <h4 className="uppercase"> {t('titles')} </h4>
               <hr />
               <ButtonToolbar className="mt-4">
                  <Button className="mr-2 uppercase" onClick={() => goTo('contact')} size="lg" variant="primary">
                     {t('hire-me')}
                  </Button>
                  <a download href={i18next.language === 'es' ? CVSpanish : CVEnglish}>
                     <Button className="uppercase" size="lg" type="submit" variant="outline-primary">
                        {t('get-cv')}
                     </Button>
                  </a>
               </ButtonToolbar>
            </div>
            <div className="col-sm-12 col-md mb-4 row justify-content-center align-items-center">
               <img alt="me" src={programmer} width="60%" />
            </div>
         </section>
      </Element>
   );
}
