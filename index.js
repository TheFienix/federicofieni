var Metalsmith  = require('metalsmith'),
markdown        = require('metalsmith-markdown'),
layouts         = require('metalsmith-layouts'),
permalinks      = require('metalsmith-permalinks'),
drafts          = require('metalsmith-drafts'),
writemetadata   = require('metalsmith-writemetadata'),
debug           = require('metalsmith-debug');

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
.use(permalinks({
  pattern: 'illustrations/:title',
  date: 'YYYY/MM/DD',
  // linksets: [{
  //   match: {collection: 'illustrations'},
  //   pattern: '/illustrations/:date/:title'
  // }]
}))
.use(layouts({
  engine: 'handlebars',
  partials: 'partials'
}))
.use(writemetadata({
  pattern: ['**/*'],
  // ignorekeys: ['next','previous'],
  bufferencoding: 'utf8'
}))
.use(debug({ // Use setting up an environment variable DEBUG=metalsmith:*
  log: "first debug",      // any comment you like
  metadata: false,         // default: true
  source: false,           // default: true
  destination: false,      // default: true
  files: true,             // default: true
  match: "**/*.md"         // default: all files
}))
.build(function(err, files){
  if (err) { throw err; }
});
