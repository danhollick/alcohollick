import React from 'react'
import { CodeBlock } from './codeblock'
import { Figure } from './figure'
import { Gif } from './gif'
import { TwitterTweetEmbedPreview } from './tweet'

const serializers = {
  types: {
    // mainImage: Figure,
    code: CodeBlock,
    // gallery: ,
    // image: node => {
    //   console.log(node)
    //   return null
    // },
    image: Figure,
    gif: Gif,
    twitterTweetEmbed: TwitterTweetEmbedPreview,
  },
}

export default serializers
