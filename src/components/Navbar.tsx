import Link from "next/link";
import Categories from "./DropDown";

const Navbar = () => {
    return (
        <nav className="bg-gray-700">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <Link className="text-white text-xl font-semibold" href="/">PrimeGlobal</Link>
      </div>
      <div className="flex">
      <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/search">Search</Link>
      <Categories />
      </div>
    </div>
  </div>
</nav>

    );
};

export default Navbar;
