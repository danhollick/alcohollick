import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from 'styled-components'
import { Body } from './text'

const StyledTweetWrapper = styled.div`
  justify-self: center;
  display: grid;
  width: 100%;
  max-width: 500px;
`

export const TwitterTweetEmbedPreview = ({ node = {} }) => {
  const { tweet } = node
  if (!tweet) {
    return <Body>Missing Tweet </Body>
  }
  const id = tweet.split('/').slice(-1)[0]
  return (
    <StyledTweetWrapper>
      <TwitterTweetEmbed
        options={{
          width: 'auto',
        }}
        tweetId={id.split('?')[0]}
      />
    </StyledTweetWrapper>
  )
}
