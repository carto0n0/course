
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    closeMenu();
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold relative text-foreground hover:text-soulmade-orange transition-colors duration-300"
          >
            <span className="text-soulmade-orange">Soul</span>Made
          </Link>
          
          {/* Contact Info - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <a 
              href="tel:+375295673210" 
              className="flex items-center gap-1 nav-link" 
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" /> +375295673210
            </a>
            <a 
              href="https://www.google.com/maps/place/Surganava+St+45,+Minsk,+Belarus" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 nav-link"
              aria-label="Find us on the map"
            >
              <MapPin className="h-4 w-4" /> г. Минск ул. Сурганова 45
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link ${isActive("/") ? "text-soulmade-orange after:w-full" : ""}`}
            >
              Главная
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${isActive("/products") ? "text-soulmade-orange after:w-full" : ""}`}
            >
              Продукты
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive("/about") ? "text-soulmade-orange after:w-full" : ""}`}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive("/contact") ? "text-soulmade-orange after:w-full" : ""}`}
            >
              Контакты
            </Link>
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-foreground hover:text-soulmade-orange transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-background transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container-custom py-20">
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className={`text-xl nav-link ${isActive("/") ? "text-soulmade-orange" : ""}`}
            >
              Главная
            </Link>
            <Link 
              to="/products" 
              className={`text-xl nav-link ${isActive("/products") ? "text-soulmade-orange" : ""}`}
            >
              Продукты
            </Link>
            <Link 
              to="/about" 
              className={`text-xl nav-link ${isActive("/about") ? "text-soulmade-orange" : ""}`}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className={`text-xl nav-link ${isActive("/contact") ? "text-soulmade-orange" : ""}`}
            >
              Контакты
            </Link>
            
            <div className="pt-8 border-t border-muted">
              <div className="flex flex-col space-y-4 text-base">
                <a 
                  href="tel:+375295673210" 
                  className="flex items-center gap-2 nav-link" 
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" /> +375295673210
                </a>
                <a 
                  href="https://www.google.com/maps/place/Surganava+St+45,+Minsk,+Belarus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 nav-link"
                  aria-label="Find us on the map"
                >
                  <MapPin className="h-5 w-5" /> г. Минск ул. Сурганова 45
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
