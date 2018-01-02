var metalsmithConf = {
  metadata: {
    title:          "Federico Fieni - Digital artist",
    description:    "Federico Fieni's art portfolio",
    generator:      "Metalsmith",
    url:            "http://www.federicofieni.com",
    ogImage:        "/illustrations/fantastico-mondo-paul/images/Paul-1200.jpg",
    deviantArt:     "http://ff2d.deviantart.com/"
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
    defaultSize: 1200,
    namingPattern: '{dir}{name}-{size}{ext}', // foo/bar-200.jpg,...
    srcsetPattern: '{url} {size}w', // foo/bar-200.jpg 200w,...
    htmlFileGlob: '**/*.html',
    htmlImageSelector: 'img'
  },
  sharp: [
    {
      namingPattern: '{dir}{name}-thumb{ext}',
      methods: [
        {
          name: 'resize',
          args: [ 400, 400 ]
        }
      ]
    },
    {
      namingPattern:'{dir}{name}-1200{ext}',
      methods: [
        {
          name: 'resize',
          args: [ null, 1200 ]
        },
        {
          name: 'overlayWith',
          args: [
            './img/watermark-L.png',
            {
              gravity: 'southwest'
            }
          ]
        }
      ]
    },
    {
      namingPattern:'{dir}{name}-800{ext}',
      methods: [
        {
          name: 'resize',
          args: [ null, 800 ]
        },
        {
          name: 'overlayWith',
          args: [
            './img/watermark-M.png',
            {
              gravity: 'southwest'
            }
          ]
        }
      ]
    },
    {
      namingPattern:'{dir}{name}-500{ext}',
      methods: [
        {
          name: 'resize',
          args: [ null, 500 ]
        },
        {
          name: 'overlayWith',
          args: [
            './img/watermark-S.png',
            {
              gravity: 'southwest'
            }
          ]
        }
      ]
    }],
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
