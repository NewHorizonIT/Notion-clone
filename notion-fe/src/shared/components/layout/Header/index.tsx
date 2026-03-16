import Link from "next/link";
import MenuHeader from "./MenuHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      {/* Logo */}
      <Link className="font-bold text-xl" href="/">
        NotionX
      </Link>
      {/* Menu */}
      <MenuHeader />
      <RightHeader />
    </div>
  );
};

export default Header;
