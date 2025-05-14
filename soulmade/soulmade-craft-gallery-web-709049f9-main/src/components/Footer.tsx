
import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium mb-4">SoulMade</h3>
            <p className="text-muted-foreground mb-4">
              Создаем уникальные изделия ручной работы с душой и любовью к деталям.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="hover:text-soulmade-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover:text-soulmade-orange transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@soulmade.com" 
                className="hover:text-soulmade-orange transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="nav-link">Главная</Link>
              </li>
              <li>
                <Link to="/products" className="nav-link">Продукты</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">О нас</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products#jewelry" className="nav-link">Украшения</Link>
              </li>
              <li>
                <Link to="/products#home" className="nav-link">Для дома</Link>
              </li>
              <li>
                <Link to="/products#accessories" className="nav-link">Аксессуары</Link>
              </li>
              <li>
                <Link to="/products#gifts" className="nav-link">Подарки</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+375295673210" 
                  className="flex items-center gap-2 nav-link" 
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" /> +375295673210
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/Surganava+St+45,+Minsk,+Belarus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 nav-link"
                  aria-label="Find us on the map"
                >
                  <MapPin className="h-5 w-5" /> г. Минск ул. Сурганова 45
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@soulmade.com" 
                  className="flex items-center gap-2 nav-link"
                  aria-label="Email us"
                >
                  <Mail className="h-5 w-5" /> info@soulmade.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SoulMade. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-soulmade-orange transition-colors duration-300">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-soulmade-orange transition-colors duration-300">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
