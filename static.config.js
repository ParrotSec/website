import path from 'path'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-reach-router',
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages')
      }
    ],
    'react-static-plugin-sitemap',
    'jss-provider',
    [
      'react-static-plugin-svgr',
      {
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              prefixIds: false
            },
            {
              removeViewBox: false
            },
            {
              cleanupIDs: false
            }
          ]
        },
        memo: true
      }
    ]
  ]
}
