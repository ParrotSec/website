import path from 'path'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  rules: [
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }
    }
  ],
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
    'jss-provider'
  ]
}
