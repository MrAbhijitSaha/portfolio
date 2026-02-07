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
	network: string;
	version: string;
	city: string;
	region: string;
	region_code: string;
	country: string;
	country_name: string;
	country_code: string;
	country_code_iso3: string;
	country_capital: string;
	country_tld: string;
	continent_code: string;
	in_eu: boolean;
	postal: string;
	latitude: number;
	longitude: number;
	timezone: string;
	utc_offset: string;
	country_calling_code: string;
	currency: string;
	currency_name: string;
	languages: string;
	country_area: number;
	country_population: number;
	asn: string;
	org: string;
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
