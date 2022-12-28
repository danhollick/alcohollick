import MDXWrapper from './mdxWrapper'
import { type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'
import { Body, H1 } from './components'

type Frontmatter = {
  title: string
  date: string
  description: string
}

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
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
  }
}

const PostPage = async (props: any) => {
  const slug = props.params.slug
  const { serialized, frontmatter } = await getPost(`posts/${slug}.mdx`)
  const date = new Date(frontmatter.date).toLocaleString('en-GB', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="w-full grid justify-center">
      <div className="my-12 max-w-prose">
        <H1>{frontmatter.title}</H1>
        <Body className="text-slate-400 mt-2">{date}</Body>
      </div>
      <article className="max-w-prose prose">
        <MDXWrapper source={serialized} />
      </article>
    </div>
  )
}

export default PostPage
