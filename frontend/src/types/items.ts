export interface IEventCard {
  image: {
    blurDataURL: string;
    fileName: string;
    url: string;
  };
  date: string;
  title: string;
  slug: string;
  author: {
    organizerName: string;
  }
}
