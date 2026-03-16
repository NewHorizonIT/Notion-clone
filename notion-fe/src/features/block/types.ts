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

export enum BlockType {
  PARAGRAPH = "paragraph",
  HEADING = "heading",
  BULLET_LIST = "bulletedListItem",
  NUMBERED_LIST = "numberedListItem",
  TODO = "checkListItem",
  CODE = "codeBlock",
  IMAGE = "image",
  TABLE = "table",
  QUOTE = "quote",
  DIVIDER = "divider",
  VIDEO = "video",
  AUDIO = "audio",
  FILE = "file",
}

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
