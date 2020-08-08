const gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass');
const cssbeautify = require('gulp-cssbeautify');
const fileinclude = require('gulp-file-include');
const sourcemaps = require('gulp-sourcemaps');

function style() {
  return gulp.src('./src/assets/sass/app.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/assets/css'))
};


function htmlfileinclude() {
  return gulp.src('./src/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./src/'));
}

function watch() {
  gulp.watch('./src/partial-html/*.html', htmlfileinclude);
  gulp.watch('./src/html/*.html', htmlfileinclude);
  gulp.watch('./src/assets/sass/**/*.sass', style);
}

exports.watch = watch;