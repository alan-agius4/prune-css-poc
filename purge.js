const { PurgeCSS } = require('purgecss')

new PurgeCSS().purge({
  content: [
    'dist/**/*.html',
    'dist/**/*.js',
  ],
  css: ['dist/**/*.css'],
  safeList: [],
}).then(d => console.log(d))