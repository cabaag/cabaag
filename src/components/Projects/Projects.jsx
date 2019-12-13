import React from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import * as animationData from '../../assets/open-book.json';
import projects from '../../data/projects.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

export default function Projects() {
	const { t } = useTranslation();
	return (
		<Element name="projects">
			<section>
				<div className="Projects">
					<div className="row mb-4">
						<div className="col-sm-12 col-md-6 offset-md-6 text-right">
							<h1 className="uppercase"> {t('projects')} </h1>
							<h6> ...AND STILL LEARNING </h6>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-7">
							{projects.map(project => (
								<div className="row mb-3" key={project.name}>
									<div className="col-12" />
								</div>
							))}
						</div>
						<div className="col-sm-12 col-md-5 row align-content-center">
							<Lottie height={200} options={defaultOptions} width="100%" />
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
}
