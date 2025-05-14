
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import ProductInquiryForm from "@/components/ProductInquiryForm";

const categories = [
  {
    id: "all",
    name: "Все категории",
  },
  {
    id: "jewelry",
    name: "Украшения",
  },
  {
    id: "home",
    name: "Для дома",
  },
  {
    id: "accessories",
    name: "Аксессуары",
  },
  {
    id: "gifts",
    name: "Подарки",
  }
];

const products = [
  {
    id: 1,
    name: "Керамическая ваза ручной работы",
    price: 1200,
    image: "https://images.unsplash.com/photo-1612196808214-b40ab6eb6523?auto=format&fit=crop&w=600&q=80",
    category: "home"
  },
  {
    id: 2,
    name: "Вязаный плед из экологичной шерсти",
    price: 2500,
    image: "https://images.unsplash.com/photo-1513519683267-4ee5f5355e9f?auto=format&fit=crop&w=600&q=80",
    category: "home"
  },
  {
    id: 3,
    name: "Деревянная шкатулка с инкрустацией",
    price: 1800,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
    category: "gifts"
  },
  {
    id: 4,
    name: "Серьги с натуральным камнем",
    price: 1500,
    image: "https://images.unsplash.com/photo-1561172307-45cb6d4c0183?auto=format&fit=crop&w=600&q=80",
    category: "jewelry"
  },
  {
    id: 5,
    name: "Кожаный браслет ручной работы",
    price: 800,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
    category: "accessories"
  },
  {
    id: 6,
    name: "Подушка с вышивкой",
    price: 1100,
    image: "https://images.unsplash.com/photo-1616046386594-c152babc9e15?auto=format&fit=crop&w=600&q=80",
    category: "home"
  },
  {
    id: 7,
    name: "Цветочный венок",
    price: 950,
    image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=600&q=80",
    category: "gifts"
  },
  {
    id: 8,
    name: "Кулон из дерева и смолы",
    price: 1300,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80",
    category: "jewelry"
  },
  {
    id: 9,
    name: "Кожаный ежедневник",
    price: 1400,
    image: "https://images.unsplash.com/photo-1519073145902-70d8bd05f008?auto=format&fit=crop&w=600&q=80",
    category: "accessories"
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const location = useLocation();
  
  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && categories.some(category => category.id === hash)) {
      setActiveCategory(hash);
      
      // Scroll to the top after a small delay
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  
  // Filter products based on category and search term
  useEffect(() => {
    let filtered = products;
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => product.name.toLowerCase().includes(term));
    }
    
    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm]);
  
  const handleProductSelect = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    // Reset selected product after a short delay to allow dialog animation
    setTimeout(() => setSelectedProduct(null), 300);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Наши изделия</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Исследуйте нашу коллекцию уникальных изделий ручной работы, созданных с любовью и вниманием к каждой детали.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Search and Filters */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Поиск изделий..."
                className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-soulmade-orange/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isMobileFilterOpen ? "rotate-180" : ""}`} />
              </Button>
            </div>
            
            {/* Categories - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={activeCategory === category.id 
                    ? "bg-soulmade-orange hover:bg-soulmade-orange/90" 
                    : ""}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* Categories - Mobile */}
            <div className={`md:hidden grid grid-cols-2 gap-2 transition-all duration-300 ${isMobileFilterOpen ? "max-h-60 opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={activeCategory === category.id 
                    ? "bg-soulmade-orange hover:bg-soulmade-orange/90" 
                    : ""}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsMobileFilterOpen(false);
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">Изделия не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group bg-card rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
                  id={`product-${product.id}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                    <p className="text-soulmade-orange font-medium mb-4">{product.price} руб.</p>
                    <Button 
                      className="w-full bg-soulmade-orange hover:bg-soulmade-orange/90"
                      onClick={() => handleProductSelect(product)}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Product Inquiry Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md">
              {selectedProduct && (
                <ProductInquiryForm
                  productName={selectedProduct.name}
                  onClose={handleDialogClose}
                />
              )}
            </DialogContent>
          </Dialog>
          
          {/* Categories anchor points for navigation */}
          {categories.filter(c => c.id !== 'all').map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32"></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
