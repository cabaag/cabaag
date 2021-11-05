/* eslint-disable global-require */
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import techsData from '../../data/techs.json';
import jobsData from '../../data/jobs.json';
import './Experience.scss';

const techsImg = {
   android: require('../../assets/techs/android.svg'),
   angular: require('../../assets/techs/angular.svg'),
   apple: require('../../assets/techs/apple.svg'),
   bootstrap: require('../../assets/techs/bootstrap.svg'),
   express: require('../../assets/techs/express.png'),
   facebook: require('../../assets/techs/facebook.svg'),
   firebase: require('../../assets/techs/firebase.svg'),
   googleMaps: require('../../assets/techs/googleMaps.svg'),
   ionic: require('../../assets/techs/ionic.svg'),
   javascript: require('../../assets/techs/javascript.svg'),
   jest: require('../../assets/techs/jest.png'),
   jquery: require('../../assets/techs/jquery.svg'),
   laravel: require('../../assets/techs/laravel.svg'),
   'material-ui': require('../../assets/techs/material-ui.svg'),
   mongodb: require('../../assets/techs/mongodb.svg'),
   nodejs: require('../../assets/techs/nodejs.svg'),
   passport: require('../../assets/techs/passport.svg'),
   paypal: require('../../assets/techs/paypal.svg'),
   prestashop: require('../../assets/techs/prestashop.svg'),
   python: require('../../assets/techs/python.svg'),
   react: require('../../assets/techs/react.svg'),
   redux: require('../../assets/techs/redux.svg'),
   reactNative: require('../../assets/techs/reactNative.svg'),
   reactivex: require('../../assets/techs/reactivex.svg'),
   sass: require('../../assets/techs/sass.svg'),
   'socket-io': require('../../assets/techs/socket-io.svg'),
   typescript: require('../../assets/techs/typescript.svg'),
   vue: require('../../assets/techs/vue.svg'),
   webpack: require('../../assets/techs/webpack.svg'),
};

const techs = techsData;
let jobs = jobsData;
jobs = jobs.map(job => {
   const t = [];
   job.techs.forEach(tech => t.push(techs.find(te => te.name === tech)));
   return { ...job, techs: t };
});

export default function Experience({ odd }) {
   const { t, i18n } = useTranslation();
   return (
      <Element name="experience">
         <section className="Experience">
            <div className="row">
               <div className={`col-sm-12 col-md-6 ${odd ? ' offset-md-6 text-right ' : ''}`}>
                  <h1 className="uppercase"> {t('experience')} </h1>
                  <h6> </h6>
                  <a
                     className="undecorate"
                     href="https://open.spotify.com/track/18lR4BzEs7e3qzc0KVkTpU?si=8_og5o2ZQP6ZtGrM_URLEw"
                     rel="noopener noreferrer"
                     target="_blank"
                  >
                     <h6> WHAT I&apos;VE DONE </h6>
                  </a>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-sm-12 col-md-10 col-lg-8">
                  {jobs.map(work => (
                     <Card border="primary" className="text-center my-4" key={work.id}>
                        <Card.Header>
                           <Card.Title className="m-0">{work.company}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                           <Card.Text>
                              <b>{work.position}</b>
                           </Card.Text>
                           <Card.Text>{work.description[i18n.language]}</Card.Text>
                           <Card.Text>
                              <b> {t('techs')} </b>
                           </Card.Text>
                           <div className="row justify-content-center">
                              {work.techs.map(tech =>
                                 tech ? (
                                    <a
                                       className="mr-4 tech mb-4"
                                       href={tech.website}
                                       key={tech.name}
                                       rel="noopener noreferrer"
                                       style={{
                                          textDecoration: 'none',
                                          fontWeight: 'bold',
                                          fontSize: 28,
                                       }}
                                       target="_blank"
                                    >
                                       {tech.icon ? (
                                          <img alt={tech.name} height="100%" src={techsImg[tech.icon]} width={30} />
                                       ) : (
                                          <span>{tech.name[0]}</span>
                                       )}
                                    </a>
                                 ) : null,
                              )}
                           </div>
                        </Card.Body>
                        <Card.Footer>
                           {work.date.start} - {work.date.end}
                        </Card.Footer>
                     </Card>
                  ))}
               </div>
            </div>
         </section>
      </Element>
   );
}
