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
  adaptiveImages: {
    imagesKey: 'images',
    mapKey: 'imagesMap',
    imageWidths: [1200, 800, 500],
    imageSizes: ['100vw'],
    defaultSize: 800,
    namingPattern: '{dir}{name}-{size}{ext}', // foo/bar-200.jpg,...
    srcsetPattern: '{url} {size}w', // foo/bar-200.jpg 200w,...
    htmlFileGlob: '**/*.html',
    htmlImageSelector: 'img'
  },
  sharp: [{
    namingPattern:'{dir}{name}-1200{ext}',
    methods: [
      {
        name: 'resize',
        args: [ null, 1200 ]
      },
      // {
      //   name: 'overlayWith',
      //   args: [
      //     './img/L.png',
      //     {
      //       top: 10,
      //       left: 10,
      //     }
      //   ]
      // }
    ]
  },
  {
    namingPattern:'{dir}{name}-800{ext}',
    methods: [
      {
        name: 'resize',
        args: [ null, 800 ]
      },
      // {
      //   name: 'overlayWith',
      //   args: [
      //     './img/M.png',
      //     {
      //       top: 10,
      //       left: 10,
      //     }
      //   ]
      // }
    ]
  },{
    namingPattern:'{dir}{name}-500{ext}',
    methods: [
      {
        name: 'resize',
        args: [ null, 500 ]
      },
      // {
      //   name: 'overlayWith',
      //   args: [
      //     './img/S.png',
      //     {
      //       top: 10,
      //       left: 10,
      //     }
      //   ]
      // }
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
    directory: 'layouts',
    engine: 'handlebars',
    partials: 'partials'
  },
  writemetadata: {
    pattern: ['**/*'],
    ignorekeys: ['next','previous'],
    bufferencoding: 'utf8'
  },
  debug: { // Use setting up an environment variable DEBUG=metalsmith:*
    log: "first debug",      // any comment you like
    metadata: true,         // default: true
    source: false,           // default: true
    destination: false,      // default: true
    files: true,             // default: true
    match: "**/*.md"         // default: all files
  }
};

module.exports = metalsmithConf;
