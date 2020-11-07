const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  //   token:
  //     'sktgM5jC8HCwioZuNyjRTlOQJExucQyrcSke93iysPcocvzhEYZwiUynw0LcpMID6B6Ct1ziv0HIu0EbaQ6WDiMmM7qUAUvqX088SucmoiuKAEHoFJf6r2ryMBiJLSkXd0PPC3pSZ3W17iPi3VLURA2jsCcQzS6UlpaHWcBaDYivJjD95MsJ',
  projectId: 'h2w4qpx8', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
})
