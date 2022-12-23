import React from 'react'
import groq from 'groq'
import Page from '../components/page'
import SEO from '../components/seo'
import { RecentPosts } from '../components/recentPosts'
import { AllPosts } from '../components/allPosts'
import { Stack } from '../components/layout'
import client from '../client'

const WritingPage = ({ recentPosts, allPosts }) => (
  <Page>
    <SEO title="writing." />
    <Stack>
      <RecentPosts recentPosts={recentPosts} className=" AlignStart" />
      <AllPosts allPosts={allPosts} className="AlignStart" />
    </Stack>
  </Page>
)

export default WritingPage

const getRecentPosts = groq`*[_type == "post" ] | order(publishedAt desc) { 
  title,
  publishedAt,
  slug,
  description,
  "mainImage": mainImage.asset->url}
  [0...3]`

const getAllPosts = groq`*[_type == "post" ] | order(publishedAt desc) { 
  title,
  publishedAt,
  slug,
  description,
  "mainImage": mainImage.asset->url}`

export async function getStaticProps() {
  const recentPosts = await client.fetch(getRecentPosts)
  const allPosts = await client.fetch(getAllPosts)
  return {
    props: { recentPosts, allPosts }, // will be passed to the page component as props
  }
}
