import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={"ghost"}
      onClick={() => setTheme(() => (theme === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
