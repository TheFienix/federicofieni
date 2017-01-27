var gulp = require('gulp'),
postcss = require('gulp-postcss'),
sourcemaps = require('gulp-sourcemaps'),
cssnext = require('postcss-cssnext'),
precss = require('precss')
;

gulp.task('css',function () {
  gulp.src('./src/styles/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    precss,
    cssnext({browsers: ['last 1 version']})
  ]))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./docs/css'));
});
