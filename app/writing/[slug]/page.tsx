import MDXWrapper from './mdxWrapper'
import { type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'
import { Body, H1 } from './components'
import { getId } from '../../../lib/getId'
import imageSize from 'rehype-img-size'
import rehypeHighlightCode from './rehype-highlight-code'
import rehypeMetaAttribute from './rehype-meta-attribute'
import { fetchTweets } from '../../../lib/fetchTweets'
import Footer from './footer'
import formatDate from '../../../lib/formatDate'

type Frontmatter = {
  title: string
  date: string
  updatedAt?: string
  description: string
}

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
  headings: Heading[]
}

export type Heading = {
  id: string
  text: string
}

export const generateStaticParams = async () => {
  // const posts = getPostMetadata()
  const files = await fs.readdir('posts/')
  const mdxPosts = files.filter(file => file.endsWith('.mdx'))
  const posts = mdxPosts.map(fileName => {
    return {
      slug: fileName.replace('.mdx', ''),
    }
  })
  return posts.map(post => ({
    slug: post.slug,
  }))
}

const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, 'utf-8')

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      // use the image size plugin, you can also specify which folder to load images from
      // in my case images are in /public/images/, so I just prepend 'public'
      rehypePlugins: [
        [imageSize, { dir: 'public' }],
        rehypeMetaAttribute,
        rehypeHighlightCode,
      ],
      development: false,
    },
  })
  /**
   * Find all occurrence of <StaticTweet id="NUMERIC_TWEET_ID"/>
   * in the content of the MDX blog post
   */
  const tweetMatch = raw.match(TWEET_RE)
  const tweetIDs = tweetMatch?.map(mdxTweet => {
    const id = mdxTweet.match(/[0-9]+/g)![0]
    return id
  })

  const tweets = await fetchTweets({ ids: tweetIDs || [] })

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
    headings: getHeadings(raw),
    tweets,
  }
}

const getHeadings = (content: string): Heading[] => {
  return (
    content
      .split('\n')
      /* I only care about h2s, so explicitly look for 2 hashtags */
      .filter(line => line.match(/^##\s/))
      .map(line => line.replace('##', '').trim())
      .map(text => ({
        text,
        id: getId(text),
      }))
  )
}

const PostPage = async (props: any) => {
  const slug = props.params.slug
  const { serialized, frontmatter, headings, tweets } = await getPost(
    `posts/${slug}.mdx`
  )

  const date = new Date(frontmatter.date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <div className="w-full grid ">
      <div className="grid w-full max-w-full md:max-w-[850px] md:grid-cols-[minmax(600px,3fr),minmax(200px,1fr)] grid-flow-row gap-12 justify-self-center p-4">
        <div className=" grid auto-rows-auto max-w-prose py-10 ">
          <Body className="text-gray-500 text-sm font-mono mb-4">
            {formatDate(date)}
            {frontmatter.updatedAt &&
              ` | Updated: ${formatDate(frontmatter.updatedAt)}`}
          </Body>
          <H1>{frontmatter.title}</H1>
          <h3 className="text-xl text-gray-900 mt-3">
            {frontmatter.series && `Part ${frontmatter.part}: `}
            {frontmatter.description}
          </h3>
          <article className="max-w-prose prose align-start mt-12 w-full">
            <MDXWrapper source={serialized} tweets={tweets} />
          </article>
        </div>
        <div className="h-screen top-0 bottom-0 sticky md:grid grid-flow-row py-20 hidden">
          <ul className="grid auto-rows-auto content-start gap-2">
            {headings.map(({ id, text }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-500 hover:text-purplish  font-mono text-sm"
              >
                {text}
              </a>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PostPage
