import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export const TwitterTweetEmbedPreview = ({ node = {} }) => {
  console.log(node)
  const { url } = node
  if (!url) {
    return <div>Missing Tweet ID</div>
  }
  //   console.log(url.split('/'))
  //   if (!tweetId) {
  //       return (
  //       <div>
  //         Missing Tweet ID
  //       </div>
  //     )}
  return <TwitterTweetEmbed tweetId={url} />
}
