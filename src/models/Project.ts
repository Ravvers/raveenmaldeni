import { theme } from "../styles/colourPalette";
import { GithubLink, HttpsLink } from "./HttpsLink";

type Phase = {
	phase: "Planning" | "In Design" | "In Development" | "Active" | "Inactive";
	description: string;
	textColor: string;
};

export const planningPhase: Phase = {
	phase: "Planning",
	description: "Deciding project direction",
	textColor: theme.body.project.status.planning
};

export const inDesignPhase: Phase = {
	phase: "In Design",
	description: "Defining scope and completion criteria",
	textColor: theme.body.project.status.inDesign
};

export const inDevelopmentPhase: Phase = {
	phase: "In Development",
	description: "Being worked on for release",
	textColor: theme.body.project.status.inDevelopment
};

export const activePhase: Phase = {
	phase: "Active",
	description: "Released and supported for use",
	textColor: theme.body.project.status.active
};
export const inactivePhase: Phase = {
	phase: "Inactive",
	description: "Not supported for use",
	textColor: theme.body.project.status.inactive
};

export type ProjectStatus =
	| typeof planningPhase
	| typeof inDesignPhase
	| typeof inDevelopmentPhase
	| typeof activePhase
	| typeof inactivePhase;

export type Project = {
	name: string;
	displayName: string;
	description: string;
	status: ProjectStatus;
	githubLink?: GithubLink;
	projectLink?: HttpsLink;
	tileImageSrc: string;
	tileBackgroundColor?: string;
};
