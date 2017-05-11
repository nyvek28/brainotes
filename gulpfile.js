// import gulp from 'gulp';
// import sass from 'gulp-sass';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const scssFilesPath = './src/scss/**/*.scss';
const jsFilesPath = './src/es6/**/*.js';
const nodePath = './node_modules/';
const jsDependencyPaths = [
  `${nodePath}jquery/dist/jquery.js`,
  `${nodePath}bootstrap-sass/assets/javascripts/bootstrap.js`
];

gulp.task('sass', () => {
  return gulp.src(scssFilesPath)
          .pipe(sourcemaps.init())
          .pipe(sass().on('error', sass.logError))
          .pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', () => {
  gulp.watch(scssFilesPath, ['sass']);
});

gulp.task('js', () => {
  return gulp.src([...jsDependencyPaths, jsFilesPath])
          .pipe(sourcemaps.init())
          .pipe(babel({ presets: ['babel-preset-es2015'].map(require.resolve) }))
          .pipe(concat('bundle.js'))
          .pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('./src/js'));
});

gulp.task('minify:js', () => {
  return gulp.src('./src/js/bundle.js')
              .pipe(uglify())
              .pipe(rename('bundle.min.js'))
              .pipe(gulp.dest('./src/js'))
});

gulp.task('default', ['sass']);
