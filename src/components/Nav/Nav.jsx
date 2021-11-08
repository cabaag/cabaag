import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18next from 'i18next';
import React, { useCallback } from 'react';
import { Button, Col, Dropdown, Nav as NavB, Navbar, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

function goTo(link) {
   scroller.scrollTo(link, {
      duration: 400,
      smooth: true,
   });
}

const links = ['about', 'experience', 'skills', 'contact'];

const socialNetworks = [
   {
      icon: faEnvelope,
      href: 'mailto:caba9313@gmail.com',
   },
   {
      icon: faGithub,
      href: 'https://github.com/cabaag',
   },
   {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/cabaag/',
   },
];

export default function Nav() {
   const { t, i18n } = useTranslation();

   const changeLang = useCallback((lang) => {
      i18n.changeLanguage(lang);
   }, []);

   return (
      <Navbar bg="light" expand="lg" fixed="top">
         <Navbar.Brand>
            <NavB.Link onClick={() => goTo('home')}>CARLOS</NavB.Link>
         </Navbar.Brand>

         <Navbar.Collapse id="basic-navbar-nav">
            <NavB className="mr-auto">
               {links.map((link) => (
                  <NavB.Link className="uppercase" id={link} key={link} onClick={() => goTo(link)}>
                     {t(link)}
                  </NavB.Link>
               ))}
            </NavB>
         </Navbar.Collapse>
         <Col>
            <Row className="justify-content-end" xs="auto">
               <Col>
                  <Dropdown className="mr-2" id="dropdown-lang">
                     <Dropdown.Toggle>{t('lang')}</Dropdown.Toggle>
                     <Dropdown.Menu>
                        <Dropdown.Item active={i18next.language === 'en'} eventKey="en" onSelect={changeLang}>
                           English
                        </Dropdown.Item>
                        <Dropdown.Item active={i18next.language === 'es'} eventKey="es" onSelect={changeLang}>
                           Español
                        </Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </Col>
               {socialNetworks.map((net) => (
                  <Col key={net.href}>
                     <Button href={net.href} target="_blank" variant="outline-dark">
                        <FontAwesomeIcon icon={net.icon} />
                     </Button>
                  </Col>
               ))}
               <Col>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
               </Col>
            </Row>
         </Col>
      </Navbar>
   );
}
