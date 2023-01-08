import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'
import Post from './post'
import Tweet from './[slug]/tweet'

type Frontmatter = {
  title: string
  date: string
  updatedAt?: string
  description: string
}

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
  headings?: Heading[]
}

export type Heading = {
  id: string
  text: string
}

async function getPosts() {
  const files = await fs.readdir('posts/')
  const mdxPosts = files.filter(file => file.endsWith('.mdx'))

  const posts = await Promise.all(
    mdxPosts.map(async fileName => {
      const raw = await fs.readFile(`posts/${fileName}`, 'utf-8')
      const serialized = await serialize(raw, {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      })
      return {
        frontmatter: serialized.frontmatter as Frontmatter,
        slug: fileName.replace('.mdx', ''),
      }
    })
  )

  return posts
}

const PostListPage = async (props: any) => {
  const posts = await getPosts()

  return (
    <div className="w-full grid ">
      <div className="grid w-full max-w-[850px] grid-cols-[minmax(600px,3fr),minmax(200px,1fr)] gap-12 justify-self-center">
        <div className=" grid auto-rows-auto max-w-prose py-10 ">
          <ul>
            {posts.map((post, i) => (
              <Post post={post} key={i} />
            ))}
          </ul>
          <Tweet url="https://twitter.com/DanHollick/status/1583080119068807168?s=20" />
          <Tweet url="https://twitter.com/DanHollick/status/1572587712234029056?s=20" />
          <Tweet url="https://twitter.com/DanHollick/status/1491436859238412288?s=20" />
        </div>
      </div>
    </div>
  )
}

export default PostListPage
