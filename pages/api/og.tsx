import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}
const erode = fetch(
  new URL('../../styles/fonts/Erode-Medium.otf', import.meta.url)
).then(res => res.arrayBuffer())
const inter = fetch(
  new URL('../../styles/fonts/Inter-Regular.ttf', import.meta.url)
).then(res => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : `Dan Hollick`

    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : 'Design, technically'

    const erodeData = await erode
    const interData = await inter

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#FAFAFA',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            padding: '0 120px',
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontFamily: '"Erode"',
              fontStyle: 'normal',
              color: '#18181B',
              lineHeight: 1.1,
              whiteSpace: 'pre-wrap',
              marginBottom: 40,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 40,
              marginTop: -24,
              marginBottom: 40,
              fontFamily: '"Inter"',
              color: '#18181B',
            }}
          >
            {description}
          </div>
          <div
            style={{
              position: 'absolute',
              right: 40,
              bottom: 40,
              display: 'flex',
              justifySelf: 'flex-end',
            }}
          >
            <img
              alt="Dan Hollick"
              height={140}
              src="https://alcohollick-danhollick.vercel.app/profile-tinted.png"
              width={140}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Erode',
            data: erodeData,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: interData,

            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
