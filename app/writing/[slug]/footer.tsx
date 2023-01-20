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
    <div className="grid grid-flow-row mb-20 text-base gap-20">
      <div className="grid grid-flow-col grid-cols-[1fr,auto,1fr] gap-4 items-center">
        <hr />
        <p className="text-gray-500 font-serif">end.</p>
        <hr />
      </div>
      <div className="grid grid-flow-row justify-center align-start gap-0">
        <p className="text-gray-900 text-center ">
          If you like this, then you might like my
          <a className="ext-link" href="https://twitter.com/DanHollick">
            {' '}
            twitter:
          </a>
        </p>
        <Tweet tweet={tweet[0]} />
      </div>
    </div>
  )
}

export default Footer
