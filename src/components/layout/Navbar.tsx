import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Company Logo */}
        <div className="text-xl font-bold">Bicycle</div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex gap-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/login" className="hover:text-gray-300">
            Login
          </a>
          <a href="/register" className="hover:text-gray-300">
            Register
          </a>
          <button
            onClick={handleLogout}
            className="btn border border-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Logout
          </button>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4">
          <a href="/" className="block py-2 hover:text-gray-300">
            Home
          </a>
          <a href="/login" className="block py-2 hover:text-gray-300">
            Login
          </a>
          <a href="/register" className="block py-2 hover:text-gray-300">
            Register
          </a>
          <button
            onClick={handleLogout}
            className="btn w-full mt-4 border border-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
