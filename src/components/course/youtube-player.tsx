'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubePlayerProps {
  videoId: string;
  thumbnail?: string;
  title?: string;
}

export default function YouTubePlayer({
  videoId,
  thumbnail,
  title,
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
      {!isPlaying ? (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={
              thumbnail ||
              `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            }
            alt={title || 'Course trailer'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title || 'Course trailer'}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
