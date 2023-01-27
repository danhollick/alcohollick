import React from 'react'
import Link from 'next/link'
import formatDate from '../../lib/formatDate'
import Image from 'next/image'

const Series = ({ series }) => {
  return (
    <div className=" grid md:grid-cols-[minmax(200px,2fr),minmax(650px,3fr)]">
      {/* <div className=" grid  "> */}
      <p className="font-mono text-sm text-gray-500 pt-2 hidden md:block">
        {formatDate(series.posts[0].frontmatter.date)}
      </p>
      <div className="w-full col-start-2 max-h-[400px] object-cover overflow-hidden mb-6">
        <Image
          src={series.posts[0].frontmatter.hero}
          width="650"
          height="400"
          alt={`Hero image for ${series.posts[0]?.frontmatter?.title}`}
        />
      </div>
      <h3 className="text-3xl font-semibold font-serif col-start-2">
        {series.name}
      </h3>
      <ul className="grid grid-flow-row gap-2 col-start-2 mt-4">
        {series.posts.map((post, i) => (
          <li key={i}>
            <Link
              className="hover:text-purplish  text-gray-700"
              href={`writing/${post?.slug}`}
            >
              <span className="font-mono text-gray-500">
                {' '}
                {post?.frontmatter?.part}/{series.posts.length}:
              </span>{' '}
              {post?.frontmatter?.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Series
