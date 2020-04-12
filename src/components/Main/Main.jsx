import i18next from 'i18next';
import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import { Element, scroller } from 'react-scroll';
import CVIngles from '../../assets/CV_ingles.pdf';
import CV from '../../assets/CV.pdf';
import * as animationData from '../../assets/programming-animation.json';
import './main.scss';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

function goTo(link) {
	scroller.scrollTo(link, {
		duration: 500,
		smooth: true,
	});
}

export default function Main() {
	const { t } = useTranslation();
	console.log(i18next.language);
	return (
		<Element name="home">
			<section className="main row align-items-center justify-content-center">
				{/* <Parallax className="position-absolute" y={['-150px', '150px']} x={['-150px', '150px']}>
				<img src={image} alt="" width="300" />
			</Parallax> */}
				<div className="col-sm-12 col-md mb-4">
					<h2 className="uppercase">
						<Trans>hello</Trans>
					</h2>
					<h1 className="uppercase"> {t('intro')} </h1>
					<h4 className="uppercase"> {t('titles')} </h4>
					<hr />
					<ButtonToolbar className="mt-4">
						<Button className="mr-2 uppercase" onClick={() => goTo('contact')} size="lg" variant="primary">
							{t('hire-me')}
						</Button>
						<a download href={i18next.language === 'es' ? CV : CVIngles}>
							<Button className="uppercase" size="lg" type="submit" variant="outline-primary">
								{t('get-cv')}
							</Button>
						</a>
					</ButtonToolbar>
				</div>
				<div className="col-sm-12 col-md mb-4">
					<Lottie options={defaultOptions} width="100%" />
					{/* <Parallax className="position-absolute" y={['-60%', '-40%']}>
					<img src={image} width="100%" alt="" />
				</Parallax> */}
				</div>
				{/* <Terminal className="row">
						<Terminal></Terminal>
					</Terminal> */}
			</section>
		</Element>
	);
}
