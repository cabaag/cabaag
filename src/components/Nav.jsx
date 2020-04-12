import React from 'react';
import { Nav as NavB, Navbar, Button, Dropdown, DropdownButton, Col, Row } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function goTo(link) {
	scroller.scrollTo(link, {
		duration: 500,
		smooth: true,
	});
}

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
					<NavB.Link className="uppercase" onClick={() => goTo('about')}>
						{t('about')}
					</NavB.Link>
					<NavB.Link className="uppercase" onClick={() => goTo('experience')}>
						{t('experience')}
					</NavB.Link>
					<NavB.Link className="uppercase" onClick={() => goTo('skills')}>
						{t('skills')}
					</NavB.Link>
					<NavB.Link className="uppercase" onClick={() => goTo('contact')}>
						{t('contact')}
					</NavB.Link>
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
