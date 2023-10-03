export type PartnerLogoProps = {
  [props in 'logo' | 'name']: string;
};

export type PartnerProps = {
  [props in 'url']: string;
} & PartnerLogoProps;
