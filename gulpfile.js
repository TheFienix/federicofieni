var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss')
    ;


gulp.task('css',function () {
  var processors = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnext,
    precss
  ];
  gulp.src('./src/styles/*.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./docs/css'));
});
