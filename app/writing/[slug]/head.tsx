import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, 'utf-8')

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  })

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter

  // Return the serialized content and frontmatter
  return {
    frontmatter,
  }
}

export default async function Head({ params }) {
  const slug = params.slug
  const { frontmatter } = await getPost(`posts/${slug}.mdx`)

  return (
    <head>
      <title>{frontmatter.title}</title>
      <meta name="description" content={frontmatter.description} />
      <meta name="author" content="Dan Hollick" />
      <meta
        property="og:image"
        content={`https://alcohollick.com/api/og?title=${encodeURIComponent(
          frontmatter.title
        )}&description=${encodeURIComponent(frontmatter.description)}`}
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
  )
}
