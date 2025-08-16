'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';

interface ProductsFilterProps {
  filters: {
    class: string[];
    skills: string[];
    admission: boolean;
    jobs: boolean;
    books: boolean;
    courseType: string[];
    price: string[];
  };
  onFilterChange: (filterType: string, value: string | boolean) => void;
  onClearFilters: () => void;
}

export default function ProductsFilter({
  filters,
  onFilterChange,
  onClearFilters,
}: ProductsFilterProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Filter by</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-red-500 hover:text-red-700"
        >
          <X className="w-4 h-4 mr-1" />
          Clear all filters
        </Button>
      </div>

      <div className="space-y-6">
        {/* Class Filter */}
        <div>
          <h4 className="font-medium mb-3">Class 1-12</h4>
          <div className="space-y-2">
            {[
              'Class 6',
              'Class 7',
              'Class 8',
              'Class 9',
              'Class 10',
              'HSC',
            ].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox
                  id={item}
                  checked={filters.class.includes(item)}
                  onCheckedChange={() => onFilterChange('class', item)}
                />
                <label htmlFor={item} className="text-sm text-gray-700">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Filter */}
        <div>
          <h4 className="font-medium mb-3">Skills</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="admission"
                checked={filters.admission}
                onCheckedChange={(checked) =>
                  onFilterChange('admission', checked)
                }
              />
              <label htmlFor="admission" className="text-sm text-gray-700">
                Admission
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="jobs"
                checked={filters.jobs}
                onCheckedChange={(checked) => onFilterChange('jobs', checked)}
              />
              <label htmlFor="jobs" className="text-sm text-gray-700">
                Jobs
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="books"
                checked={filters.books}
                onCheckedChange={(checked) => onFilterChange('books', checked)}
              />
              <label htmlFor="books" className="text-sm text-gray-700">
                Books
              </label>
            </div>
          </div>
        </div>

        {/* Course Type Filter */}
        <div>
          <h4 className="font-medium mb-3">Course Type</h4>
          <div className="space-y-2">
            {['Recorded Course', 'Live Course', 'Crash Course'].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox
                  id={item}
                  checked={filters.courseType.includes(item)}
                  onCheckedChange={() => onFilterChange('courseType', item)}
                />
                <label htmlFor={item} className="text-sm text-gray-700">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="font-medium mb-3">Price</h4>
          <div className="space-y-2">
            {['Paid', 'Free'].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox
                  id={item}
                  checked={filters.price.includes(item)}
                  onCheckedChange={() => onFilterChange('price', item)}
                />
                <label htmlFor={item} className="text-sm text-gray-700">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
