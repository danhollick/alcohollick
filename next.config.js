/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
})
module.exports = withMDX({
  ...nextConfig,
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
// module.exports = nextConfig/
