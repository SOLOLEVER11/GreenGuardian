
import React from 'react';
import { Product } from '../ResultsDisplay';
import ProductCard from './ProductCard';

interface ProductsListProps {
  products: Product[];
  onBuyProduct: (product: Product) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, onBuyProduct }) => {
  if (!products || products.length === 0) return null;
  
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recommended Products</h3>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onBuy={onBuyProduct} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
