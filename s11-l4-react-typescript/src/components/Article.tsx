export interface Article {
  id: number;
  title: string;
  authors: { name: string }[];
  published_at: string;
  image_url: string;
  summary: string;
}
