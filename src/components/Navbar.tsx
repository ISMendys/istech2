import { useState, useEffect } from 'react';
import logo from '../assets/images/istech-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src={logo} alt="ISTECH Logo" className="h-10 md:h-12" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className={`font-medium transition-colors ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'}`}>Início</a>
            <a href="#servicos" className={`font-medium transition-colors ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'}`}>Serviços</a>
            <a href="#parceria" className={`font-medium transition-colors ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'}`}>Parceria</a>
            <a href="#inovacao" className={`font-medium transition-colors ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'}`}>Inovação</a>
            <a href="#contato" className={`font-medium transition-colors ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'}`}>Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-blue-900 hover:text-blue-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
              <a href="#servicos" className="text-blue-900 hover:text-blue-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
              <a href="#parceria" className="text-blue-900 hover:text-blue-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Parceria</a>
              <a href="#inovacao" className="text-blue-900 hover:text-blue-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Inovação</a>
              <a href="#contato" className="text-blue-900 hover:text-blue-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
