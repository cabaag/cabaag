import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import * as animationData from '../../assets/programming-animation.json';
// import { Parallax } from 'react-scroll-parallax';
// import image from '../../assets/1.png';
import './main.scss';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const Main = () => (
	<Element name="home">
		<section className="main row align-items-center justify-content-center">
			{/* <Parallax className="position-absolute" y={['-150px', '150px']} x={['-150px', '150px']}>
				<img src={image} alt="" width="300" />
			</Parallax> */}
			<div className="col-sm-12 col-md mb-4">
				<h2> HELLO </h2>
				<h1> I&apos;M CARLOS BARRANCO </h1>
				<h4> FRONT END ENGINEER </h4>
				<ButtonToolbar className="mt-4">
					<Button variant="primary" className="mr-2" size="lg">
						HIRE ME
					</Button>
					<Button variant="outline-primary" size="lg">
						GET CV
					</Button>
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
export default Main;
