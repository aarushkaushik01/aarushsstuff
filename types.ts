
export interface Game {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  imageUrl: string;
  downloadUrl: string;
  tags: string[]; // Usually [Category, Platform]
  previews?: string[];
}
