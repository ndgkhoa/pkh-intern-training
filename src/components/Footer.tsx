const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-900 py-6 text-gray-300">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
