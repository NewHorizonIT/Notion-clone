export interface Workspace {
  id: string;
  name: string;
  ownerId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
