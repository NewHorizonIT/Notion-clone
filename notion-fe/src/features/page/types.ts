export interface Page {
  id: string;
  title: string | null;
  description: string | null;
  userId: string;
  workspaceId: string;
  icon?: string | null;
  coverUrl?: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  children?: Page[];
}

export interface CreatePageData {
  title?: string;
  description?: string;
  workspaceId: string;
}

export interface UpdatePageData {
  title?: string;
  description?: string;
}

export interface PageResponse {
  statusCode: number;
  message: string;
  data: Page;
}

export interface PagesResponse {
  statusCode: number;
  message: string;
  data: Page[];
}
