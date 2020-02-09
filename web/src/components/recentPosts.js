import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Stack, UnstyledLink } from './layout'
import { Title } from './text'
import { PostPreview } from './postPreview'

const RECENT_POSTS_QUERY = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(sort: { fields: _updatedAt, order: DESC }, limit: 3) {
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

const RecentModule = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  grid-column-gap: 32px;
`

export const RecentPosts = ({ className }) => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  return (
    <Stack padding={[10, 0]} className={className}>
      <Title className="JustifyEnd"> Recent</Title>
      <RecentModule>
        {data.posts.nodes.map((post, i) => (
          <UnstyledLink to={`/blog/${post.slug.current || post.slug}/`}>
            <PostPreview key={i} delay={i} {...post} />
          </UnstyledLink>
        ))}
      </RecentModule>
    </Stack>
  )
}
