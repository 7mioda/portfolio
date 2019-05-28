const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babel = require("babelify");
const buffer = require("vinyl-buffer");
const gulp = require('gulp');


function css() {
    return src('css/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest('build/css'))
}

function js() {
    const bundler = browserify(['js/polyfill.js','js/app.js'], { debug: true }).transform(babel);
    return bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('js/app.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build'));
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
