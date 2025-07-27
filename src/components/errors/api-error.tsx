'use client';

import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { AlertTriangle, RefreshCw, Home, Wifi, Server } from 'lucide-react';

interface ApiErrorProps {
  error?: Error | null;
  onRetry?: () => void;
  isRetrying?: boolean;
  title?: string;
  description?: string;
  showRetry?: boolean;
  showHomeButton?: boolean;
}

const ApiError = ({
  error,
  onRetry,
  isRetrying = false,
  title,
  description,
  showRetry = true,
  showHomeButton = true,
}: ApiErrorProps) => {
  // Determine error type and appropriate messaging
  const getErrorDetails = () => {
    if (title && description) {
      return { title, description, icon: AlertTriangle };
    }

    if (error?.message?.includes('404')) {
      return {
        title: 'Content Not Found',
        description:
          'The requested content could not be found. It may have been moved or deleted.',
        icon: AlertTriangle,
      };
    }

    if (
      error?.message?.includes('Network Error') ||
      error?.message?.includes('fetch')
    ) {
      return {
        title: 'Connection Problem',
        description:
          'Unable to connect to our servers. Please check your internet connection and try again.',
        icon: Wifi,
      };
    }

    if (
      error?.message?.includes('500') ||
      error?.message?.includes('Internal Server Error')
    ) {
      return {
        title: 'Server Error',
        description:
          'Our servers are experiencing issues. Please try again in a few moments.',
        icon: Server,
      };
    }

    if (error?.message?.includes('timeout')) {
      return {
        title: 'Request Timeout',
        description: 'The request took too long to complete. Please try again.',
        icon: RefreshCw,
      };
    }

    // Default error
    return {
      title: 'Something Went Wrong',
      description:
        'An unexpected error occurred. Please try again or contact support if the problem persists.',
      icon: AlertTriangle,
    };
  };

  const {
    title: errorTitle,
    description: errorDescription,
    icon: ErrorIcon,
  } = getErrorDetails();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50 p-4">
      <div className="text-center max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-8">
          {/* Error Icon */}
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ErrorIcon className="w-8 h-8 text-red-600" />
          </div>

          {/* Error Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            {errorTitle}
          </h1>

          {/* Error Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {errorDescription}
          </p>

          {/* Error Details (for development) */}
          {process.env.NODE_ENV === 'development' && error && (
            <div className="mb-6 p-3 bg-gray-100 rounded-lg text-left">
              <p className="text-xs font-mono text-gray-700 break-all">
                <strong>Error:</strong> {error.message}
              </p>
              {error.stack && (
                <details className="mt-2">
                  <summary className="text-xs text-gray-600 cursor-pointer">
                    Stack trace
                  </summary>
                  <pre className="text-xs text-gray-600 mt-1 whitespace-pre-wrap">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {showRetry && onRetry && (
              <Button
                onClick={onRetry}
                disabled={isRetrying}
                className="w-full"
                size="lg"
              >
                {isRetrying ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </>
                )}
              </Button>
            )}

            {showHomeButton && (
              <Button
                variant="outline"
                onClick={() => (window.location.href = '/')}
                className="w-full"
                size="lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            )}
          </div>

          {/* Additional Help */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <a
                href="mailto:support@10minuteschool.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiError;
