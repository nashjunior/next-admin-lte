const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
 { reactStrictMode: !isProd},

 {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
 },
[withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  }
})]])

