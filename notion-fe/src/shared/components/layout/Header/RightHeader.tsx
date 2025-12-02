import { useIsMobile } from "@/hooks/use-mobile";
import SwitchTheme from "../../common/SwitchTheme";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

const RightHeader = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      {/* Mode Toggle */}
      <SwitchTheme />
      {/* Button Login/Signup */}
      <div className="flex gap-2">
        <Button variant={"secondary"} className="hover:bg-primary" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button variant={"secondary"} className="hover:bg-primary">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default RightHeader;
