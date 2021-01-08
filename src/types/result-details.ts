export interface IResultsDetailProps {
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
  id: string;
}

export interface IResultProps {
  name: string | null;
  photos: Array<string> | null;
}

export enum RESULTS_PARAMS {
  id = 'id',
}
