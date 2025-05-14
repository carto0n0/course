
import { Link } from "react-router-dom";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Star, Clock, Package } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1600&h=900&q=80",
    title: "Керамическая ваза ручной работы",
    description: "Уникальная керамическая ваза, созданная вручную с вниманием к каждой детали.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&h=900&q=80",
    title: "Вязаный плед из экологичной шерсти",
    description: "Теплый и уютный плед из 100% натуральной шерсти, связанный вручную.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1600&h=900&q=80",
    title: "Деревянная шкатулка с инкрустацией",
    description: "Изящная шкатулка из натурального дерева с ручной инкрустацией и бархатной отделкой внутри.",
  }
];

const popularCategories = [
  {
    id: "jewelry",
    name: "Украшения",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&h=500&q=80",
    count: 28
  },
  {
    id: "home",
    name: "Для дома",
    image: "https://images.unsplash.com/photo-1560440021-33f9b67f7d4e?auto=format&fit=crop&w=400&h=500&q=80",
    count: 45
  },
  {
    id: "accessories",
    name: "Аксессуары",
    image: "https://images.unsplash.com/photo-1585488434450-6ebd557244e4?auto=format&fit=crop&w=400&h=500&q=80",
    count: 32
  },
  {
    id: "gifts",
    name: "Подарки",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=400&h=500&q=80",
    count: 19
  }
];

const testimonials = [
  {
    id: 1,
    text: "Изделия от SoulMade превзошли все мои ожидания! Качество и внимание к деталям просто поразительны.",
    author: "Ольга К.",
    rating: 5
  },
  {
    id: 2,
    text: "Заказала подарок для мамы, все было доставлено вовремя и красиво упаковано. Она в восторге!",
    author: "Анна М.",
    rating: 5
  },
  {
    id: 3,
    text: "Очень доволен покупкой! Приобрел деревянную шкатулку, работа выполнена идеально.",
    author: "Дмитрий Л.",
    rating: 4
  }
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in">
                Уникальные изделия <span className="text-soulmade-orange">ручной работы</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
                Каждое изделие SoulMade создано с любовью и вниманием к деталям,
                чтобы принести в ваш дом уют и красоту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button 
                  asChild
                  className="bg-soulmade-orange hover:bg-soulmade-orange/90 text-white font-medium px-8 py-6 rounded-md"
                >
                  <Link to="/products">
                    Посмотреть коллекцию
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-soulmade-orange text-soulmade-orange hover:bg-soulmade-orange/10 font-medium px-8 py-6 rounded-md"
                >
                  <a href="#featured">
                    Узнать больше
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80" 
                alt="SoulMade craftwork" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section id="featured" className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Избранные изделия</h2>
          <ProductCarousel items={featuredProducts} />
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8">
            <h2 className="section-title mb-0">Категории</h2>
            <Link 
              to="/products" 
              className="flex items-center text-soulmade-orange hover:underline transition-all duration-300 group"
            >
              Смотреть все
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products#${category.id}`}
                className="group relative rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/5]">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-medium mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} изделий</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">С любовью к деталям</h3>
              <p className="text-muted-foreground">
                Каждое наше изделие создается с особым вниманием к мельчайшим деталям.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Качественные материалы</h3>
              <p className="text-muted-foreground">
                Мы используем только экологически чистые и проверенные материалы.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Своевременная доставка</h3>
              <p className="text-muted-foreground">
                Мы ценим ваше время и обеспечиваем доставку в оговоренные сроки.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Безопасная упаковка</h3>
              <p className="text-muted-foreground">
                Мы бережно упаковываем каждое изделие, чтобы оно дошло до вас в идеальном состоянии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Отзывы клиентов</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-card p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating 
                          ? "text-soulmade-orange fill-soulmade-orange" 
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-soulmade-darkbrown text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы добавить уникальности в свой дом?
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Исследуйте нашу коллекцию уникальных изделий ручной работы или свяжитесь с нами для создания индивидуального заказа.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-soulmade-orange hover:bg-soulmade-orange/90 text-white font-medium px-8 py-6 rounded-md"
              >
                <Link to="/products">
                  Смотреть коллекцию
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-md"
              >
                <Link to="/contact">
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
