import styled from 'styled-components'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Page from '../components/page'
import SEO from '../components/seo'
import { Heading, SubHeading, MassiveHeading, Title } from '../components/text'
import { Stack } from '../components/layout'
import PortableText from '../components/portableText'
import { colors } from '../utils/colors'

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
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      title
      description
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const BlogWrapper = styled.div`
  margin: 56px 0px 108px 0px;
  /* max-width: 680px; */
  display: grid;
  justify-self: center;
  grid-row-gap: 40px;
  align-content: start;
  justify-content: center;
`

const BlogPost = ({ description, title, _rawBody, mainImage }) => (
  <BlogWrapper>
    <Img className="fadeInUpSlight" fluid={mainImage.asset.fluid} />
    <MassiveHeading className="fadeInUpSlight">{title}</MassiveHeading>
    <Heading className="fadeInUpSlight" color={colors.medium_grey}>
      {description}
    </Heading>
    <PortableText className="fadeInUpSlight" blocks={_rawBody} />
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
          image={post.mainImage.asset.url}
        />
      )}
      {post && <BlogPost {...post} />}
    </Page>
  )
}

export default BlogPostTemplate
