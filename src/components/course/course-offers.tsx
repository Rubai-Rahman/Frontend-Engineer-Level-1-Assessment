import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Clock, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CourseOffersProps {
  sections: Section[];
}

export function CourseOffers({ sections }: CourseOffersProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  if (!sections || sections.length === 0) {
    return null;
  }

  const offer = sections[0]?.values?.[0];
  if (!offer) return null;

  useEffect(() => {
    if (!offer.end_at) return;

    const calculateTimeLeft = () => {
      const endTime = new Date(offer.end_at).getTime();
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [offer.end_at]);

  if (!timeLeft) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 p-1 shadow-2xl">
      <div className="bg-white rounded-xl p-6 relative">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-transparent rounded-full -mr-10 -mt-10"></div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl text-gray-800">
            {offer.text || 'Special Offer'}
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 text-center">
          <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-xl p-4 min-w-[80px] shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl font-bold">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-medium opacity-90">Days</div>
          </div>
          <div className="text-red-500 text-2xl font-bold animate-pulse">:</div>
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl p-4 min-w-[80px] shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-medium opacity-90">Hours</div>
          </div>
          <div className="text-red-500 text-2xl font-bold animate-pulse">:</div>
          <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-xl p-4 min-w-[80px] shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-medium opacity-90">Min</div>
          </div>
          <div className="text-red-500 text-2xl font-bold animate-pulse">:</div>
          <div className="bg-gradient-to-br from-blue-500 to-green-600 text-white rounded-xl p-4 min-w-[80px] shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-2xl font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-medium opacity-90">Sec</div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 font-medium">
            ⏰ Don&apos;t miss out on this amazing deal!
          </p>
        </div>
      </div>
    </div>
  );
}
