// sitemap-builder.js

const Sitemap = require('react-router-sitemap').default;
const path = require('path');

function generateSitemap() {
  return new Sitemap(require('./src/routes').default) // <- your route config
    .build('https://prateeksrivastava.netlify.app')
    .save(path.resolve(__dirname, 'public', 'sitemap.xml'));
}

generateSitemap();
