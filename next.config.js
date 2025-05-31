/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [new URL('https://badge.cps.sp.gov.br/_files/60ecbd64c97644179b0a11b8320aa942.png')],
  },
  trailingSlash: false, 
};

module.exports = nextConfig;
