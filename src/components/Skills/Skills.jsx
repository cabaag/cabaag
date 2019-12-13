import React from 'react';
import { ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
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

export default function Skills() {
	const { t } = useTranslation();
	return (
		<Element name="skills">
			<section>
				<div className="Skills">
					<div className="row mb-4">
						<div className="col-sm-12 col-md-6 offset-md-6 text-right">
							<h1 className="uppercase"> {t('skills')} </h1>
							<h6> ...AND STILL LEARNING </h6>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-7">
							{skills.map(skill => (
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
							<Lottie height={200} options={defaultOptions} width="100%" />
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
}
