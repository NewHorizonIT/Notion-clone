"use client";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ArrowRight, BookOpen, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Users,
    title: "Cộng tác nhóm",
    description: "Làm việc cùng nhau theo thời gian thực",
  },
  {
    icon: BookOpen,
    title: "Tài liệu Wiki",
    description: "Tạo và quản lý tài liệu, ghi chú một cách dễ dàng",
  },
  {
    icon: Sparkles,
    title: "Tùy chỉnh linh hoạt",
    description: "Thiết kế workspace theo phong cách riêng của bạn",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium animate-fade-in"
          >
            <Sparkles className="w-4 h-4 mr-2 inline-block" />
            Nền tảng làm việc thông minh
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
            Viết. Lập kế hoạch. Chia sẻ.
            <br />
            <span className="bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Với Notion Clone
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up delay-200">
            Một không gian làm việc được kết nối giúp bạn và team của mình có
            thể viết, lập kế hoạch và tổ chức công việc hiệu quả hơn.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <Button size="lg" className="text-base group" asChild>
              <Link href="/sign-up">
                Bắt đầu miễn phí
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="#features">Tìm hiểu thêm</Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-12 animate-fade-in-up delay-500">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
