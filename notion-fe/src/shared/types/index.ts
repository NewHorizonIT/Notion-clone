export interface Page {
  id: string;
  title: string;
  thumbnailUrl?: string;
  icon?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
