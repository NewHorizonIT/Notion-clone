"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { useLogout } from "@/features/auth";
import useAuthStore from "@/shared/store/useAuthStore";
import SwitchTheme from "../../common/SwitchTheme";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RightHeader = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const isLogin = useAuthStore((state) => state.isLogin);
  const user = useAuthStore((state) => state.user);
  const { logout, isLoading } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Đăng xuất thành công");
      router.replace("/login");
    } catch {
      toast.error("Đăng xuất thất bại");
    }
  };

  if (isMobile) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      {/* Mode Toggle */}
      <SwitchTheme />
      {isLogin ? (
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="hover:bg-primary" asChild>
            <Link href="/pages">Vào ứng dụng</Link>
          </Button>
          <Button
            variant="outline"
            className="hover:bg-primary"
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? "Đang xử lý..." : "Đăng xuất"}
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button variant={"secondary"} className="hover:bg-primary" asChild>
            <Link href="/login">Đăng nhập</Link>
          </Button>
          <Button variant={"secondary"} className="hover:bg-primary" asChild>
            <Link href="/sign-up">Đăng ký</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default RightHeader;
