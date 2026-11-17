import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'ik.imagekit.io', 'cdn-icons-png.flaticon.com']
    }
};

export default nextConfig;
