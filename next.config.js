module.exports = {
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
