import React from 'react'
import Link from 'next/link'
import formatDate from '../../lib/formatDate'
import Image from 'next/image'

const Post = ({ post }) => {
  // console.log(post)
  return (
    // <div className=" grid  ">
    <div className=" grid md:grid-cols-[minmax(200px,2fr),minmax(650px,3fr)] ">
      <p className="font-mono text-sm text-gray-500 pt-2 hidden md:block ">
        {formatDate(post?.frontmatter?.date)}
      </p>
      <Link
        className="hover:text-purplish col-start-2"
        href={`writing/${post?.slug}`}
      >
        {post?.frontmatter.hero && (
          <div className="w-full col-start-2 max-h-[300px] object-cover overflow-hidden mb-6">
            <Image
              src={post?.frontmatter.hero}
              width="650"
              height="400"
              alt={`Hero image for ${post?.frontmatter?.title}`}
            />
          </div>
        )}
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
