import MDXWrapper from './mdxWrapper'
import { type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'
import { Body, H1 } from './components'
import { getId } from '../../../lib/getId'

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

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, 'utf-8')

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      development: false,
    },
  })

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
    headings: getHeadings(raw),
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
  const { serialized, frontmatter, headings } = await getPost(
    `posts/${slug}.mdx`
  )
  const date = new Date(frontmatter.date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <div className="w-full grid justify-center my-12 scroll-smooth ">
      <div className="grid grid-cols-[1fr_auto] gap-8 ">
        <div className=" grid auto-rows-auto max-w-prose ">
          <Body className="text-gray-500 text-sm font-mono mb-4">
            {date}
            {frontmatter.updatedAt &&
              ` | Updated: ${new Date(frontmatter.updatedAt).toLocaleString(
                'en-GB',
                {
                  year: 'numeric',
                  month: 'long',
                }
              )}`}
          </Body>
          <H1>{frontmatter.title}</H1>
          <h3 className="text-xl text-gray-900 mt-3">
            {frontmatter.description}
          </h3>
          <article className="max-w-prose prose align-start my-12">
            <MDXWrapper source={serialized} />
          </article>
        </div>
        <div className="h-screen top-0 sticky">
          <ul className="grid auto-rows-auto content-start gap-2 py-10 ">
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
      </div>
    </div>
  )
}

export default PostPage
