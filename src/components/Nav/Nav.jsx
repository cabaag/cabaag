import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18next from 'i18next';
import React from 'react';
import { Button, Col, Dropdown, DropdownButton, Nav as NavB, Navbar, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

function goTo(link) {
   scroller.scrollTo(link, {
      duration: 500,
      smooth: true,
   });
}

const links = ['about', 'experience', 'skills', 'contact'];

export default function Nav() {
   const { t, i18n } = useTranslation();

   function changeLang(lang) {
      i18n.changeLanguage(lang);
   }

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
            <Row className="justify-content-end">
               <DropdownButton alignRight className="mr-2" id="dropdown-lang" title={t('lang')}>
                  <Dropdown.Item active={i18next.language === 'en'} eventKey="en" onSelect={changeLang}>
                     English
                  </Dropdown.Item>
                  <Dropdown.Item active={i18next.language === 'es'} eventKey="es" onSelect={changeLang}>
                     Español
                  </Dropdown.Item>
               </DropdownButton>
               <Button className="mr-2" href="mailto:caba9313@gmail.com" target="_blank" variant="outline-dark">
                  <FontAwesomeIcon icon={faEnvelope} />
               </Button>
               <Button className="mr-2" href="https://github.com/cabaag" target="_blank" variant="outline-dark">
                  <FontAwesomeIcon icon={faGithub} />
               </Button>
               <Button
                  className="mr-2"
                  href="https://www.linkedin.com/in/cabaag/"
                  target="_blank"
                  variant="outline-dark"
               >
                  <FontAwesomeIcon icon={faLinkedin} />
               </Button>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Row>
         </Col>
      </Navbar>
   );
}
