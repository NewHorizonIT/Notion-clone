import { PageLayout } from "@/shared/components/layout/PageLayout";
import type { Page } from "@/shared/types";

const initialPages: Page[] = [
  {
    id: "1",
    title: "Getting Started",
    children: [
      { id: "1-1", title: "Welcome" },
      {
        id: "1-2",
        title: "Quick Start",
        children: [
          { id: "1-2-1", title: "Installation" },
          {
            id: "1-2-2",
            title: "Usage",
            children: [
              { id: "1-2-2-1", title: "Basic Features" },
              { id: "1-2-2-2", title: "Advanced Features" },
            ],
          },
        ],
      },
    ],
  },
  { id: "2", title: "Project Ideas" },
  { id: "3", title: "Meeting Notes" },
  {
    id: "4",
    title: "Resources",
    children: [
      { id: "4-1", title: "Documentation" },
      { id: "4-2", title: "Tutorials" },
    ],
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Example call api
  const page: Page | undefined = initialPages.find((page) => page.id === id);

  if (!page) {
    throw new Error("Page not found");
  }

  return (
    <div>
      <PageLayout page={page!} />
    </div>
  );
}
