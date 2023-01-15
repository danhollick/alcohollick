'use client'
import React from 'react'
import {
  H1,
  H2,
  H3,
  H4,
  Body,
  ExternalLink,
  UList,
  Blockquote,
  Callout,
  ListItem,
  Pre,
  InlineCode,
  // Aside,
} from './components'
import Image from 'next/image'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import rangeParser from 'parse-numeric-range'
import Tweet from './tweet'

type MdxContentProps = {
  source: MDXRemoteSerializeResult
}

const components = {
  // img: ResponsiveImage,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Body,
  a: ExternalLink,
  blockquote: Blockquote,
  ul: UList,
  li: ListItem,
  Callout: Callout,
  img: props => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <Image
      className="border border-gray-200 rounded-md max-w-prose"
      {...props}
      loading="lazy"
    />
  ),
  pre: ({ children, theme, showLineNumbers, ...props }) => {
    return (
      <pre className={`code-block line-numbers`} {...props}>
        {children}
      </pre>
    )
  },

  code: ({ children, showLineNumbers, ...props }) => {
    return (
      <code className={`line-numbers`} {...props}>
        {children}
      </code>
    )
  },
}

const MDXWrapper = ({ source, tweets }: MdxContentProps) => {
  const StaticTweet = ({ id }) => {
    // Use the tweets map that is present in the outer scope to get the content associated with the id passed as prop
    return <Tweet tweet={tweets.filter(tweet => tweet.id === id)[0]} />
  }

  return <MDXRemote {...source} components={{ ...components, StaticTweet }} />
}

export default MDXWrapper
