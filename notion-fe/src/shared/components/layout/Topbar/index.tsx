"use client";

import { useState } from "react";
import { Search, User, Settings, LogOut, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const breadcrumbs = [
  { label: "Getting Started", href: "#" },
  { label: "Welcome", href: "#" },
];

export function Topbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4 lg:px-6">
        {/* Breadcrumb Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground flex-1">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3 w-3" />}
              <button
                className="hover:text-foreground transition-colors"
                onClick={() => toast.info(`Navigate to ${crumb.label}`)}
              >
                {crumb.label}
              </button>
            </div>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="flex-1 md:flex-none md:w-96">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search pages..."
              className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* <AddMemberDialog /> */}
          <h1>AddMember</h1>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* User Menu */}
          <DropdownMenu open={userMenuOpen} onOpenChange={setUserMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 w-9 rounded-full p-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>JD</AvatarFallback>
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
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">
                          john@example.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => toast.info("Profile coming soon")}
                      className="cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => toast.info("Settings coming soon")}
                      className="cursor-pointer"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => toast.success("Logged out")}
                      className="cursor-pointer text-destructive focus:text-destructive"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
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
