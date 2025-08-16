'use client';

import { Button } from '@/components/ui/button';

interface ProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductsPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        const pageNum = i + 1;
        return (
          <Button
            key={pageNum}
            variant={currentPage === pageNum ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </Button>
        );
      })}

      {totalPages > 5 && (
        <>
          <span className="px-2">...</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
