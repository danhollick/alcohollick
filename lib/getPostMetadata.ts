import fs from 'fs'
import { PostMetadata } from './postMetadata'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter(file => file.endsWith('.mdx'))
  // console.log('called')
  // Get gray-matter data from each file.
  const posts = markdownPosts.map(fileName => {
  // const meta = require (`../posts/${fileName}`).meta
    // const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    // console.log(meta, fileName)
    // const matterResult = matter(fileContents)
    return {
      // title: meta.title,
      // date: meta.date,
      // description: meta.description,
      //   categories: meta.categories,
      slug: fileName.replace('.mdx', ''),
    }
  })

  return posts
}

export default getPostMetadata
