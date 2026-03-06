import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Vaibhav Yadav | Creative Developer',
        short_name: 'Vaibhav',
        description: 'Vaibhav Yadav — Creative Developer & Security Analyst',
        start_url: '/',
        display: 'standalone',
        background_color: '#121212',
        theme_color: '#121212',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/profile-photo.jpeg',
                sizes: '192x192',
                type: 'image/jpeg',
                purpose: 'maskable',
            },
            {
                src: '/profile-photo.jpeg',
                sizes: '512x512',
                type: 'image/jpeg',
                purpose: 'maskable',
            },
        ],
    };
}
