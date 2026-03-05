export interface Block {
  id: string;
  pageId: string;
  parentId: string | null;
  type: string;
  content: Record<string, unknown> | null;
  orderIndex: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  children?: Block[];
}

export type BlockType =
  | "paragraph"
  | "heading"
  | "bulletedListItem"
  | "numberedListItem"
  | "checkListItem"
  | "codeBlock"
  | "image"
  | "table"
  | "quote"
  | "divider";

export interface CreateBlockData {
  pageId: string;
  parentId?: string | null;
  type: BlockType;
  content?: Record<string, unknown>;
  orderIndex: number;
}

export interface UpdateBlockData {
  type?: BlockType;
  content?: Record<string, unknown>;
  orderIndex?: number;
  parentId?: string | null;
}

export interface BlockResponse {
  statusCode: number;
  message: string;
  data: Block;
}

export interface BlocksResponse {
  statusCode: number;
  message: string;
  data: Block[];
}
