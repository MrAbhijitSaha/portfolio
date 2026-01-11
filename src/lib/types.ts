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
