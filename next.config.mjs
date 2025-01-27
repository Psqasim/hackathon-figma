/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=60',
          },
        ],
      },
    ];
  }
};

export default config;

