import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";

export default function Navbar() {
  return (
    <nav className="hidden sm:flex z-10 ml-0 py-10 sm:sticky top-0 left-0 right-0">
      <NavLink path="/" text="Home" />
      <NavLink path="/gallery" text="Gallery" />
      <NavLink path="/about" text="About" />
    </nav>
  );
}
