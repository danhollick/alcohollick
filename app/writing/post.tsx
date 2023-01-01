'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

const Post = ({ post }) => {
  //   useEffect(() => {
  //   }, [])
  console.log(post)

  return (
    <Link href={`writing/${post?.slug}`}>
      <li>{post?.frontmatter?.title}</li>
    </Link>
  )
}

export default Post
