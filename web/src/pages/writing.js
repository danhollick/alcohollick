import React from 'react'
import Page from '../components/page'
import SEO from '../components/seo'
import { RecentPosts } from '../components/recentPosts'
import { AllPosts } from '../components/allPosts'
import { Stack } from '../components/layout'

const WritingPage = () => (
  <Page>
    <SEO title="writing." />
    <Stack>
      <RecentPosts className=" AlignStart" />
      <AllPosts className="AlignStart" />
    </Stack>
  </Page>
)

export default WritingPage
