import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Stack, Columns } from './layout'
import { Title, Subtitle, MassiveHeading, TextLink } from './text'
import PurpleImage from './image'

const RECENT_POSTS_QUERY = graphql`
  query AllPostsQuery {
    posts: allSanityPost(sort: { fields: _updatedAt, order: DESC }, limit: 3) {
      nodes {
        title
        slug {
          current
        }
        description
        publishedAt(fromNow: true)
        mainImage {
          asset {
            fluid {
              src
              aspectRatio
              base64
              sizes
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`

const PostPreview = ({
  title,
  mainImage,
  description,
  publishedAt,
  className,
}) => (
  <Stack>
    <PurpleImage url={mainImage.asset.fluid} />
    <Title>{title}</Title>
    <Subtitle>{description}</Subtitle>
  </Stack>
)

export const RecentPosts = ({ className }) => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  return (
    <Columns spacing={3} className={className}>
      {console.log(data.posts.nodes)}
      {data.posts.nodes.map((post, i) => (
        <Link to={`/blog/${post.slug.current || post.slug}/`}>
          <PostPreview key={i} {...post} />
        </Link>
      ))}
    </Columns>
  )
}
