import React from 'react'
import Link from 'next/link'
import formatDate from '../../lib/formatDate'

const Series = ({ series }) => {
  return (
    <div className=" grid grid-cols-[minmax(200px,2fr),minmax(600px,3fr)] ">
      <p className="font-mono text-sm text-gray-500 pt-2">
        {formatDate(series.posts[0].frontmatter.date)}
      </p>
      <h3 className="text-3xl font-semibold font-serif">{series.name}</h3>
      <ul className="grid grid-flow-row gap-2 col-start-2 mt-4">
        {series.posts.reverse().map((post, i) => (
          <Link
            className="hover:text-purplish  text-gray-700"
            href={`writing/${post?.slug}`}
            key={i}
          >
            <li className="grid grid-flow-row">
              <p className=" ">
                <span className="font-mono text-gray-500">
                  {' '}
                  {post?.frontmatter?.part}/{series.posts.length}:
                </span>{' '}
                {post?.frontmatter?.description}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Series
