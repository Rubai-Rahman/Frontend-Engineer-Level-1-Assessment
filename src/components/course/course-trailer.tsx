import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Medium } from '@/lib/types';
import { Play } from 'lucide-react';

interface CourseTrailerProps {
  video: Medium;
}

export function CourseTrailer({ video }: CourseTrailerProps) {
  if (!video) return null;

  // For API data, video.resource_value contains the YouTube video ID
  const videoId = video.resource_value || video.url;
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5 text-blue-600" />
          Course Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={video.name || 'Course Preview'}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : video.thumbnail_url ? (
            <img
              src={video.thumbnail_url}
              alt={video.name || 'Course Preview'}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <Play className="h-12 w-12" />
            </div>
          )}
        </div>
        {video.name && (
          <p className="mt-4 text-sm text-gray-600">{video.name}</p>
        )}
      </CardContent>
    </Card>
  );
}
