// src/components/Navbar.tsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md mb-4">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-500">
          DemoStore
        </Link>
        <div className="space-x-4">
          <Link to="/products" className="text-gray-600 hover:text-indigo-500">
            Products
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-indigo-500">
            Cart
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-indigo-500">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
