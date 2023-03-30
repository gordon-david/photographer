import { Link } from "react-router-dom";

export default function Navbar() {
  const NavLink = ({ path, text }) => (
    <Link to={path} className="px-4 font-bold text-lg hover:text-red-500 red">
      {`${text}`}
    </Link>
  );

  return (
    <nav className="flex ml-0 py-10 bg-amber-50 fixed top-0 left-0 right-0">
      <NavLink path="/" text="Home" />
      <NavLink path="/gallery" text="Gallery" />
      <NavLink path="/about" text="About" />
    </nav>
  );
}
