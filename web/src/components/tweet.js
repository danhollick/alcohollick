import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from 'styled-components'
import { below } from './layout'
import { Body } from './text'

const StyledTweetWrapper = styled.div`
  justify-self: center;
  display: grid;
  width: 100%;
  max-width: 500px;
  /* padding: 24px; */
  /* background-color: red;
  justify-items: center; */
  ${below.med`
    // width: 100%;
  `}
`

const StyledTweet = styled(TwitterTweetEmbed)`
  /* justify-self: center; */
  width: 100%;
  /* display: grid; */
  /* justify-items: center; */
`

export const TwitterTweetEmbedPreview = ({ node = {} }) => {
  const { tweet } = node
  if (!tweet) {
    return <Body>Missing Tweet </Body>
  }
  const trimmedUrl = tweet.split('/').slice(-1)[0]
  const id = trimmedUrl.split('?')[0]
  return (
    <StyledTweetWrapper>
      <StyledTweet
        key={id}
        options={{
          width: 'auto',
        }}
        tweetId={id}
      />
    </StyledTweetWrapper>
  )
}
