'use client'
import React from 'react'
import { H1, H2, H3, Body } from './components'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'

type MdxContentProps = {
  source: MDXRemoteSerializeResult
}

const components = {
  // img: ResponsiveImage,
  h1: H1,
  h2: H2,
  h3: H3,
  p: Body,
  // li: ListItem,
  // ul: UnorderedList,
  // pre: Pre,
  // code: InlineCode,
}

const MDXWrapper = ({ source }: MdxContentProps) => {
  return <MDXRemote {...source} components={components} />
}

export default MDXWrapper
