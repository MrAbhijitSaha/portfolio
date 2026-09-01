export type MobileHeaderPropsType = {
	routes: HeaderRouteOptionsType[];
};

export type DesktopHeaderPropsType = {
	routes: HeaderRouteOptionsType[];
};

export type HeaderRouteOptionsType = {
	id: string;
	routes: string;
	Name: string;
};

export type FooterSocialLinksType = {
	id: string;
	name: string;
	link: string;
};

export interface GeoLocationStateType {
	ip: string;
	region: string;
	country_name: string;
}

export type ZenQuoteType = {
	q: string; // quote
	a: string; // author
	h: string; // HTML formatted quote
};

export type ZenQuoteResponseType = ZenQuoteType[];

export type SkillsType = {
	id: number;
	skill: string;
	img: string;
};

export type ProjectCardType = {
	id: number;
	image: string;
	alt: string;
	name: string;
	gitlink: string;
	hostlink: string;
	// skills: SkillType[];
	description: string;
};
