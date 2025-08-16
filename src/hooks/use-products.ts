import { useQuery } from '@tanstack/react-query';
import {
  productsService,
  ProductsFilters,
} from '@/lib/services/products.service';
import { Locale } from '@/i18n/config';

// Query keys
export const productsKeys = {
  all: ['products'] as const,
  lists: () => [...productsKeys.all, 'list'] as const,
  list: (filters: ProductsFilters, locale: Locale) =>
    [...productsKeys.lists(), filters, locale] as const,
  categories: (locale: Locale) =>
    [...productsKeys.all, 'categories', locale] as const,
  search: (query: string, locale: Locale) =>
    [...productsKeys.all, 'search', query, locale] as const,
};

// Get products list
export function useProducts(
  filters: ProductsFilters = {},
  locale: Locale = 'bn'
) {
  return useQuery({
    queryKey: productsKeys.list(filters, locale),
    queryFn: () => productsService.getProducts(filters, locale),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

// Get product categories
export function useProductCategories(locale: Locale = 'bn') {
  return useQuery({
    queryKey: productsKeys.categories(locale),
    queryFn: () => productsService.getCategories(locale),
    staleTime: 30 * 60 * 1000, // 30 minutes
    retry: 2,
  });
}

// Search products
export function useProductSearch(query: string, locale: Locale = 'bn') {
  return useQuery({
    queryKey: productsKeys.search(query, locale),
    queryFn: () => productsService.searchProducts(query, locale),
    enabled: query.length > 2, // Only search if query is longer than 2 characters
    staleTime: 2 * 60 * 1000, // 2 minutes
    retry: 1,
  });
}
