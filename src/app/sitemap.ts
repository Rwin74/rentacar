import { MetadataRoute } from 'next';
import { cars } from '@/data/cars';
import { knowledgeArticles } from '@/data/knowledge';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.emirdenizliotokiralama.com';
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: \`\${baseUrl}/araclar\`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/bilgibankasi\`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/sss\`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Hizmet Sayfaları
    {
      url: \`\${baseUrl}/kurumsal-filo-kiralama\`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/denizli-rent-a-car\`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: \`\${baseUrl}/denizli-arac-kiralama\`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: \`\${baseUrl}/denizli-oto-kiralama\`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: \`\${baseUrl}/cardak-havalimani-arac-kiralama\`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: \`\${baseUrl}/pamukkale-arac-kiralama\`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/merkezefendi-arac-kiralama\`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ];

  const carPages: MetadataRoute.Sitemap = cars.map((car) => ({
    url: \`\${baseUrl}/arac-kiralama/\${car.slug}\`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = knowledgeArticles.map((article) => ({
    url: \`\${baseUrl}/bilgibankasi/\${article.slug}\`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...carPages, ...blogPages];
}
