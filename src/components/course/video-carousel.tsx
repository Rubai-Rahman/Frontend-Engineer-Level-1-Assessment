/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Medium } from '@/types/course.type';

interface VideoCarouselProps {
  videos: Medium[];
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoList = videos.filter((v) => v.resource_type === 'video');

  if (videoList.length === 0) return null;

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
    setIsPlaying(false);
  };

  const currentVideo = videoList[currentIndex];
  return (
    <div className="bg-white  shadow-lg overflow-hidden">
      <div className="relative p-1">
        {/* Main Video Display */}
        <div className="relative aspect-video bg-gray-900">
          {!isPlaying ? (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={
                  currentVideo.thumbnail_url ||
                  `https://img.youtube.com/vi/${currentVideo.resource_value}/maxresdefault.jpg`
                }
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                <div className="bg-muted rounded-full p-4 group-hover:scale-110 transition-transform border border-border/20 ">
                  <Play className="w-8 h-8 text-primary ml-1" fill="green" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.resource_value}?autoplay=1`}
              title="Course video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {/* Navigation Arrows */}
          {videoList.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={prevVideo}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={nextVideo}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>

        {/* Video Thumbnails */}
        {videoList.length > 1 && (
          <div className="p-4">
            <div className="flex gap-2 flex-wrap">
              {videoList.map((video, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 relative ${
                    index === currentIndex
                      ? 'ring-2 ring-primary rounded-xl'
                      : ''
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
                >
                  <img
                    src={
                      video.thumbnail_url ||
                      `https://img.youtube.com/vi/${video.resource_value}/mqdefault.jpg`
                    }
                    alt={`Video ${index + 1}`}
                    className="w-15 h-12 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                    <Play className="w-3 h-3 text-white" fill="white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Video Counter */}
        {videoList.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {currentIndex + 1} / {videoList.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;
