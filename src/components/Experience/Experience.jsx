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

export default function Experience({ odd }) {
	const { t, i18n } = useTranslation();
	return (
		<Element name="experience">
			<section className="Experience">
				<div className="row">
					<div className={`col-sm-12 col-md-6 ${odd ? ' offset-md-6 text-right ' : ''}`}>
						<h1 className="uppercase"> {t('experience')} </h1>
						<h6> </h6>
						<a
							className="undecorate"
							href="https://open.spotify.com/track/18lR4BzEs7e3qzc0KVkTpU?si=8_og5o2ZQP6ZtGrM_URLEw"
							rel="noopener noreferrer"
							target="_blank"
						>
							<h6> WHAT I&apos;VE DONE </h6>
						</a>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-12 col-md-10 col-lg-8">
						{works.map(work => (
							<Card border="primary" className="text-center my-4" key={work.id}>
								<Card.Header>
									<Card.Title className="m-0">{work.company}</Card.Title>
								</Card.Header>
								<Card.Body>
									<Card.Text>
										<b>{work.position}</b>
										<p>{work.description[i18n.language]}</p>
										<b> {t('techs')} </b>
									</Card.Text>
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
