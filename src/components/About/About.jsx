import React from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import * as animationData from '../../assets/html.json';
import './About.scss';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

export default function About() {
	const { t } = useTranslation();
	return (
		<Element name="about">
			<section className="About mb-4">
				<div className="row">
					<div className="col-sm-12 offset-md-6 col-md-6 text-right">
						<h1 className="uppercase"> {t('about')} </h1>
						<h6> ME, MYSELF &amp; I </h6>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-6 row align-content-center">
						<Lottie height={200} options={defaultOptions} width="100%" />
					</div>
					<div
						className="col-sm-12 col-md-6"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: t('meet-me-description'),
						}}
					/>
				</div>
			</section>
		</Element>
	);
}
