
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProductCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

const ProductCarousel = ({
  items,
  autoPlay = true,
  interval = 5000
}: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        handleNext();
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, currentIndex, isAnimating]);

  return (
    <div className="relative overflow-hidden">
      {/* Images */}
      <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden relative rounded-lg">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 translate-x-0" 
                : index < currentIndex 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/90 text-sm md:text-base max-w-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          className="bg-black/20 hover:bg-black/40 text-white rounded-full pointer-events-auto"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="bg-black/20 hover:bg-black/40 text-white rounded-full pointer-events-auto"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
