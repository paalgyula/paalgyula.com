interface IPortfolioLink {
  url: string;
  text: string;
}

export interface IPortfolioItem {
  category: 'frontend' | 'backend' | 'appz' | 'other';
  image: string;
  imgAlt?: string;
  name: string;
  meta: string;
  link?: IPortfolioLink;
}

