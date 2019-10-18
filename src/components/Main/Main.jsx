import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Element } from 'react-scroll';
import image from '../../assets/1.png';
import './main.scss';

const Main = () => (
	<Element name="home">
		<section className="main">
			<div className="front row align-items-center justify-content-center">
				<div className="col-sm-12 col-md">
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
				<div className="col-sm-12 col-md">
					<img src={image} width="100%" alt="" />
				</div>
			</div>
			{/* <div className="row">
						<Terminal></Terminal>
					</div> */}
		</section>
	</Element>
);
export default Main;
