import {
	Project,
	inDesignPhase,
	inDevelopmentPhase,
	inactivePhase,
	planningPhase
} from "../../models/Project";

export const tileImageBasePath = "/assets/img/";

const theorycrafter: Project = {
	name: "theoryCrafter",
	displayName: "Theory Crafter",
	description:
		"React Native app for theorising potential builds in the popular game League of Legends",
	status: inactivePhase,
	tileImageSrc: `${tileImageBasePath}theorycrafter.png`,
	githubLink: "https://github.com/Ravvers/theorycrafter"
};

const paperguin: Project = {
	name: "paperguin",
	displayName: "paperguin",
	description: "Brand that will represent my future projects",
	status: planningPhase,
	tileImageSrc: `${tileImageBasePath}paperguin.svg`,
	tileBackgroundColor: "#ACF1FB"
};

const randomforme: Project = {
	name: "randomforme",
	displayName: "randomfor.me",
	description: "Web app for random number generation and sorting",
	status: inDevelopmentPhase,
	tileImageSrc: `${tileImageBasePath}randomforme.jpg`
};

const listApp: Project = {
	name: "listApp",
	displayName: "List App",
	description:
		"Collaborative project for a list-taking mobile app that provides the user more control for customisation",
	status: inDesignPhase,
	tileImageSrc: `${tileImageBasePath}listApp.jpg`
};

const mobileGame: Project = {
	name: "mobileGame",
	displayName: "Mobile Game",
	description:
		"Having played video-games for many years, I'm looking to share my own",
	status: planningPhase,
	tileImageSrc: `${tileImageBasePath}mobileGame.jpg`
};

export const projectData: Project[] = [
	randomforme,
	listApp,
	paperguin,
	mobileGame,
	theorycrafter
];
