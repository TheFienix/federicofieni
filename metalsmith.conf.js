var metalsmithConf = {
  metadata: {
    title:          "Federico Fieni - Digital illustrator",
    description:    "Art portfolio",
    generator:      "Metalsmith",
    url:            "http://www.federicofieni.com"
  },
  collections: {
    illustrations: {
      pattern: 'illustrations/**/*.md',
      sortBy: 'date',
      reverse: true,
      metadata: {
        name: 'Illustrations',
        description: 'Latest digital painting works.'
      }
    }
  },
  images: {
    pattern: '**/*.md'
  },
  sharp: [{
    namingPattern:'{dir}{name}-large{ext}',
    methods: [
      {
        name: 'resize',
        args: [ null, 1200 ]
      },
      {
        name: 'overlayWith',
        args: [
          './img/L.png',
          {
            top: 10,
            left: 10,
          }
        ]
      }
    ]
  },
  {
    namingPattern:'{dir}{name}-medium{ext}',
    methods: [
      {
        name: 'resize',
        args: [ null, 800 ]
      },
      {
        name: 'overlayWith',
        args: [
          './img/M.png',
          {
            top: 10,
            left: 10,
          }
        ]
      }
    ]
  },{
    namingPattern:'{dir}{name}-small{ext}',
    methods: [
      {
        name: 'resize',
        args: [ null, 500 ]
      },
      {
        name: 'overlayWith',
        args: [
          './img/S.png',
          {
            top: 10,
            left: 10,
          }
        ]
      }
    ]
  }],
  permalinks: {
    pattern: 'illustrations/:title',
    date: 'YYYY/MM/DD',
    // linksets: [{
    //   match: {collection: 'illustrations'},
    //   pattern: '/illustrations/:date/:title'
    // }]
  },
  layouts: {
    directory: 'layouts/',
    engine: 'handlebars',
    partials: 'partials'
  },
  writemetadata: {
    pattern: ['**/*'],
    ignorekeys: ['next','previous'],
    // bufferencoding: 'utf8'
  },
  debug: { // Use setting up an environment variable DEBUG=metalsmith:*
    log: "first debug",      // any comment you like
    metadata: false,         // default: true
    source: false,           // default: true
    destination: false,      // default: true
    files: true,             // default: true
    // match: "**/*.md"         // default: all files
  }
};

module.exports = metalsmithConf;
