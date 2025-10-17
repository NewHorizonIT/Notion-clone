import { PageLayout } from "@/shared/components/layout/PageLayout";
import { Sidebar } from "@/shared/components/layout/Sidebar";
import { Topbar } from "@/shared/components/layout/Topbar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <PageLayout />
      </div>
    </div>
  );
}
