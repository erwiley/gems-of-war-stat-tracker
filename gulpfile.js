const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const purgecss = require('gulp-purgecss');
concat = require('gulp-concat');
terser = require('gulp-terser');


function css() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename(function (path) {
      path.extname = ".min.css";
    }))
    // .pipe(
    //   purgecss({
    //     content: ['public/**/*.html']
    //   })
    // )
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.stream());
};

function js() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(gulp.dest('docs/js'));
};

function watch() {
  browserSync.init({
    server: {
      baseDir: "./docs",
      index: "/index.html"
    }
  });
  gulp.watch('docs/scss/**/*.scss', css)
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
};

exports.css = css;
exports.js = js;
exports.watch = watch;