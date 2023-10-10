export interface BaseProps {
  className?: string;
}

export interface ILink {
  children: string;
  href?: string;
}

export interface IImage {
  alt: string;
  src: string;
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

export interface ITicket {
  event: {
    author: {
      organizerName: string;
    };
    date: string;
    title: string;
  };
  isPaid: boolean;
}
