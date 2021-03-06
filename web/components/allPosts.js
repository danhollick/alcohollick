import React from 'react'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Stack, UnstyledLink, below } from './layout'
import { Title } from './text'
import { PostPreview } from './postPreview'

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

export const AllPosts = ({ className, allPosts }) => (
  <Stack padding={[10, 0]} className={className}>
    <Title className="JustifyEnd"> All</Title>
    <AllModule>
      {allPosts.map((post, i) => (
        <UnstyledLink
          key={i}
          href={`/writing/${post.slug.current || post.slug}/`}
        >
          <a>
            <PostPreview delay={i} {...post} />
          </a>
        </UnstyledLink>
      ))}
    </AllModule>
  </Stack>
)
