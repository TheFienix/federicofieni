var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssnext = require('postcss-cssnext'),
sourcemaps = require('gulp-sourcemaps'),
precss = require('precss'),
concat = require('gulp-concat'),
browserSync = require('browser-sync').create()
;

gulp.task('css',function () {

  var plugins = [
    cssnext,
    precss
  ];
  console.log('inject css');
  return gulp.src('./src/styles/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss(plugins))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./docs/css'))
  .pipe(browserSync.stream());
});

gulp.task('js',function(){
  var dependencies = [];
  return gulp.src(['src/scripts/*.js'])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('docs/js'));
});

gulp.task('js-watch',['js'],function(done){
  browserSync.reload();
  done();
});

gulp.task('serve',function(){

  browserSync.init({
    server: "./docs"
  });

  gulp.watch('./src/styles/*.css',['css']);
  gulp.watch('./src/scripts/*.js',['js-watch']);

});

gulp.task('default',['serve']);
