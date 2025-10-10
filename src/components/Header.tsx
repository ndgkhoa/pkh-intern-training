const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-blue-600">MyShop</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-blue-500">
            Trang chủ
          </a>
          <a href="/products" className="hover:text-blue-500">
            Sản phẩm
          </a>
          <a href="/contact" className="hover:text-blue-500">
            Liên hệ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
