import { PageLayout } from "@/shared/components/layout/PageLayout";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <PageLayout />
    </div>
  );
}
