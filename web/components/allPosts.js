import React from 'react'
import gql from 'graphql-tag';
import styled from 'styled-components'
import { Stack, UnstyledLink, below } from './layout'
import { Title } from './text'
import { PostPreview } from './postPreview'
import client from '../client'

export const allPostsQuery = gql`
  query AllPostsQuery {
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
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

const AllModule = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  grid-gap: 32px;
  justify-content: end;
  ${below.med`
    grid-template-columns: 1fr;
    grid-row-gap:32px;
  `}
`

export const AllPosts = ({ className }) => {
  const data = client.fetch(allPostsQuery)
  return (
    <Stack padding={[10, 0]} className={className}>
      <Title className="JustifyEnd"> All</Title>
      <AllModule>
        {data.posts.nodes.map((post, i) => (
          <UnstyledLink href={`/writing/${post.slug.current || post.slug}/`}>
            <PostPreview delay={i} key={i} {...post} />
          </UnstyledLink>
        ))}
      </AllModule>
    </Stack>
  )
}
