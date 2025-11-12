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
  BookOpen,
  CheckCircle2,
  FileText,
  FolderTree,
  Globe,
  Image,
  Layout,
  Lock,
  Palette,
  Search,
  Share2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
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

            {/* Feature 3: Real-time Collaboration */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Cộng tác thời gian thực</CardTitle>
                <CardDescription>
                  Làm việc cùng nhau mọi lúc mọi nơi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Mời thành viên vào workspace
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Chia sẻ và phân quyền</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Theo dõi hoạt động của team</span>
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

            {/* Feature 6: Templates */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Templates sẵn có</CardTitle>
                <CardDescription>
                  Bắt đầu nhanh với các mẫu có sẵn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Meeting notes template</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Project planning template</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Tạo template riêng</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Additional Features */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Và nhiều tính năng khác
            </h2>
            <p className="text-muted-foreground text-lg">
              Chúng tôi luôn cập nhật và phát triển thêm nhiều tính năng mới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Image className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Media Upload</h3>
              <p className="text-sm text-muted-foreground">
                Tải lên và quản lý hình ảnh, video
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Public Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Chia sẻ công khai với mọi người
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Bảo mật</h3>
              <p className="text-sm text-muted-foreground">
                Dữ liệu được mã hóa và bảo mật
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Nhanh chóng</h3>
              <p className="text-sm text-muted-foreground">
                Hiệu suất cao, tải nhanh
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Knowledge Base</h3>
              <p className="text-sm text-muted-foreground">
                Xây dựng wiki cho công ty
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Multi-language</h3>
              <p className="text-sm text-muted-foreground">
                Hỗ trợ nhiều ngôn ngữ
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Export</h3>
              <p className="text-sm text-muted-foreground">
                Xuất ra PDF, Markdown, HTML
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">AI Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Trợ lý AI giúp viết nhanh hơn
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
