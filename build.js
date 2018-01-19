const postscss = require('postscss');

postscss([
    require('autoprefixer')({ browsers: 'last 2 versions' }),
    require('cssnano')()
]).processMany([{
    from: 'src/main.scss',
    to: 'dist/simple-tooltips.css'
}, {
    from: 'test/preview.scss',
    to: 'test/preview.css'
}]);