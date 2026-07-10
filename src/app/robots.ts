import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*?sort=price*', '/*?filter=*'],
    },
    sitemap: 'https://www.emirdenizliotokiralama.com/sitemap.xml',
  };
}
