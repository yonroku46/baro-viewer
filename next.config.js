/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}
module.exports = nextTranslate()
