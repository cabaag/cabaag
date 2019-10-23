import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import * as animationData from '../../assets/open-book.json';
import skills from '../../data/skills.json';
import './Skills.scss';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};
const Skills = () => (
	<Element name="skills">
		<section>
			<div className="Skills">
				<div className="row mb-4">
					<div className="col-sm-12 col-md-6 offset-md-6 text-right">
						<h1> SKILLS </h1>
						<h3> ...AND STILL LEARNING </h3>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-6">
						{skills.map(skill => (
							<div key={skill.name} className="row mb-3">
								<div className="col-12">
									<ProgressBar min={0} max={100} now={skill.percentage} label={skill.name} animated striped />
								</div>
							</div>
						))}
					</div>
					<div className="col-sm-12 col-md-6">
						<Lottie options={defaultOptions} width="100%" />
					</div>
				</div>
			</div>
		</section>
	</Element>
);

export default Skills;
