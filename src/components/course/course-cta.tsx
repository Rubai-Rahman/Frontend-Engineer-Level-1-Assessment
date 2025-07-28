import { Button } from '@/components/ui/button';
import { CtaText } from '@/lib/types';
import { ShoppingCart, Star, CheckSquare } from 'lucide-react';

interface CourseCTAProps {
  ctaText?: any;
  courseData?: any;
}

export function CourseCTA({ ctaText, courseData }: CourseCTAProps) {
  // Extract price from schema data if available
  const getPrice = () => {
    if (courseData?.seo?.schema) {
      const productSchema = courseData.seo.schema.find(
        (s: unknown) =>
          s.meta_value && s.meta_value.includes('"@type": "Product"')
      );
      if (productSchema) {
        try {
          const schema = JSON.parse(productSchema.meta_value);
          return schema.offers?.price || '5000';
        } catch (e) {
          // Fallback to default
        }
      }
    }
    return '5000';
  };

  const price = getPrice();
  const ctaButtonText = ctaText?.name || 'কোর্সটি কিনুন';

  return (
    <div className="p-6">
      {/* Enhanced Price Section */}
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
          🔥 Limited Time Offer
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          ৳{parseInt(price).toLocaleString()}
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 font-medium">(4.9/5 from 1000+ students)</span>
        </div>
        <p className="text-sm text-primary font-medium">
          ✅ 30-Day Money Back Guarantee
        </p>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className="space-y-4">
        <Button
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          size="lg"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          {ctaButtonText}
        </Button>

        <Button
          variant="outline"
          className="w-full py-4 text-lg font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
          size="lg"
        >
          <svg
            className="h-5 w-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          ফ্রি প্রিভিউ দেখুন
        </Button>
      </div>

      {/* Enhanced Course Features */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4 text-center">
          What's Included:
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckSquare className="h-4 w-4 text-primary" />
            </div>
            <span className="text-gray-700 font-medium">Lifetime Access</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <CheckSquare className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-gray-700 font-medium">
              Mobile & Desktop Access
            </span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckSquare className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-gray-700 font-medium">
              Certificate of Completion
            </span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
              <CheckSquare className="h-4 w-4 text-orange-600" />
            </div>
            <span className="text-gray-700 font-medium">Expert Support</span>
          </div>
        </div>
      </div>

      {/* Enhanced Contact Info */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">Need help choosing?</p>
          <Button
            variant="link"
            className="text-blue-600 p-0 font-semibold hover:text-blue-800"
          >
            📞 Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
