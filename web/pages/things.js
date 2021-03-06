import React from 'react'
import groq from 'groq'
import Page from '../components/page'
import SEO from '../components/seo'
import { AllProjects } from '../components/allProjects'
import client from '../client'

const ThingsPage = ({ projects }) => (
  <Page>
    <SEO title="things" />
    <AllProjects projects={projects} />
  </Page>
)

const getAllProjects = groq`*[_type == "project" ] | order(_createdAt asc) { 
  url,
  name,
  description,
  "image": image.asset->url}
`

export async function getStaticProps() {
  const projects = await client.fetch(getAllProjects)
  return {
    props: { projects }, // will be passed to the page component as props
  }
}

export default ThingsPage
