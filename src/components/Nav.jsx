import React, { Component } from 'react';
import { Nav as NavB, Navbar } from 'react-bootstrap';
import { scroller } from 'react-scroll';

export default class Nav extends Component {
	goTo(link) {
		scroller.scrollTo(link, {
			duration: 500,
			smooth: true,
		});
	}

	render() {
		return (
			<Navbar bg="light" expand="lg" fixed="top">
				<Navbar.Brand>
					<NavB.Link onClick={() => this.goTo('home')}>CARLOS</NavB.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<NavB className="mr-auto">
						<NavB.Link onClick={() => this.goTo('about')}>ABOUT</NavB.Link>
						<NavB.Link onClick={() => this.goTo('experience')}>EXPERIENCE</NavB.Link>
						<NavB.Link onClick={() => this.goTo('skills')}>SKILLS</NavB.Link>
						<NavB.Link onClick={() => this.goTo('contact')}>CONTACT</NavB.Link>
					</NavB>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
