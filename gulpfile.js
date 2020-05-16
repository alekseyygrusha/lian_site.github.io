let gulp = require('gulp'),
  scss = require('gulp-sass'),
  browserSync = require('browser-sync'),
  cssnano = require('gulp-cssnano'),
  // rename = require('gulp-rename'),
  // del = require('del'),
  // imagemin = require('gulp-imagemin'),
  // pngquant = require('imagemin-pngquant'),
  // cache = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer'),
  // gutil = require('gulp-util'),
  // ftp = require('vinyl-ftp'),
  pug = require('gulp-pug');
  // sitemap = require('gulp-sitemap');

gulp.task('scss', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(scss())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app',
    },
    notify: false
  });
});

gulp.task('css-libs', ['scss'], function() {
  return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'pug'], function() {
  gulp.watch('app/scss/**/*.scss', ['scss']);
  gulp.watch('app/**/*.pug', ['pug']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('pug', function () {
  return gulp.src('app/pug/global/**/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('app'))
});

gulp.task('clean', function() {
  return del.sync('dist');
});




gulp.task('clear', function(callback) {
  return cache.clearAll();
})





gulp.task('default', ['watch']);