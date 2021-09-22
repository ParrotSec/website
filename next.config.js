/* eslint-disable @typescript-eslint/no-var-requires */
const optimizedImages = require('next-optimized-images')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ['jpeg', 'png']
    }
  ],
  {
    webpack: config => {
      config.module.rules = [
        ...config.module.rules,
        {
          test: /\.svg$/,
          use: {
            loader: '@svgr/webpack',
            options: {
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
              }
            }
          }
        }
      ]

      // Important: return the modified config
      return config
    }
  }
])
