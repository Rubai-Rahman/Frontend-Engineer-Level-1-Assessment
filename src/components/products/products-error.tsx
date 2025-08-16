import { Button } from '@/components/ui/button';

interface ProductsErrorProps {
  error?: any;
  onRetry?: () => void;
}

export default function ProductsError({ error, onRetry }: ProductsErrorProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-4">
          {error?.message || 'Failed to load products'}
        </p>
        <Button onClick={onRetry || (() => window.location.reload())}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
