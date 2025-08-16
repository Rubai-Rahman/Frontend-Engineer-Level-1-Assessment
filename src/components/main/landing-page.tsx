'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from './hero-section';
import SkillsCategorySection from './skills-category-section';
import AdmissionJobsSection from './admission-jobs-section';
import StatsSection from './stats-section';

interface Taxonomy {
  id: string;
  slug: string;
  type: string;
  name: string;
  media: {
    bannar_img?: string;
    icon?: string;
    sqr_img?: string;
    thumbnail_img?: string;
  };
  product_count: number;
}

interface Product {
  title: string;
  id: string;
  slug: string;
  modality: string;
  media: Array<{
    name: string;
    resource_type: string;
    resource_value: string;
  }>;
  price_type: string;
  price_details: {
    text: string;
  };
  instructor_text: string;
}

interface ProductTaxonomy extends Taxonomy {
  products: Product[];
}

export default function LandingPage() {
  const t = useTranslations('HomePage');
  const [categories, setCategories] = useState<Taxonomy[]>([]);
  const [admissionCourses, setAdmissionCourses] = useState<ProductTaxonomy[]>(
    []
  );
  const [jobsCourses, setJobsCourses] = useState<ProductTaxonomy[]>([]);
  const [skillsCourses, setSkillsCourses] = useState<ProductTaxonomy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await fetch(
          'https://api.10minuteschool.com/discovery-service/api/v1/taxonomies?vertical=skills'
        );
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData.data.taxonomies || []);

        // Fetch admission courses
        const admissionResponse = await fetch(
          'https://api.10minuteschool.com/discovery-service/api/v1/taxonomies/products?vertical=admission&product_limit=10&group_by=vertical'
        );
        const admissionData = await admissionResponse.json();
        setAdmissionCourses(admissionData.data.taxonomies || []);

        // Fetch jobs courses
        const jobsResponse = await fetch(
          'https://api.10minuteschool.com/discovery-service/api/v1/taxonomies/products?vertical=jobs-prep&product_limit=10&group_by=vertical'
        );
        const jobsData = await jobsResponse.json();
        setJobsCourses(jobsData.data.taxonomies || []);

        // Fetch skills courses (language learning)
        const skillsResponse = await fetch(
          'https://api.10minuteschool.com/discovery-service/api/v1/taxonomies/products?vertical=skills&segment=language-learning&product_limit=10'
        );
        const skillsData = await skillsResponse.json();
        setSkillsCourses(skillsData.data.taxonomies || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SkillsCategorySection categories={categories} />
      <AdmissionJobsSection
        admissionCourses={admissionCourses}
        jobsCourses={jobsCourses}
      />
      <StatsSection />
    </div>
  );
}
