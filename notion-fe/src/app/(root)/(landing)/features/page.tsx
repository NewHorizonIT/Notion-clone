"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import {
  CheckCircle2,
  FileText,
  FolderTree,
  Palette,
  Search,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background m-auto px-4 md:px-6">
      <Separator className="my-12" />

      {/* Main Features Grid */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tính năng chính
            </h2>
            <p className="text-muted-foreground text-lg">
              Công cụ toàn diện cho mọi nhu cầu làm việc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Rich Text Editor */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Trình soạn thảo đa năng</CardTitle>
                <CardDescription>
                  Editor mạnh mẽ với nhiều block types và markdown support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Hỗ trợ Markdown và shortcuts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Nhiều loại block (heading, list, code...)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Drag & drop để sắp xếp</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2: Workspace & Pages */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <FolderTree className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Workspace & Pages</CardTitle>
                <CardDescription>
                  Tổ chức nội dung theo cấu trúc phân cấp linh hoạt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Tạo workspace riêng biệt</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Pages lồng nhau không giới hạn
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Sidebar navigation trực quan
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 4: Search */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tìm kiếm thông minh</CardTitle>
                <CardDescription>
                  Tìm kiếm nhanh chóng mọi thứ bạn cần
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Tìm kiếm toàn bộ workspace</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Lọc theo nhiều tiêu chí</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Shortcuts để truy cập nhanh</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 5: Customization */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tùy chỉnh giao diện</CardTitle>
                <CardDescription>
                  Thiết kế workspace theo phong cách riêng
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Thêm icon và cover cho pages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Dark mode / Light mode</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Tùy chỉnh layout và spacing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
