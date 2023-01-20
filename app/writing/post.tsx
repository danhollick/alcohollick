import React from 'react'
import Link from 'next/link'
import formatDate from '../../lib/formatDate'

const Post = ({ post }) => {
  // console.log(post)
  return (
    <div className=" grid grid-cols-[minmax(200px,2fr),minmax(600px,3fr)]">
      <p className="font-mono text-sm text-gray-500 pt-2">
        {formatDate(post?.frontmatter?.date)}
      </p>
      <Link className="hover:text-purplish" href={`writing/${post?.slug}`}>
        <li className="grid grid-flow-row">
          <h3 className="text-3xl font-semibold font-serif">
            {post?.frontmatter?.title}
          </h3>
          <p className=" text-gray-700">{post?.frontmatter?.description}</p>
        </li>
      </Link>
    </div>
  )
}

export default Post
