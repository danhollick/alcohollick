import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchTweet } from '../../../lib/fetchTweet'

const Tweet = async ({ url }) => {
  const tweet = await fetchTweet({ url })
  return (
    <Link href={tweet.url}>
      <div className="bg-gray-50 border hover:bg-gray-100 border-gray-300 rounded-2xl duration-300 my-8 p-5 max-w-xl mx-auto text-gray-900">
        <div className="flex justify-between">
          <a className="flex items-center gap-3 group" href={tweet.url}>
            <img
              className="rounded-full h-12 w-12"
              src={tweet.author.profileImageUrl}
            />
            <div className="flex flex-col leading-snug">
              <h4 className="text-sm font-semibold flex gap-2">
                {tweet.author.name}
                <span className="text-sm font-mono opacity-70 group-hover:opacity-100 duration-300">
                  @{tweet.author.username}
                </span>
              </h4>
              <p className="text-sm opacity-70 font-mono group-hover:opacity-100 duration-300">
                {tweet.createdAt.toLocaleString()}
              </p>
            </div>
          </a>
        </div>
        <p className="text-lg my-3 leading-normal whitespace-pre-wrap">
          {tweet.text}
        </p>

        <div className="grid grid-flow-row grid-cols-[auto,auto] gap-4">
          {tweet?.media?.map(
            ({ type, media_key, preview_image_url, height, width, url }) => (
              <Image
                className="rounded border-gray-200 border"
                key={media_key}
                src={type === 'photo' ? url : preview_image_url}
                width={570}
                height={height * (570 / width)}
              />
            )
          )}
        </div>
        <div className="flex mt-2 gap-8 text-sm font-mono text-gray-600">
          <p>
            <span className="font-semibold text-gray-900">
              {tweet.metrics.replies}
            </span>{' '}
            Replies
          </p>
          <p>
            <span className="font-semibold text-gray-900">
              {tweet.metrics.retweets}
            </span>{' '}
            Retweets
          </p>
          <p>
            <span className="font-semibold text-gray-900">
              {tweet.metrics.likes}
            </span>{' '}
            Likes
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Tweet
