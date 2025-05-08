// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // como você publicou em /Portfolio
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio/' : '',
  trailingSlash: true,
  // se quiser exportar tudo como estático:
  output: 'export',
};
