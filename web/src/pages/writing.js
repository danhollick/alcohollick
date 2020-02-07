import React from 'react'
import Page from '../components/page'
import SEO from '../components/seo'
import { RecentPosts } from '../components/recentPosts'

const WritingPage = () => (
  <Page>
    <SEO title="writing." />
    <RecentPosts />
  </Page>
)

export default WritingPage
