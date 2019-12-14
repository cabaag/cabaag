import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import projects from '../../data/projects.json';

export default function Projects({ odd }) {
	const { t } = useTranslation();
	return (
		<Element name="projects">
			<section>
				<div className="Projects">
					<div className="row mb-4">
						<div className={`col-sm-12 col-md-6 ${odd ? ' offset-md-6 text-right ' : ''}`}>
							<h1 className="uppercase"> {t('projects')} </h1>
							<a
								className="undecorate"
								href="https://open.spotify.com/track/1jDJFeK9x3OZboIAHsY9k2?si=WGED9GVGRdyJMLA74yfuTQ"
								rel="noopener noreferrer"
								target="_blank"
							>
								<h6> I&apos;M STILL STANDING </h6>{' '}
							</a>
						</div>
					</div>
					<div className="row">
						{projects.map(project => (
							<div className="col-sm-4 mb-3" key={project.name}>
								<Card border="primary">
									<Card.Header>
										<Row className="justify-content-between align-items-center" noGutters>
											<Card.Title style={{ margin: 0 }}>{project.name}</Card.Title>
											<Button className="mr-2" href={project.web} target="_blank" variant="outline-dark">
												<FontAwesomeIcon icon={faGlobe} />
											</Button>
										</Row>
									</Card.Header>
									<Card.Body>
										<Card.Text>{project.description}</Card.Text>
									</Card.Body>
								</Card>
							</div>
						))}
					</div>
				</div>
			</section>
		</Element>
	);
}
