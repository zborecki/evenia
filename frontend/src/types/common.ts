export interface BaseProps {
  className?: string;
}

export interface ILink {
  children: string;
  href?: string;
}

export interface IPartner {
  companyName: string;
  logo: {
    url: string;
  }
  url: string;
}

export interface IProtectedLink extends ILink {
  isProtected?: boolean;
}