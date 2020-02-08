import React from 'react'
import Page from '../components/page'
import SEO from '../components/seo'
import { RecentPosts } from '../components/recentPosts'
import { AllPosts } from '../components/allPosts'

const WritingPage = () => (
  <Page>
    <SEO title="writing." />
    <RecentPosts className="JustifyEnd AlignStart" />
    <AllPosts className="AlignStart" />
  </Page>
)

export default WritingPage
