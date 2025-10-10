import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center gap-4">
      <Link
        to="/"
        className="rounded-md px-3 py-1 text-gray-700 transition duration-200 hover:bg-blue-50 hover:text-blue-600"
      >
        Trang chủ
      </Link>
      <Link
        to="/products"
        className="rounded-md px-3 py-1 text-gray-700 transition duration-200 hover:bg-blue-50 hover:text-blue-600"
      >
        Sản phẩm
      </Link>
      <Link
        to="/contact"
        className="rounded-md px-3 py-1 text-gray-700 transition duration-200 hover:bg-blue-50 hover:text-blue-600"
      >
        Liên hệ
      </Link>
    </nav>
  );
};

export default Navbar;
