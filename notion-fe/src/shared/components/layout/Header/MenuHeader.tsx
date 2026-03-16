"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/shared/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

const MenuItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Tính năng", href: "/features" },
];

const MenuHeader = () => {
  const path = usePathname();
  const isMobile = useIsMobile();
  return (
    <div>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>NotionX</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4">
              {MenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:text-primary font-medium text-2xl min-w-20 px-5",
                    path === item.href && "text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <div className="flex space-x-4 gap-10">
          {MenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-primary font-medium text-lg min-w-20",
                path === item.href && "text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuHeader;
