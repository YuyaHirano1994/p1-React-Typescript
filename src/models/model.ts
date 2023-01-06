export interface postsModel {
  id: number;
  title: string;
  description: string;
  published_timestamp: string;
  social_image: string;
  canonical_url: string;
}

export interface timelineModel {
  title: string;
  cardTitle: string;
  url: string;
  cardSubtitle: string;
  cardDetailedText: string;
}
