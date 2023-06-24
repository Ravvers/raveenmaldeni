import { GithubLink, HttpsLink } from "./HttpsLink";

type Phase = {
	phase:
		| "Planning"
		| "In Design"
		| "In Development"
		| "Released"
		| "Inactive";
	description: string;
};

export const planningPhase: Phase = {
	phase: "Planning",
	description: "Outlining project direction"
};

export const inDesignPhase: Phase = {
	phase: "In Design",
	description: "Defining scope and what is considered 'done'"
};

export const inDevelopmentPhase: Phase = {
	phase: "In Development",
	description: "Being worked on for release"
};

export const releasedPhase: Phase = {
	phase: "Released",
	description: "Live and supported for use"
};
export const inactivePhase: Phase = {
	phase: "Inactive",
	description: "Abandoned; not supported for use"
};

export type ProjectStatus =
	| typeof planningPhase
	| typeof inDesignPhase
	| typeof inDevelopmentPhase
	| typeof releasedPhase
	| typeof inactivePhase;

export type Project = {
	name: string;
	displayName: string;
	description: string;
	status: ProjectStatus;
	githubLink?: GithubLink;
	projectLink?: HttpsLink;
	tileImageSrc: string;
	tileBackgroundColor?: `#${string}`;
};
