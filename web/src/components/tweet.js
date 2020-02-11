import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from 'styled-components'
import { Body } from './text'
import { below } from './layout'

const StyledTweet = styled(TwitterTweetEmbed)`
  width: 90vw;
`

const StyledTweetWrapper = styled.div`
  justify-self: center;
  display: grid;
  justify-content: center;
  /* .twitter-tweet .twitter-tweet-rendered {
    width: 90vw;
  } */
  ${below.med`
      width:90vw;
    `}
`

export const TwitterTweetEmbedPreview = ({ node = {} }) => {
  const { tweet } = node
  if (!tweet) {
    return <Body>Missing Tweet </Body>
  }
  const id = tweet.split('/').slice(-1)[0]
  return (
    <StyledTweetWrapper>
      <StyledTweet tweetId={id.split('?')[0]} />
    </StyledTweetWrapper>
  )
}
