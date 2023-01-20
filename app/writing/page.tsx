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
  // const series = posts.filter(p => p.frontmatter.series !== null)

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
        accumulator[index].posts = [...accumulator[index].posts, current]
        return [...accumulator]
      }
    } else {
      return [...accumulator, { type: 'post', post: current }]
    }
  }, [])

  console.log('groupedPosts', groupedPosts)
  return (
    <div className="w-full grid ">
      <div className="grid w-full max-w-[850px]  gap-12 justify-self-center py-20">
        <h1 className="text-6xl font-serif">Writing.</h1>
        <ul className=" grid auto-rows-auto max-w-prose py-10 gap-12">
          {groupedPosts.map((item, i) => {
            console.log(item)
            if (item.type === 'series') {
              return <Series series={item} key={i} />
            }
            if (item.type === 'post') {
              return <Post post={item.post} key={i} />
            }
          })}
          {/* {posts.map((post, i) => (
            <Post post={post} key={i} />
          ))} */}
        </ul>
        <Footer />
      </div>
    </div>
  )
}

export default PostListPage
