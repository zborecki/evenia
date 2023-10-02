export type EventCardContentProps = {
  [key in 'author' | 'date' | 'slug' | 'title']: string;
};

export type EventCardCoverProps = {
  [key in 'alt' | 'blurDataURL' | 'slug' | 'src']: string;
};
