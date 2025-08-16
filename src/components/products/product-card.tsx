'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsListItem } from '@/lib/services/products.service';

interface ProductCardProps {
  product: ProductsListItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const thumbnail = product.media?.find(
    (m) => m.name === 'thumbnail'
  )?.resource_value;
  const isFree = product.price_type === 'free';

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="relative">
          {thumbnail ? (
            <div className="relative h-40 w-full">
              <Image
                src={thumbnail}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="h-40 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <div className="text-white text-sm font-semibold text-center px-4 line-clamp-3">
                {product.title}
              </div>
            </div>
          )}
          {product.modality === 'book' && (
            <Badge className="absolute top-2 left-2 bg-blue-500 text-white">
              Book
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 text-sm leading-tight">
            {product.title}
          </h3>
          {product.instructor_text && product.instructor_text.trim() && (
            <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
              {product.instructor_text}
            </p>
          )}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex-1">
              {isFree ? (
                <span className="text-[#1CAB55] font-bold text-sm">Free</span>
              ) : (
                <div className="flex items-center gap-1">
                  <div
                    className="text-sm font-semibold text-foreground"
                    dangerouslySetInnerHTML={{
                      __html: product.price_details.text,
                    }}
                  />
                  {product.price_details.max_price >
                    product.price_details.min_final_price && (
                    <span className="text-xs text-muted-foreground line-through">
                      ৳{product.price_details.max_price}
                    </span>
                  )}
                </div>
              )}
            </div>
            <Badge
              variant="outline"
              className="text-xs capitalize ml-2 text-muted-foreground"
            >
              {product.modality.replace('_', ' ')}
            </Badge>
          </div>
          {product.is_enrolled && (
            <div className="mt-2 text-xs text-blue-600 font-medium">
              ✓ Enrolled
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
