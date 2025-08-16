'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Grid, List } from 'lucide-react';

interface ProductsHeaderProps {
  totalResults: number;
  currentPage: number;
  itemsPerPage: number;
  fromItem: number;
  toItem: number;
  sortBy: 'newest' | 'popular' | 'price_low' | 'price_high';
  onSortChange: (
    value: 'newest' | 'popular' | 'price_low' | 'price_high'
  ) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export default function ProductsHeader({
  totalResults,
  fromItem,
  toItem,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}: ProductsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div className="text-sm text-gray-600">
        Showing {fromItem} - {toItem} of {totalResults} results
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-1 border rounded-md">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('grid')}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
