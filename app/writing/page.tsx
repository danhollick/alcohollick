import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'
import Post from './post'
import Tweet from './[slug]/tweet'
import Footer from './[slug]/footer'
import Series from './series'

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
          format: 'mdx',
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
  const posts = await getPosts()!
  const groupedPosts = posts.reverse().reduce((accumulator, current) => {
    if (current.frontmatter.series) {
      const index = accumulator.findIndex(
        p => p.type === 'series' && p.name === current.frontmatter.series
      )
      if (index === -1) {
        return [
          ...accumulator,
          {
            type: 'series',
            name: current.frontmatter.series,
            posts: [current],
          },
        ]
      } else {
        accumulator[index].posts = [current, ...accumulator[index].posts]
        return [...accumulator]
      }
    } else {
      return [...accumulator, { type: 'post', post: current }]
    }
  }, [])

  return (
    <div className="w-full grid">
      <div className="grid w-full max-w-[850px] md:gap-12 gap-6 justify-self-center py-10 md:py-20 px-4">
        {/* <div className="grid grid-cols-[minmax(200px,2fr),minmax(650px,3fr)] w-full "> */}
        <div className="grid md:grid-cols-[minmax(200px,2fr),minmax(650px,3fr)] grid-cols-[1fr,3fr] w-full ">
          <h1 className="md:text-6xl text-5xl font-serif md:col-start-2 ">
            Writing.
          </h1>
        </div>
        <ul className=" grid auto-rows-auto py-10 gap-20">
          {groupedPosts.map((item, i) => {
            if (item.type === 'series') {
              return <Series series={item} key={i} />
            }
            if (item.type === 'post') {
              return <Post post={item.post} key={i} />
            }
          })}
        </ul>
        <Footer />
      </div>
    </div>
  )
}

export default PostListPage
