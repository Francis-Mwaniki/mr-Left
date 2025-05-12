/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              pathname: '/dunssu2gi/**',
            },
          ],
      },
};

export default nextConfig;
