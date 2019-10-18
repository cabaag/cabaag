import React from 'react';
import { Element } from 'react-scroll';
import './About.scss';

const About = () => (
	<Element name="about">
		<section className="About">
			<div className="front row">
				<div className="col" />
				<div className="col">
					<h1> ABOUT ME </h1>
					<h4> MEET ME </h4>
					<p>
						I&apos;ve been developing for the Internet for 6 years. I&apos;ve designed, coded, managed and
						developed in many platforms, for many companies, with many programs and programing languages. I’m
						proficient with: HTML, CSS, PHP, Javascript, Ajax, Express, and Node.js, GIT among other techs.
					</p>
					<p>
						I can build a custom site from a framework and create complex views; I’ve also built shopping carts
						with Prestashop. I&apos;ve been catching up on Mobile Software Developing and Facebook Apps and look
						forward to developing more projects with these technologies. I love the MEAN combo.
					</p>
				</div>
			</div>
		</section>
	</Element>
);

export default About;
