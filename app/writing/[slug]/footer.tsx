import React from 'react'
import { fetchTweets } from '../../../lib/fetchTweets'
import getTweetIDFromURL from '../../../lib/getTweetIDFromURL'
import { goodTweets } from '../../../lib/goodTweets'
import Tweet from './tweet'

const Footer = async () => {
  const randomTweetURL =
    goodTweets[Math.floor(Math.random() * goodTweets.length)]
  const randomTweetID = getTweetIDFromURL({ url: randomTweetURL })
  const tweet = await fetchTweets({ ids: [randomTweetID] })

  return (
    <div className="grid grid-flow-row mb-20 text-base">
      <div className="grid grid-flow-col grid-cols-[1fr,auto,1fr] gap-4 items-center">
        <hr />
        <p className="text-gray-400 font-mono">[end]</p>
        <hr />
      </div>
      <p className="text-gray-900  mt-20">
        If you like this, then you might like my
        <a className="ext-link" href="https://twitter.com/DanHollick">
          {' '}
          twitter:
        </a>
      </p>
      <Tweet tweet={tweet[0]} />
    </div>
  )
}

export default Footer
