var Metalsmith  = require('metalsmith'),
metalsmithConf = require('./metalsmith.conf'),
markdown        = require('metalsmith-markdown'),
layouts         = require('metalsmith-layouts'),
permalinks      = require('metalsmith-permalinks'),
drafts          = require('metalsmith-drafts'),
writemetadata   = require('metalsmith-writemetadata'),
debug           = require('metalsmith-debug'),
collections     = require('metalsmith-collections');


Metalsmith(__dirname)
.metadata(metalsmithConf.metadata)
.source('./src') // already defaults to ./src
// .ignore('css')
.destination('./docs')
.clean(true)
.use(collections(metalsmithConf.collections))
.use(permalinks(metalsmithConf.permalinks))
.use(layouts(metalsmithConf.layouts))
.use(markdown())
.use(writemetadata(metalsmithConf.writemetadata))
.use(debug(metalsmithConf.debug))
.build(function(err, files){
  if (err) { throw err; }
});
