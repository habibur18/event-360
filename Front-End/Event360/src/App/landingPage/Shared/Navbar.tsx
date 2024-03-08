import { Link } from "react-router-dom";

export default function Navbar() {
  const NavList = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <header className="max-w-[1440px] mx-auto">
      <nav className="flex justify-between items-center">
        <h1 className="p-5 font-bold text-[32px]">
          Event{" "}
          <span style={{ backgroundClip: "text" }} className="text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
            360
          </span>
        </h1>

        <div className="flex">
          {NavList.map((nav) => (
            <Link className="p-5 block font-medium" key={nav.name} to={nav.path}>
              {nav.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
