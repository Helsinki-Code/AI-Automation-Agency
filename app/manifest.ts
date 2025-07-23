import { siteMetadata } from './metadata';

export default function manifest() {
  return {
    name: siteMetadata.title,
    short_name: 'Agentic AI',
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A051E',
    theme_color: '#7C3AED',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}