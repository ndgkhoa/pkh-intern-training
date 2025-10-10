import { Link } from 'react-router-dom';
import Search from '@/components/Search';
import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="hover:text-blue-500">
          <h1 className="text-2xl font-bold text-blue-600">MyShop</h1>
        </Link>

        <Search placeholder="Tìm sản phẩm..." />

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
