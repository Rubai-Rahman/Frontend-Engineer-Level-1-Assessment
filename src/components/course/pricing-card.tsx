import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { courseDataType } from '@/types/course.type';

interface PricingCardProps {
  course: courseDataType;
  variant?: 'default' | 'compact';
  className?: string;
}

export default function PricingCard({
  course,
  variant = 'default',
  className = '',
}: PricingCardProps) {
  const isCompact = variant === 'compact';

  return (
    <Card className={className}>
      <CardHeader
        className={`p-4 md:p-6 ${isCompact ? 'pb-3' : ''}`}
        id={variant === 'default' ? 'variant' : undefined}
      >
        <div className="flex flex-col w-full space-y-4">
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <div className="md:mb-3">
              <div
                className={`inline-block font-semibold text-foreground ${
                  isCompact ? 'text-xl' : 'text-2xl'
                }`}
              >
                {course.cta_text?.price || '৳3850'}
              </div>
              <div className="inline-flex items-center gap-2">
                <del
                  className={`font-normal text-muted-foreground ${
                    isCompact ? 'text-sm' : 'text-base md:text-xl'
                  }`}
                >
                  ৳5000
                </del>
                <div className="inline-block">
                  <span
                    className={`inline-flex items-center rounded-md bg-accent px-2 py-1 text-accent-foreground font-medium ${
                      isCompact ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    1150 ৳ ছাড়
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Button
            className={`w-full ${isCompact ? 'mb-3' : ''}`}
            size={isCompact ? 'sm' : 'default'}
          >
            {course.cta_text?.name || 'Enroll'}
          </Button>
        </div>
      </CardHeader>

      {/* Course Checklist / What's included */}
      <CardContent
        className={`${isCompact ? 'block' : 'hidden md:block'} pt-0 pb-6`}
      >
        <div className="space-y-4">
          <h3
            className={`font-semibold text-foreground ${
              isCompact ? 'text-sm' : 'text-lg'
            }`}
          >
            এই কোর্সে যা থাকছে
          </h3>
          <div className="space-y-3">
            {course.checklist
              ?.slice(0, isCompact ? 3 : undefined)
              .map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 ${
                    isCompact ? 'gap-2' : ''
                  }`}
                >
                  <div className="flex-shrink-0 dark:bg-white dark:p-1 rounded-md">
                    <Image
                      alt="checklist icon"
                      src={
                        item.icon ||
                        '/placeholder.svg?height=20&width=20&query=checklist icon'
                      }
                      width={isCompact ? 16 : 20}
                      height={isCompact ? 16 : 20}
                      className="object-contain"
                    />
                  </div>
                  <h4
                    className={`text-foreground leading-relaxed ${
                      isCompact ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    {item.text}
                  </h4>
                </div>
              ))}
            {isCompact && course.checklist && course.checklist.length > 3 && (
              <p className="text-xs text-muted-foreground mt-2">
                +{course.checklist.length - 3} আরো বৈশিষ্ট্য
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
