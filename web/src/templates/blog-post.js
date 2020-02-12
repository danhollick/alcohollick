import styled from 'styled-components'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Page from '../components/page'
import SEO from '../components/seo'
import { Heading, MassiveHeading, Title } from '../components/text'
import { Stack, UnstyledLink, below } from '../components/layout'
import PortableText from '../components/portableText'
import { colors } from '../utils/colors'
import { PostPreview } from '../components/postPreview'

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
      related {
        title
        slug {
          current
        }
        description
        publishedAt(fromNow: true)
        mainImage {
          asset {
            fluid(maxWidth: 238) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const RelatedModule = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 240px);
  grid-column-gap: 32px;
  justify-content: end;
  ${below.med`
    grid-template-columns: 1fr;
    grid-row-gap:32px;
  `}
`

export const RelatedPosts = ({ className, posts }) => (
  <Stack padding={[10, 0]} className={className}>
    <Title className="JustifyEnd"> Related</Title>
    <RelatedModule>
      {posts.map((post, i) => (
        <UnstyledLink to={`/writing/${post.slug.current || post.slug}/`}>
          <PostPreview key={i} delay={i} {...post} />
        </UnstyledLink>
      ))}
    </RelatedModule>
  </Stack>
)

const BlogWrapper = styled.div`
  margin: 56px 0px 108px 0px;
  display: grid;
  justify-self: center;
  grid-row-gap: 40px;
  align-content: start;
  justify-content: center;
`

const BlogPost = ({ description, title, _rawBody, mainImage, related }) => (
  <BlogWrapper>
    <Img className="fadeInUpSlight" fluid={mainImage.asset.fluid} />
    <MassiveHeading className="fadeInUpSlight">{title}</MassiveHeading>
    <Heading className="fadeInUpSlight" color={colors.medium_grey}>
      {description}
    </Heading>
    <PortableText className="fadeInUpSlight" blocks={_rawBody} />
    <RelatedPosts posts={related} />
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
