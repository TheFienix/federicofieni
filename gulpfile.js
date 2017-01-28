var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssnext = require('postcss-cssnext'),
sourcemaps = require('gulp-sourcemaps'),
precss = require('precss')
;

gulp.task('css',function () {

  var plugins = [
    cssnext,
    precss
  ];

  gulp.src('./src/styles/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss(plugins))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./docs/css'));
});

gulp.task('js',function(){

});

gulp.task('watch',function(){
  gulp.watch('./src/styles/*.css',['css']);
  gulp.watch('./src/scripts/*.js',['js']);
});

gulp.task('default',['watch']);
