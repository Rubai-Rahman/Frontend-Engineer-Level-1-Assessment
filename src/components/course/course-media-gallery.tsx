import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Medium } from '@/lib/types';
import { Play, Image as ImageIcon, Download } from 'lucide-react';
import { useState } from 'react';

interface CourseMediaGalleryProps {
  media: Medium[];
}

export function CourseMediaGallery({ media }: CourseMediaGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<Medium | null>(null);

  if (!media || media.length === 0) {
    return null;
  }

  // Group media by type
  const videos = media.filter((m) => m.resource_type === 'video');
  const images = media.filter((m) => m.resource_type === 'image');

  const renderMediaItem = (item: Medium, index: number) => {
    const isVideo = item.resource_type === 'video';
    const thumbnail =
      item.thumbnail_url ||
      (isVideo
        ? `https://img.youtube.com/vi/${item.resource_value}/maxresdefault.jpg`
        : item.resource_value);

    return (
      <div
        key={`${item.name}-${index}`}
        className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-100"
        onClick={() => setSelectedMedia(item)}
      >
        <div className="aspect-video">
          <img
            src={thumbnail}
            alt={item.name || 'Media item'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
          {isVideo ? (
            <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          ) : (
            <ImageIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </div>

        {/* Media type badge */}
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 text-xs rounded ${
              isVideo ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
            }`}
          >
            {isVideo ? 'Video' : 'Image'}
          </span>
        </div>

        {/* Title */}
        {item.name && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
            <p className="text-white text-sm font-medium truncate">
              {item.name}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-blue-600" />
            Course Media Gallery
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Videos Section */}
          {videos.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Videos ({videos.length})
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video, index) => renderMediaItem(video, index))}
              </div>
            </div>
          )}

          {/* Images Section */}
          {images.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Images ({images.length})
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {images.map((image, index) => renderMediaItem(image, index))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal for selected media */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {selectedMedia.name || 'Media Preview'}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedMedia(null)}
              >
                Close
              </Button>
            </div>

            <div className="p-4">
              {selectedMedia.resource_type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMedia.resource_value}`}
                    title={selectedMedia.name || 'Video'}
                    className="w-full h-full rounded"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={selectedMedia.resource_value}
                    alt={selectedMedia.name || 'Image'}
                    className="max-w-full max-h-[60vh] object-contain mx-auto rounded"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
