var
AdaptiveImages  = require('metalsmith-adaptive-images'),
collections     = require('metalsmith-collections'),
conf            = require('./metalsmith.conf'),
debug           = require('metalsmith-debug'),
drafts          = require('metalsmith-drafts'),
msIf            = require('metalsmith-if'),
images          = require('metalsmith-project-images'),
imagemin        = require('metalsmith-imagemin'),
layouts         = require('metalsmith-layouts'),
markdown        = require('metalsmith-markdown'),
Metalsmith      = require('metalsmith'),
permalinks      = require('metalsmith-permalinks'),
sharp           = require('metalsmith-sharp'),
writemetadata   = require('metalsmith-writemetadata')
;

adaptiveImages = AdaptiveImages(conf.adaptiveImages);

var buildImages = process.env.BUILD_IMAGES;

Metalsmith(__dirname)
.metadata(conf.metadata)
.source('./src') // already defaults to ./src
// .ignore('css')
.destination('./docs')
.clean(false)
.use(collections(conf.collections))
.use(msIf(
  buildImages,
  sharp(conf.sharp)
))
.use(images(conf.images))
.use(permalinks(conf.permalinks))
.use(adaptiveImages.processImages)
.use(markdown())
.use(layouts(conf.layouts))
// .use(writemetadata(conf.writemetadata))
.use(debug(conf.debug))
.build(function(err, files){
  if (err) { throw err; }
});
