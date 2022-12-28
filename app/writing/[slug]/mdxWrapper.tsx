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
  // Aside,
} from './components'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'

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
  // pre: Pre,
  // code: InlineCode,
}

const MDXWrapper = ({ source }: MdxContentProps) => {
  return <MDXRemote {...source} components={components} />
}

export default MDXWrapper
