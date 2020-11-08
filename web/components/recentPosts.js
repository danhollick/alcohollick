import React from 'react'
import styled from 'styled-components'
import { Stack, UnstyledLink, below } from './layout'
import { Title } from './text'
import { PostPreview } from './postPreview'

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

export const RecentPosts = ({ className, recentPosts }) => (
  <Stack padding={[10, 0]} className={className}>
    <Title className="JustifyEnd"> Recent</Title>
    <RecentModule>
      {recentPosts.map((post, i) => (
        <UnstyledLink
          key={i}
          href={`/writing/${post.slug.current || post.slug}/`}
          passhref
        >
          <PostPreview delay={i} {...post} />
        </UnstyledLink>
      ))}
    </RecentModule>
  </Stack>
)
