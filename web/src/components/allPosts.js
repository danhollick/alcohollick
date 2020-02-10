import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Stack, UnstyledLink } from './layout'
import { Title } from './text'
import { PostPreview } from './postPreview'

const All_POSTS_QUERY = graphql`
  query AllPostsQuery {
    posts: allSanityPost(sort: { fields: _updatedAt, order: DESC }) {
      nodes {
        title
        slug {
          current
        }
        description
        publishedAt(fromNow: true)
        mainImage {
          asset {
            fixed(width: 238) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

const AllModule = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  grid-gap: 32px;
  justify-content: end;
`

export const AllPosts = ({ className }) => {
  const data = useStaticQuery(All_POSTS_QUERY)
  return (
    <Stack padding={[10, 0]} className={className}>
      <Title className="JustifyEnd"> All</Title>
      <AllModule>
        {data.posts.nodes.map((post, i) => (
          <UnstyledLink to={`/blog/${post.slug.current || post.slug}/`}>
            <PostPreview delay={i} key={i} {...post} />
          </UnstyledLink>
        ))}
      </AllModule>
    </Stack>
  )
}