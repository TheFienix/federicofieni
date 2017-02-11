var
browserSync     = require('browser-sync').create(),
collections     = require('metalsmith-collections'),
concat          = require('gulp-concat'),
cssnano         = require('gulp-cssnano'),
cssnext         = require('postcss-cssnext'),
debug           = require('metalsmith-debug'),
del             = require('del'),
drafts          = require('metalsmith-drafts'),
fingerprint     = require('gulp-fingerprint'),
gulp            = require('gulp'),
gulpFrontMatter = require('gulp-front-matter'),
assign          = require('lodash.assign'),
gulpsmith       = require('gulpsmith'),
layouts         = require('metalsmith-layouts'),
markdown        = require('metalsmith-markdown'),
metalsmith      = require('gulp-metalsmith'),
metalsmithConf = require('./metalsmith.conf'),
permalinks      = require('metalsmith-permalinks'),
plumber         = require('gulp-plumber'),
postcss         = require('gulp-postcss'),
precss          = require('precss'),
rev             = require('gulp-rev'),
sourcemaps      = require('gulp-sourcemaps'),
writemetadata   = require('metalsmith-writemetadata')
;

gulp.task('clean',function(){
  del('docs/**');
});

gulp.task('metalsmith',['clean'], function(done){
  return gulp.src('./src/**/*')

  .pipe(gulpFrontMatter().on("data",function(file){
    assign(file, file.frontMatter);
    delete file.frontMatter;
  }))

  .pipe(gulpsmith()
  // .metadata(metalsmithConf.metadata)
  // .use(collections(metalsmithConf.collections))
  // .use(permalinks(metalsmithConf.permalinks))
  .use(layouts(metalsmithConf.layouts))
  .use(markdown())
  // .use(writemetadata(metalsmithConf.writemetadata))
  // .use(debug(metalsmithConf.debug))
).pipe(gulp.dest('./docs'));
// .on('end',done);
});


gulp.task('css',function () {

  var plugins = [
    cssnext,
    precss
  ];

  return gulp.src('./styles/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss(plugins))
  .pipe(cssnano())
  .pipe(sourcemaps.write('.'))
  .pipe(rev())
  .pipe(gulp.dest('docs/css'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('src'))
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
    server: "./docs",
    open: false
  });

  gulp.watch('./styles/*.css',['css']);
  gulp.watch('./scripts/*.js',['js-watch']);

});

gulp.task('default',['metalsmith']);
