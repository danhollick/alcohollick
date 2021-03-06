import styled from 'styled-components'
import React from 'react'
import gql from 'graphql-tag'
import Image from 'next/image'
import groq from 'groq'
import Page from '../../components/page'
import SEO from '../../components/seo'
import { Heading, MassiveHeading, Title } from '../../components/text'
import { Stack, UnstyledLink, below } from '../../components/layout'
import PortableText from '../../components/portableText'
import { colors } from '../../utils/colors'
import { PostPreview } from '../../components/postPreview'
import client from '../../client'
import { allPostsQuery } from '../../components/allPosts'

export const query = gql`
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

const getPost = groq`*[_type == "post" && slug.current == $slug ][0] { 
  "id": _id,
  publishedAt,
  categories[] -> ,
  "mainImage": mainImage.asset->url,
  title,
  description,
  "slug": slug.current,
  "related": related[] -> {
    "mainImage": mainImage.asset->url,
    ...
  }, 
  body
}`
const getAllPosts = groq`*[_type == "post" ] { 
  "id": _id,
  title,
  publishedAt,
  "slug": slug.current,
  description,
  "mainImage": mainImage.asset->url
  }`

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
        <UnstyledLink href={`/writing/${post.slug.current || post.slug}/`}>
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

const BlogPost = ({ description, title, body, mainImage, related }) => (
  <BlogWrapper>
    <Image
      width={800}
      height={450}
      className="fadeInUpSlight"
      src={mainImage}
    />
    <MassiveHeading className="fadeInUpSlight">{title}</MassiveHeading>
    <Heading className="fadeInUpSlight" color={colors.medium_grey}>
      {description}
    </Heading>
    <PortableText className="fadeInUpSlight" blocks={body} />
    {related && <RelatedPosts posts={related} />}
  </BlogWrapper>
)

const BlogPostTemplate = props => {
  const { post, errors } = props
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
      {post && <BlogPost {...post} />}
    </Page>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const post = await client.fetch(getPost, { slug: params.slug })
  // console.log('data', post)
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await client.fetch(getAllPosts)

  return {
    paths:
      allPosts?.map(post => ({
        params: {
          slug: post.slug.toString(),
        },
      })) || [],
    fallback: true,
  }
}

export default BlogPostTemplate
