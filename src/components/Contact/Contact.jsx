/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './Contact.scss';

export default class Contact extends Component {
	render() {
		return (
			<Element name="contact">
				<section>
					<div className="Contact">
						<div className="row">
							<div className="col-sm-12 col-md-6">
								<h1> CONTACT </h1>
								<h4> LET&apos;S MEET US </h4>
								<div className="row">If you have a project</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-6 offset-md-6">
								<Form>
									<Form.Group controlId="name">
										<Form.Label> Name</Form.Label>
										<Form.Control type="text" placeholder="Enter name " />
									</Form.Group>

									<Form.Group controlId="email">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />
									</Form.Group>

									<Form.Group controlId="message">
										<Form.Label>Message</Form.Label>
										<Form.Control placeholder="Tell me your concerns" />
									</Form.Group>

									<Button variant="primary" type="submit">
										Send
									</Button>
								</Form>
							</div>
						</div>
					</div>
				</section>
			</Element>
		);
	}
}
