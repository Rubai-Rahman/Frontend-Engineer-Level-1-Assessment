'use client';

import ProductCard from './product-card';
import { ProductsListItem } from '@/lib/services/products.service';

interface ProductsGridProps {
  products: ProductsListItem[];
  viewMode: 'grid' | 'list';
}

export default function ProductsGrid({
  products,
  viewMode,
}: ProductsGridProps) {
  return (
    <div
      className={`grid gap-4 mb-8 ${
        viewMode === 'grid'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
