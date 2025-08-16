import { cache } from 'react';
import api from '@/lib/api';
import { Locale } from '@/i18n/config';

export interface ProductMedia {
  name: string;
  resource_type: string;
  resource_value: string;
}

export interface PriceDetails {
  min_price: number;
  min_final_price: number;
  max_price: number;
  max_final_price: number;
  text: string;
}

export interface ProductsListItem {
  id: string;
  title: string;
  slug: string;
  order_idx: number;
  modality: string;
  media: ProductMedia[] | null;
  price_type: 'free' | 'paid';
  is_enrolled: boolean;
  price_details: PriceDetails;
  instructor_text: string;
  checklist: any[];
}

export interface ProductsListResponse {
  code: number;
  data: {
    products: ProductsListItem[];
    pagination_meta: {
      total_items: number;
      item_count: number;
      items_per_page: number;
      total_page: number;
      current_page: number;
    };
  };
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

export interface ProductsFilters {
  category?: string[];
  price_type?: 'free' | 'paid';
  level?: string[];
  sort_by?: 'newest' | 'popular' | 'price_low' | 'price_high';
  search?: string;
  page?: number;
  per_page?: number;
  limit?: number;
}

export const productsService = {
  // Get products list with filters
  getProducts: async (
    filters: ProductsFilters = {},
    locale: Locale = 'bn'
  ): Promise<ProductsListResponse> => {
    const params = {
      lang: locale,
      page: filters.page || 1,
      limit: filters.per_page || 12,
      per_page: filters.per_page || 12,
      items_per_page: filters.per_page || 12,
      ...filters,
    };

    const response = await api.get('/products', { params });
    return response.data;
  },

  // Get product categories for filters
  getCategories: async (locale: Locale = 'bn'): Promise<string[]> => {
    const response = await api.get('/products/categories', {
      params: { lang: locale },
    });
    return response.data.data;
  },

  // Search products
  searchProducts: async (
    query: string,
    locale: Locale = 'bn'
  ): Promise<ProductsListItem[]> => {
    const response = await api.get('/products/search', {
      params: { q: query, lang: locale },
    });
    return response.data.data;
  },
};

// Cached version for server-side usage
export const getCachedProducts = cache(
  async (
    filters: ProductsFilters,
    locale: Locale
  ): Promise<ProductsListResponse> => {
    return await productsService.getProducts(filters, locale);
  }
);
