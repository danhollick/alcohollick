import styled from 'styled-components'
import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'
import SEO from '../components/seo'
import { Heading, SubHeading } from '../components/text'
import { Stack } from '../components/layout'
import PortableText from '../components/portableText'

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
          url
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
      _rawBody
    }
  }
`

const BlogWrapper = styled.div`
  max-width: 600px;
  display: grid;
`

const BlogPost = ({ description, title, _rawBody }) => (
  <BlogWrapper>
    <Stack className="AlignStart">
      <Heading>{title}</Heading>
      <SubHeading>{description}</SubHeading>
      <PortableText blocks={_rawBody} />
    </Stack>
  </BlogWrapper>
)

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

      {post && <BlogPost {...post} />}
    </Page>
  )
}

export default BlogPostTemplate
