// Re-export Page type from features for backward compatibility
export type { Page } from "@/features/page/types";

// Legacy Page interface (for components still using old structure)
export interface LegacyPage {
  id: string;
  title: string;
  thumbnailUrl?: string;
  icon?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  children?: LegacyPage[];
}
