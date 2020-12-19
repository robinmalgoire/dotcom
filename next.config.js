const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPreact = require('next-plugin-preact')

const withCSS = require('@zeit/next-css')

module.exports = withPlugins([[withBundleAnalyzer], [withCSS], [withPreact]], {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    })

    return config
  },
})
