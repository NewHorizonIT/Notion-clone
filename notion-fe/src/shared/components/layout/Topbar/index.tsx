"use client";

import { useEffect, useRef, useState } from "react";
import { Search, User, LogOut, Loader2, FileText } from "lucide-react";
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
import { useSearchPages } from "@/features/page";

export function Topbar() {
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const { logout, isLoading: isLoggingOut } = useLogout();
  const hasQuery = debouncedQuery.trim().length > 0;
  const {
    pages: searchResults,
    isLoading: isSearching,
    isError: isSearchError,
  } = useSearchPages(hasQuery ? debouncedQuery : null);

  const userDisplayName = user?.username || "Người dùng";
  const userEmail = user?.email || "";
  const avatarFallback = userDisplayName.slice(0, 2).toUpperCase();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim());
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Đăng xuất thành công");
      router.replace("/login");
    } catch {
      toast.error("Đăng xuất thất bại");
    }
  };

  const handleNavigateToPage = (pageId: string) => {
    router.push(`/pages/${pageId}`);
    setSearchOpen(false);
    setSearchQuery("");
    setDebouncedQuery("");
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Escape") {
      setSearchOpen(false);
      return;
    }

    if (event.key === "Enter" && searchResults.length > 0) {
      event.preventDefault();
      handleNavigateToPage(searchResults[0].id);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 items-center justify-between gap-4 px-4 lg:px-6">
        {/* Search Bar */}
        <div className="flex-1 md:flex-none md:w-96">
          <div ref={searchContainerRef} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm trang..."
              className="pl-9"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={handleSearchKeyDown}
              aria-expanded={searchOpen}
              aria-controls="topbar-search-results"
            />

            <AnimatePresence>
              {searchOpen && searchQuery.trim().length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 w-full overflow-hidden rounded-md border border-border bg-card shadow-lg z-20"
                  id="topbar-search-results"
                >
                  {isSearching ? (
                    <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Đang tìm kiếm...</span>
                    </div>
                  ) : isSearchError ? (
                    <div className="px-3 py-2 text-sm text-destructive">
                      Không thể tìm kiếm trang
                    </div>
                  ) : searchResults.length === 0 ? (
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      Không tìm thấy trang phù hợp
                    </div>
                  ) : (
                    <div className="max-h-72 overflow-y-auto p-1">
                      {searchResults.map((page) => (
                        <button
                          key={page.id}
                          type="button"
                          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm hover:bg-muted focus:bg-muted"
                          onClick={() => handleNavigateToPage(page.id)}
                        >
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="truncate">
                            {page.title || "Trang không tiêu đề"}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
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
