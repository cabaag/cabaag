import React from 'react';
import { Card } from 'react-bootstrap';
import { Element } from 'react-scroll';
import techsData from '../../data/techs.json';
import worksData from '../../data/works.json';
import './Experience.scss';

const techsImg = require.context('../../assets/techs', true);

const techs = techsData;
let works = worksData;
works = works.map(work => {
	const t = [];
	work.techs.forEach(tech => t.push(techs.find(te => te.name === tech)));
	return { ...work, techs: t };
});

const Experience = () => (
	<Element name="experience">
		<section className="Experience">
			<div className="row">
				<div className="col">
					<h1> EXPERIENCE </h1>
					<h4> WHERE I&apos;VE WORKED </h4>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-10 col-lg-8">
					{works.map(work => (
						<Card key={work.id} className="text-center my-4" border="primary">
							<Card.Header>{work.company}</Card.Header>
							<Card.Body>
								{work.position ? <Card.Title> {work.position} </Card.Title> : null}
								<Card.Text>{work.description}</Card.Text>
								<Card.Title> Techs </Card.Title>
								<div className="row justify-content-center">
									{work.techs.map(tech =>
										tech ? (
											<a
												key={tech.name}
												className="mr-4 tech"
												target="_blank"
												rel="noopener noreferrer"
												href={tech.website}
											>
												<img src={techsImg(`./${tech.icon}`)} alt={tech.name} width={30} />
											</a>
										) : null,
									)}
								</div>
							</Card.Body>
							<Card.Footer>
								{work.date.start} -{work.date.end}
							</Card.Footer>
						</Card>
					))}
				</div>
			</div>
		</section>
	</Element>
);

export default Experience;
