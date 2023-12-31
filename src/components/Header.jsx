import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Yusuf</span>
          <span className="text-slate-700">Estate</span>
        </h1>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="bg-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link
            to="/"
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            Profile
          </Link>
          <Link
            to="/sign-in"
            className="sm:inline text-slate-700 hover:underline"
          >
            Sign-in
          </Link>
        </ul>
      </div>
    </header>
  );
}
