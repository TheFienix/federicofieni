var
assign          = require('lodash.assign'),
browserSync     = require('browser-sync').create(),
concat          = require('gulp-concat'),
cssnano         = require('gulp-cssnano'),
cssnext         = require('postcss-cssnext'),
del             = require('del'),
fingerprint     = require('gulp-fingerprint'),
gulp            = require('gulp'),
gulpFrontMatter = require('gulp-front-matter'),
plumber         = require('gulp-plumber'),
postcss         = require('gulp-postcss'),
precss          = require('precss'),
rev             = require('gulp-rev'),
sourcemaps      = require('gulp-sourcemaps')
;

var env = process.env.GULP_ENV,
cssPlugins = [
  cssnext,
  precss
],
jsDeps = ['src/scripts/*.js'];


gulp.task('clean:css',function(){
  return del([
    'docs/css/*'
  ]);
});

gulp.task('css:build',['clean:css'],function(){
  return gulp.src('./styles/*.css')
  .pipe(postcss(cssPlugins))
  .pipe(cssnano())
  .pipe(gulp.dest('docs/css'))
  .pipe(gulp.dest('src'));
});

gulp.task('css:dev',function () {
  return gulp.src('./styles/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss(cssPlugins))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('docs/css'))
  .pipe(browserSync.stream());
});

gulp.task('js:dev',function(){
  return gulp.src(jsDeps)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('docs/js'));
});

gulp.task('js:build',function(){
  return gulp.src(jsDeps)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('docs/js'));
});

gulp.task('browser-reload',['js:dev'],function(done){
  browserSync.reload();
  done();
});

gulp.task('serve',function(){
  browserSync.init({
    server: "./docs",
    port: 8990,
    open: false,
    notify: false
  });

  gulp.watch('./styles/*.css',['css:dev']);
  gulp.watch('./scripts/*.js',['js:dev'],['browser-reload']);
  gulp.watch('./docs/**/*.html',['browser-reload']);
});

gulp.task('default',['serve']);
gulp.task('build',['css:build','js:build']);
