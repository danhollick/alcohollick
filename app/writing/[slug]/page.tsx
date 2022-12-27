import fs from 'fs'
import { MDXProvider } from '@mdx-js/react'
// import Markdown from "markdown-to-jsx";
import matter from 'gray-matter'
import getPostMetadata from '../../../lib/getPostMetadata'

const getPostContent = (slug: string) => {
  const folder = 'posts'
  const file = `${folder}/${slug}.mdx`
  // console.log(file)
  // const meta = require(`../../../${file}`).meta
  const content = fs.readFileSync(file, 'utf8')
  // console.log(meta)
  // console.log(content)

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

// const components = {
//   // img: ResponsiveImage,
//   h1: Heading.H1,
//   h2: Heading.H2,
//   p: Text,
//   pre: Pre,
//   code: InlineCode,
// }

const PostPage = (props: any) => {
  const slug = props.params.slug
  console.log('props', props)
  const post = getPostContent(slug)
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        {/* <Markdown>{post.content}</Markdown> */}
        {post.content}
      </article>
    </div>
  )
}

export default PostPage
