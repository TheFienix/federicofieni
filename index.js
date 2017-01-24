var Metalsmith  = require('metalsmith'),
markdown    = require('metalsmith-markdown'),
layouts     = require('metalsmith-layouts'),
permalinks  = require('metalsmith-permalinks');


Metalsmith(__dirname)
.metadata({
  title:          "Federico Fieni - Digital illustrator",
  description:    "Art portfolio",
  generator:      "Metalsmith",
  url:            "http://www.federicofieni.com"
})
.source('./src')
.destination('./docs')
.clean(true)
.use(markdown())
.use(permalinks())
.use(layouts({
  engine: 'handlebars',
  partials: 'partials'
}))
.build(function(err, files){
  if (err) { throw err; }
});
