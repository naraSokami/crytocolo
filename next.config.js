const path = require('path')

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'src/components')
    ],
  },

  reactStrictMode: true,
}