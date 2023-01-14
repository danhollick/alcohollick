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

  // code: InlineCode,
  code: ({ children, showLineNumbers, ...props }) => {
    return (
      <code
        className={`line-numbers`}
        {...props}
        // className="text-sm text-mono text-gray900 py-[1px] bg-gray-600/5 border-gray-700/5 border rounded-sm"
      >
        {children}
      </code>
    )
  },
}

const MDXWrapper = ({ source }: MdxContentProps) => {
  return <MDXRemote {...source} components={components} />
}

export default MDXWrapper
