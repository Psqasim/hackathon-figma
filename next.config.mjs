export default {
    images: {
      domains: ['cdn.sanity.io'],
    },
    headers() {
      return [
        {
          source: '/(.*)', // Apply to all routes
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=60, stale-while-revalidate=60', // Cache for 60 seconds and revalidate after that
            },
          ],
        },
      ];
    },
  };
  