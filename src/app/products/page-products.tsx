'use client';

import { useState } from 'react';
import { useProducts } from '@/hooks/use-products';
import { useLocale } from 'next-intl';
import { Locale } from '@/i18n/config';
import { ProductsFilters } from '@/lib/services/products.service';

// Components
import ProductsFilter from '@/components/products/products-filter';
import ProductsHeader from '@/components/products/products-header';
import ProductsGrid from '@/components/products/products-grid';
import ProductsPagination from '@/components/products/products-pagination';
import ProductsLoading from '@/components/products/products-loading';
import ProductsError from '@/components/products/products-error';

const ProductsPage = () => {
  const locale = useLocale() as Locale;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<
    'newest' | 'popular' | 'price_low' | 'price_high'
  >('newest');
  const [filters, setFilters] = useState({
    class: [] as string[],
    skills: [] as string[],
    admission: false,
    jobs: false,
    books: false,
    courseType: [] as string[],
    price: [] as string[],
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Build API filters from UI filters
  const apiFilters: ProductsFilters = {
    page: currentPage,
    per_page: 9,
    limit: 9,
    sort_by: sortBy,
    ...(filters.price.includes('Free') && { price_type: 'free' as const }),
    ...(filters.price.includes('Paid') && { price_type: 'paid' as const }),
  };

  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useProducts(apiFilters, locale);

  const handleFilterChange = (filterType: string, value: string | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]:
        typeof value === 'boolean'
          ? value
          : Array.isArray(prev[filterType as keyof typeof prev])
          ? (prev[filterType as keyof typeof prev] as string[]).includes(
              value as string
            )
            ? (prev[filterType as keyof typeof prev] as string[]).filter(
                (item) => item !== value
              )
            : [
                ...(prev[filterType as keyof typeof prev] as string[]),
                value as string,
              ]
          : value,
    }));
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setFilters({
      class: [],
      skills: [],
      admission: false,
      jobs: false,
      books: false,
      courseType: [],
      price: [],
    });
    setCurrentPage(1);
  };

  // Handle loading and error states
  if (isLoading) return <ProductsLoading />;
  if (isError) return <ProductsError error={error} />;

  const products = productsData?.data?.products || [];
  const meta = productsData?.data?.pagination_meta;
  const totalResults = meta?.total_items || 0;
  const totalPages = meta?.total_page || 1;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:col-span-1">
          <ProductsFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearAllFilters}
          />
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          <ProductsHeader
            totalResults={totalResults}
            currentPage={currentPage}
            itemsPerPage={meta?.items_per_page || 9}
            fromItem={(currentPage - 1) * (meta?.items_per_page || 9) + 1}
            toItem={Math.min(
              currentPage * (meta?.items_per_page || 9),
              totalResults
            )}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          <ProductsGrid products={products} viewMode={viewMode} />

          <ProductsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
