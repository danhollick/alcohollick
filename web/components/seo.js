import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function SEO({ description, title, image, url }) {
  const siteUrl = url || 'https://www.alcohollick.com'
  const metaDescription =
    description ||
    `Persoal site of Dan Hollick, a Product Designer and amatuer coder from South Africa living in sunny Norway.`
  const previewImage =
    image ||
    'https://cdn.sanity.io/images/h2w4qpx8/production/8c8ab9aff37b358a8db3bf9a6555964b706d8a78-2870x1486.png?h=400&fit=max'
  const titleTemplate = title || 'alcohollick'

  return (
    <Head>
      <title>{titleTemplate}</title>
      <description>{metaDescription}</description>
      <meta property="og:image" content={previewImage} />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />
      <meta property="twitter:image" content={previewImage} />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:creator" content="@danhollick" />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={previewImage} />
    </Head>
  )
}

SEO.defaultProps = {
  meta: [],
  description: `Persoal site of Dan Hollick, a Product Designer and amatuer coder from South Africa living in sunny Norway.`,
}

SEO.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
