import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  title: string;
  description?: string;
  className?: string;
}

export function ErrorMessage({
  title,
  description,
  className,
}: ErrorMessageProps) {
  return (
    <div className={`text-center p-8 ${className}`}>
      <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
