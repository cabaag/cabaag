import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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

export default function Experience() {
	const { t } = useTranslation();
	return (
		<Element name="experience">
			<section className="Experience">
				<div className="row">
					<div className="col">
						<h1 className="uppercase"> {t('experience')} </h1>
						<h6> WHAT I&apos;VE DONE </h6>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-12 col-md-10 col-lg-8">
						{works.map(work => (
							<Card border="primary" className="text-center my-4" key={work.id}>
								<Card.Header>{work.company}</Card.Header>
								<Card.Body>
									{work.position ? <Card.Title> {work.position} </Card.Title> : null}
									<Card.Text>{work.description}</Card.Text>
									<Card.Title> {t('techs')} </Card.Title>
									<div className="row justify-content-center">
										{work.techs.map(tech =>
											tech ? (
												<a
													className="mr-4 tech"
													href={tech.website}
													key={tech.name}
													rel="noopener noreferrer"
													target="_blank"
												>
													<img alt={tech.name} src={techsImg(`./${tech.icon}`)} width={30} />
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
}
