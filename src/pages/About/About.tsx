import React from "react";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { HighlightText } from "../../components/HighlightText/HighlightText";
import { tileImageBasePath } from "../../components/Project/projectData";

const getYearsFromToday = (pastYear: number): number => {
	const dateToday = new Date().getFullYear();
	return dateToday - pastYear;
};

const aderantStartDate = 2021;

export const About = () => {
	return (
		<>
			<PageTitle>
				<h1>Hi, I'm Raveen.</h1>
				<h1>
					I like <HighlightText>software</HighlightText> and{" "}
					<HighlightText>milkshakes</HighlightText>.
				</h1>
			</PageTitle>
			<div id="about-page-content">
				<div style={{ textAlign: "center" }}>
					<img
						id="about-page-raveen-face"
						src={`${tileImageBasePath}raveenFace.svg`}
						alt="Raveen smiling"
					/>
				</div>

				<p>
					I'm a developer currently working at{" "}
					<HighlightText>Aderant</HighlightText> in{" "}
					<HighlightText>New Zealand</HighlightText>, making software
					for law firms for the past{" "}
					{getYearsFromToday(aderantStartDate)} years.
				</p>
				<p>
					In my spare time I like to work on projects that are shared
					here. The purpose of these projects are to gain exposure to
					a wide variety of engineering and design problems throughout
					the development process so that I can{" "}
					<HighlightText>learn</HighlightText> about all aspects of
					project development. In addition to this, I want to be
					involved in creating something that makes a{" "}
					<HighlightText>difference</HighlightText> in others' lives.
				</p>
				<p>
					One of my main goals is to design and create my own
					video-game as they have been a large part of my life. This
					has finally given me the confidence to explore art and
					drawing, so I'll be sharing some of that here too!
				</p>
				<p>
					When I'm not coding you might find me playing competitive
					video games, playing chess, jamming on my guitar and
					singing, or ice skating at my local rink.
				</p>
			</div>
		</>
	);
};
