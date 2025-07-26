interface CourseHeaderProps {
  title: string;
  description: string;
}

export function CourseHeader({ title, description }: CourseHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h1>
          <div
            className="text-lg md:text-xl text-blue-100 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}
