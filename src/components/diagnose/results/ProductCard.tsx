
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Product } from '../ResultsDisplay';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="border rounded-lg p-3 flex flex-col">
      {product.imageUrl && (
        <div className="h-24 w-full mb-3 rounded overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <h4 className="font-medium text-sm">{product.name}</h4>
      <p className="text-xs text-gray-500 mt-1 mb-2 flex-grow">{product.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-semibold">${product.price.toFixed(2)}</span>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center text-forest-600 border-forest-200 hover:bg-forest-50"
          onClick={() => onBuy(product)}
        >
          <ShoppingCart className="mr-1 h-4 w-4" />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
