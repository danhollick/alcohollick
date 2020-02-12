import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Stack, UnstyledLink, below } from './layout'
import { Title } from './text'
import { PostPreview } from './postPreview'

const recentPostsQuery = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }, limit: 3) {
      nodes {
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
    }
  }
`

const RecentModule = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  justify-content: end;
  grid-column-gap: 32px;
  ${below.med`
    grid-template-columns: 1fr;
    grid-row-gap:32px;
  `}
`

export const RecentPosts = ({ className }) => {
  const data = useStaticQuery(recentPostsQuery)
  return (
    <Stack padding={[10, 0]} className={className}>
      <Title className="JustifyEnd"> Recent</Title>
      <RecentModule>
        {data.posts.nodes.map((post, i) => (
          <UnstyledLink to={`/writing/${post.slug.current || post.slug}/`}>
            <PostPreview key={i} delay={i} {...post} />
          </UnstyledLink>
        ))}
      </RecentModule>
    </Stack>
  )
}
