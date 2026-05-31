"use client";

import { useState } from "react";
import { Search, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { scaleIn } from "../../common/MotionWrapper";
import { ModeToggle } from "../../common/ModeToggle";
import useAuthStore from "@/shared/store/useAuthStore";
import { useLogout } from "@/features/auth";

export function Topbar() {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const { logout, isLoading: isLoggingOut } = useLogout();

  const userDisplayName = user?.username || "Người dùng";
  const userEmail = user?.email || "";
  const avatarFallback = userDisplayName.slice(0, 2).toUpperCase();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Đăng xuất thành công");
      router.replace("/login");
    } catch {
      toast.error("Đăng xuất thất bại");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 items-center justify-between gap-4 px-4 lg:px-6">
        {/* Search Bar */}
        <div className="flex-1 md:flex-none md:w-96">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 w-full rounded-md bg-card shadow-lg p-4 z-10"
              >
                <Input
                  type="search"
                  placeholder="Tìm kiếm trang..."
                  className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
                  onFocus={() => setSearchOpen(true)}
                  onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <ModeToggle />

          {/* User Menu */}
          <DropdownMenu open={userMenuOpen} onOpenChange={setUserMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 w-9 rounded-full p-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <AnimatePresence>
              {userMenuOpen && (
                <DropdownMenuContent
                  align="end"
                  className="w-56"
                  asChild
                  forceMount
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={scaleIn}
                  >
                    <DropdownMenuLabel>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{userDisplayName}</p>
                        {userEmail ? (
                          <p className="text-xs text-muted-foreground">
                            {userEmail}
                          </p>
                        ) : null}
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() =>
                        toast.info("Tính năng hồ sơ sẽ sớm ra mắt")
                      }
                      className="cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>Hồ sơ</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="cursor-pointer text-destructive focus:text-destructive"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>
                        {isLoggingOut ? "Đang đăng xuất..." : "Đăng xuất"}
                      </span>
                    </DropdownMenuItem>
                  </motion.div>
                </DropdownMenuContent>
              )}
            </AnimatePresence>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
