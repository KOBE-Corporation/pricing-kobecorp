const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">KOBE</span> Corporation
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#forfaits" className="text-gray-700 hover:text-blue-600 transition-colors">
              Forfaits
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
