import React from 'react';
import { OverlayTrigger, ProgressBar, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import learning from '../../assets/learning.png';
import skills from '../../data/skills.json';
import './Skills.scss';

export default function Skills({ odd }) {
   const { t } = useTranslation();
   return (
      <Element name="skills">
         <section>
            <div className="Skills">
               <div className="row mb-4">
                  <div className={`col-sm-12 col-md-6 ${odd ? ' offset-md-6 text-right ' : ''}`}>
                     <h1 className="uppercase"> {t('skills')} </h1>
                     <a
                        className="undecorate"
                        href="https://open.spotify.com/track/5W3cjX2J3tjhG8zb6u0qHn?si=I02_vds9RruCKWcFdHdx-A"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <h6> HARDER BETTER FASTER STRONGER </h6>
                     </a>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-12 col-md-7">
                     {skills.map((skill) => (
                        <div className="row mb-3" key={skill.name}>
                           <div className="col-12">
                              <OverlayTrigger
                                 overlay={<Tooltip id="tooltip-bottom">{skill.percentage}</Tooltip>}
                                 placement="bottom"
                              >
                                 <ProgressBar
                                    label={skill.name}
                                    max={100}
                                    min={0}
                                    now={skill.percentage}
                                    style={{
                                       cursor: 'pointer',
                                       height: '1.2rem',
                                       fontSize: '1rem',
                                       fontWeight: 500,
                                       letterSpacing: 1,
                                    }}
                                 />
                              </OverlayTrigger>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="col-sm-12 col-md-5 row align-content-center">
                     <div className="row justify-content-center align-items-center">
                        <img alt="learnign"
                           className="w-auto"
                           src={learning}
                           width="80%" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Element>
   );
}
