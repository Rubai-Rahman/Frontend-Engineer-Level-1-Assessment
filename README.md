# IELTS Course Landing Page - 10 Minute School

A modern, responsive landing page for the IELTS Course by Munzereen Shahid, built with Next.js 15, TypeScript, TailwindCSS, TanStack Query, and shadcn/ui components.

## 🚀 Features

### Core Technologies

- **Next.js 15** - React framework with App Router, SSR, and ISR
- **TypeScript** - Full type safety throughout the application
- **TailwindCSS** - Utility-first CSS framework for styling
- **TanStack Query** - Powerful data fetching and caching
- **Axios** - HTTP client with interceptors
- **shadcn/ui** - Beautiful, accessible UI components
- **Radix UI** - Headless UI primitives

### Key Features

- ✅ **Server-Side Rendering (SSR)** - Fast initial page loads
- ✅ **Incremental Static Regeneration (ISR)** - Optimal performance with fresh content
- ✅ **SEO Optimization** - Dynamic meta tags from API data
- ✅ **Localization** - English and Bengali language support
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **API Integration** - Real-time data from 10 Minute School API
- ✅ **Error Handling** - Comprehensive error boundaries and fallbacks
- ✅ **Loading States** - Smooth user experience with loading indicators
- ✅ **Docker Support** - Containerized deployment

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/revalidate/          # ISR revalidation endpoint
│   ├── product/[slug]/          # Dynamic course pages
│   ├── layout.tsx               # Root layout with SEO
│   └── page.tsx                 # Home page (redirects to IELTS course)
├── components/
│   ├── course/                  # Course-specific components
│   │   ├── course-header.tsx    # Course title and description
│   │   ├── course-trailer.tsx   # YouTube video player
│   │   ├── course-instructors.tsx # Instructor information
│   │   ├── course-features.tsx  # Course layout features
│   │   ├── course-pointers.tsx  # Learning outcomes
│   │   ├── course-details.tsx   # Course details and info
│   │   ├── course-checklist.tsx # Course includes checklist
│   │   ├── course-cta.tsx       # Call-to-action sidebar
│   │   └── course-page-client.tsx # Client-side course page
│   ├── providers/               # React providers
│   │   └── query-provider.tsx   # TanStack Query provider
│   └── ui/                      # shadcn/ui components
├── hooks/                       # Custom React hooks
│   └── use-course.ts           # Course data fetching hooks
├── lib/                         # Utility libraries
│   ├── api.ts                  # Axios configuration
│   ├── types.ts                # TypeScript interfaces
│   └── services/               # API service functions
│       └── course.service.ts   # Course API operations
└── styles/                     # Global styles
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ielts-course-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**

   ```bash
   cp .env.example .env.local
   ```

   Update the environment variables as needed.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

### Build and run with Docker

```bash
# Build the Docker image
docker build -t ielts-course-app .

# Run the container
docker run -p 3000:3000 ielts-course-app
```

### Using Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=https://api.10minuteschool.com/discovery-service/api/v1
```

## 🔧 API Integration

The application integrates with the 10 Minute School API:

- **Endpoint**: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`
- **Headers**: `X-TENMS-SOURCE-PLATFORM: web`
- **Query Params**: `lang=en|bn`

### API Response Structure

```typescript
interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML content
  media: Medium[]; // Videos, images
  checklist: Checklist[]; // Course includes
  seo: Seo; // SEO metadata
  cta_text: CtaText; // Call-to-action text
  sections: Section[]; // Course content sections
}
```

## 📊 Component Features

### Course Header

- Dynamic title and description from API
- HTML content rendering
- Responsive gradient background

### Course Trailer

- YouTube video integration
- Responsive video player
- Automatic video ID extraction

### Course Instructors

- Instructor profiles and information
- Dynamic content from sections with type='instructor'
- Avatar images and bio information

### Course Features

- Course layout and structure
- Numbered feature list
- Content from sections with type='features'

### Course Pointers

- Learning outcomes and objectives
- Checkmark icons for visual appeal
- Content from sections with type='pointers'

### Course Details

- Comprehensive course information
- Structured data display
- Content from sections with type='about'

### Course Checklist

- What's included in the course
- Visual checkmarks
- Dynamic checklist from API

### Course CTA

- Sticky sidebar with pricing
- Call-to-action buttons
- Course features and guarantees
- Fixed price of ৳1000 as specified

## 🌐 Localization

The application supports both English and Bengali:

- Language switcher in the header
- API calls with `lang` parameter
- Seamless language switching with loading states
- Preserved user language preference

## 🔍 SEO Features

- **Dynamic Meta Tags** - Generated from API SEO data
- **Open Graph Tags** - Social media sharing optimization
- **Twitter Cards** - Enhanced Twitter sharing
- **Canonical URLs** - Proper URL structure
- **Structured Data** - Rich snippets support
- **Server-Side Rendering** - SEO-friendly initial load

## ⚡ Performance Features

- **Server-Side Rendering (SSR)** - Fast initial page loads
- **Incremental Static Regeneration (ISR)** - Cached pages with fresh content
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Next.js Image component
- **Lazy Loading** - Components loaded on demand
- **Caching Strategy** - TanStack Query caching

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Other Platforms

```bash
npm run build
npm start
```

### Docker Production

```bash
docker build -t ielts-course-app .
docker run -p 3000:3000 -e NODE_ENV=production ielts-course-app
```

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Husky for git hooks (optional)

## 📝 Requirements Fulfilled

### ✅ Required Features

- [x] Product title display
- [x] HTML description rendering
- [x] Course instructors section
- [x] YouTube trailer integration
- [x] Default price of ৳1000
- [x] CTA text from API
- [x] Localization (EN/BN)
- [x] Server-side rendering (SSR)

### ✅ Good to Have Features

- [x] Course layout features
- [x] Learning outcomes (pointers)
- [x] Course exclusive features
- [x] Course details section
- [x] Checklist display
- [x] Incremental Static Regeneration (ISR)
- [x] SEO optimization

### ✅ Technical Requirements

- [x] React/Next.js with TypeScript
- [x] TailwindCSS for styling
- [x] TanStack Query for API management
- [x] Axios with interceptors
- [x] shadcn/ui components
- [x] State and props management
- [x] Code splitting and reusable components
- [x] Docker support

## 🎯 Key Focus Areas

1. **Design and Implementation** - Modern, responsive UI following the wireframe
2. **State and Props Management** - Efficient data flow with TanStack Query
3. **TypeScript** - Full type safety throughout the application
4. **Server-side Rendering** - SEO-friendly and fast initial loads
5. **Code Splitting** - Optimized performance with reusable components

## 📞 Support

For any questions or issues, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
