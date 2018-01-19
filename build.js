var postscss = require('postscss');

postscss([postcss plugins]).process({
  from: 'src/main.scss',
  to: 'dist/simple-tooltips.css'
});
