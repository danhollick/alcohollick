import styled from 'styled-components'
import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'
// import Container from '../components/container'
// import GraphQLErrorList from '../components/graphql-error-list'

import SEO from '../components/seo'
import { Heading, SubHeading } from '../components/text'
import { Stack } from '../components/layout'

// import { toPlainText } from '../lib/helpers'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          fluid {
            src
            aspectRatio
            base64
            sizes
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
      title
      description
      slug {
        current
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  return (
    <Page>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={JSON.stringify(post.description)}
          image={post.mainImage}
        />
      )}

      {errors && <div>{/* <GraphQLErrorList errors={errors} /> */}</div>}

      {post && (
        <Stack className="AlignStart">
          <Heading>{post.title}</Heading>
          <SubHeading>{post.description}</SubHeading>
        </Stack>
      )}
    </Page>
  )
}

export default BlogPostTemplate
