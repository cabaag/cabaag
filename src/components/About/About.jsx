import React from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import about from '../../assets/about.png';
import './About.scss';

export default function About({ odd }) {
   const { t } = useTranslation();
   return (
      <Element name="about">
         <section className="About mb-4">
            <div className="row">
               <div className={`col-sm-12 col-md-6 ${odd ? ' offset-md-6 text-right ' : ''}`}>
                  <h1 className="uppercase"> {t('about')} </h1>
                  <a
                     className="undecorate"
                     href="https://open.spotify.com/track/40YcuQysJ0KlGQTeGUosTC?si=G2HZwH8FROmGjp_G3-gZ9A"
                     rel="noopener noreferrer"
                     target="_blank"
                  >
                     <h6> ME, MYSELF &amp; I </h6>{' '}
                  </a>
               </div>
            </div>
            <div className="row align-content-center align-items-center">
               <div className="col-sm-12 col-md-6 row justify-content-center">
                  <img alt="learnign" height="350px" src={about} />
               </div>
               <div
                  className="col-sm-12 col-md-6"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                     __html: t('meet-me-description'),
                  }}
               />
            </div>
         </section>
      </Element>
   );
}
