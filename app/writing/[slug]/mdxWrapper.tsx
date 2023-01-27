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
import Tweet from './tweet'
import Link from 'next/link'

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
  Link: Link,
  Callout: Callout,
  img: ({ width, height, alt = '', src }) => {
    return (
      // height and width are part of the props, so they get automatically passed here with {...props}
      <Image
        className="border border-gray-200 rounded-md md:max-w-prose max-w-full"
        width={width}
        height={height}
        alt={alt}
        src={src}
        loading="lazy"
      />
    )
  },
  pre: ({ className = '', showLineNumbers, ...props }) => {
    return (
      <pre
        className={`${className} code-block ${
          showLineNumbers && `line-numbers`
        }`}
        {...props}
      />
    )
  },
  code: ({ className = '', ...props }) => {
    return (
      <code
        className={`${className} line-numbers bg-gray-100 text-gray-600 pb-1 rounded-sm prose-code:before:content-none prose-code:after:content-none`}
        {...props}
      />
    )
  },
  // code: ({ children, showLineNumbers, ...props }) => {
  //   console.log(children)
  //   return (
  //     <code
  //       className={`${
  //         props.className && props.className
  //       } line-numbers bg-gray-100 text-gray-600 pb-1 rounded-sm`}
  //       {...props}
  //     >
  //       {children}
  //     </code>
  //   )
  // },
}

const MDXWrapper = ({ source, tweets }: MdxContentProps) => {
  const StaticTweet = ({ id }) => {
    // Use the tweets map that is present in the outer scope to get the content associated with the id passed as prop
    return <Tweet tweet={tweets.filter(tweet => tweet.id === id)[0]} />
  }

  return <MDXRemote {...source} components={{ ...components, StaticTweet }} />
}

export default MDXWrapper
