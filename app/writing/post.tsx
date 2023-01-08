import React from 'react'
import Link from 'next/link'

const Post = ({ post }) => {
  return (
    <Link href={`writing/${post?.slug}`}>
      <li>{post?.frontmatter?.title}</li>
    </Link>
  )
}

export default Post
