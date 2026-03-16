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
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    };
}
