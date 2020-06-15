import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import envelop from '../../assets/envelop.png';
import './Contact.scss';

export default function Contact({ odd }) {
   const { t } = useTranslation();
   return (
      <Element name="contact">
         <section>
            <div className="Contact mb-5">
               <div className="row">
                  <div className={`col-sm-12 col-md-6 ${odd ? ' offset-md-6 text-right ' : ''}`}>
                     <h1 className="uppercase"> {t('contact')} </h1>
                     <a
                        className="undecorate"
                        href="https://open.spotify.com/track/0S5otf3yhH2NIozxJPJTeV?si=82k3tl8CSaKTtqsZZdRCNw"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <h6> LET&apos;S GET RIDICULOUS </h6>
                     </a>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-12 col-md-6 row justify-content-center align-content-center flex-column">
                     {/* <p>If you have a great project, I&apos;ll make it better</p> */}
                     <img alt="envelop" src={envelop} width="60%" />
                  </div>
                  <div className="col-sm-12 col-md-6">
                     <Form>
                        <Form.Group controlId="name">
                           <Form.Label> {t('name')}</Form.Label>
                           <Form.Control placeholder={t('enter-name')} type="text" />
                        </Form.Group>

                        <Form.Group controlId="email">
                           <Form.Label>{t('email')}</Form.Label>
                           <Form.Control placeholder={t('spam')} type="email" />
                        </Form.Group>

                        <Form.Group controlId="message">
                           <Form.Label>{t('message')}</Form.Label>
                           <Form.Control as="textarea" placeholder={t('concerns')} rows="5" />
                        </Form.Group>

                        <div className="row justify-content-end">
                           <Button type="submit" variant="primary">
                              {t('send')}
                           </Button>
                        </div>
                     </Form>
                  </div>
               </div>
            </div>
         </section>
      </Element>
   );
}
