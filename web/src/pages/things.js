import React from 'react'
import { Link } from 'gatsby'
import Page from '../components/page'
import SEO from '../components/seo'
import { AllProjects } from '../components/allProjects'

const ThingsPage = () => (
  <Page>
    <SEO title="things" />
    <AllProjects />
  </Page>
)

export default ThingsPage
