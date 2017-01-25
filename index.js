var Metalsmith  = require('metalsmith'),
markdown        = require('metalsmith-markdown'),
layouts         = require('metalsmith-layouts'),
permalinks      = require('metalsmith-permalinks'),
drafts          = require('metalsmith-drafts'),
writemetadata   = require('metalsmith-writemetadata');


Metalsmith(__dirname)
.metadata({
  title:          "Federico Fieni - Digital illustrator",
  description:    "Art portfolio",
  generator:      "Metalsmith",
  url:            "http://www.federicofieni.com"
})
.source('./src') // already defaults to ./src
.destination('./docs')
.clean(true)
.use(markdown())
.use(permalinks())
.use(layouts({
  engine: 'handlebars',
  partials: 'partials'
}))
.use(writemetadata({
  pattern: ['**/*'],
  ignorekeys: ['next','previous'],
  bufferencoding: 'utf8'
}))
.build(function(err, files){
  if (err) { throw err; }
});
