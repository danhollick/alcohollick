export const fetchTweets = async ({ ids }) => {
  if (ids.length === 0) return []
 

  const options =
    '&expansions=author_id,attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,type,url,width,alt_text&tweet.fields=public_metrics,created_at&user.fields=profile_image_url'

  const response = await fetch(
    `https://api.twitter.com/2/tweets/?ids=${ids.join(',')}${options}`,
    { headers: { Authorization: process.env.TWITTER_TOKEN } }
  )
  const body = await response.json()
  return body.data.map((tweet, i) => {
    const author = body.includes.users.find(a => a.id === tweet.author_id)
    const attacthments = tweet?.attachments?.media_keys || []
    const media = body.includes?.media?.map(item => ({
      type: item.type,
      media_key: item.media_key,
      preview_image_url: item?.preview_image_url,
      height: item.height,
      width: item.width,
      url: item?.url,
    }))

    return {
      id: tweet.id,
      text: tweet.text,
      createdAt: new Date(tweet.created_at).toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      }),
      metrics: {
        replies: formatMetric(tweet.public_metrics?.reply_count ?? 0),
        likes: formatMetric(tweet.public_metrics?.like_count ?? 0),
        retweets: formatMetric(tweet.public_metrics?.retweet_count ?? 0),
      },
      author: {
        name: author.name,
        username: author.username,
        profileImageUrl: author.profile_image_url,
      },
      media: media && media.filter(att => attacthments.includes(att.media_key)),
      url: `https://twitter.com/${author.username}/status/${tweet.id}`,
    }
  })
}

export const formatMetric = number => {
  if (number < 1000) {
    return number
  }
  if (number < 1000000) {
    return `${(number / 1000).toFixed(1)}K`
  }
  return `${(number / 1000000).toFixed(1)}M`
}
