/* eslint-disable global-require */
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import techsData from '../../data/techs.json';
import jobsData from '../../data/jobs.json';
import './Experience.scss';

const techsImg = {
   android: require('../../assets/techs/android.svg').default,
   angular: require('../../assets/techs/angular.svg').default,
   apple: require('../../assets/techs/apple.svg').default,
   bootstrap: require('../../assets/techs/bootstrap.svg').default,
   express: require('../../assets/techs/express.png').default,
   facebook: require('../../assets/techs/facebook.svg').default,
   firebase: require('../../assets/techs/firebase.svg').default,
   googleMaps: require('../../assets/techs/googleMaps.svg').default,
   ionic: require('../../assets/techs/ionic.svg').default,
   javascript: require('../../assets/techs/javascript.svg').default,
   jest: require('../../assets/techs/jest.png').default,
   jquery: require('../../assets/techs/jquery.svg').default,
   laravel: require('../../assets/techs/laravel.svg').default,
   'material-ui': require('../../assets/techs/material-ui.svg').default,
   mongodb: require('../../assets/techs/mongodb.svg').default,
   nodejs: require('../../assets/techs/nodejs.svg').default,
   passport: require('../../assets/techs/passport.svg').default,
   paypal: require('../../assets/techs/paypal.svg').default,
   prestashop: require('../../assets/techs/prestashop.svg').default,
   python: require('../../assets/techs/python.svg').default,
   react: require('../../assets/techs/react.svg').default,
   redux: require('../../assets/techs/redux.svg').default,
   reactNative: require('../../assets/techs/reactNative.svg').default,
   reactivex: require('../../assets/techs/reactivex.svg').default,
   sass: require('../../assets/techs/sass.svg').default,
   'socket-io': require('../../assets/techs/socket-io.svg').default,
   typescript: require('../../assets/techs/typescript.svg').default,
   vue: require('../../assets/techs/vue.svg').default,
   webpack: require('../../assets/techs/webpack.svg').default,
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
                                       className="mx-1 tech mb-4"
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
