import React from 'react'
import gql from 'graphql-tag'
import styled from 'styled-components'
import groq from 'groq'
import Page from '../components/page'
import { Stack, Columns, below } from '../components/layout'
import PurpleImage from '../components/image'
import SEO from '../components/seo'
import { Title, MassiveHeading } from '../components/text'
import { ALL_JOBS_QUERY, JobList } from '../components/jobList'
import client from '../client'

const ProfileImage = styled(PurpleImage)`
  ${below.med`
    grid-row: 1;
    margin-top: 40px;
  `}
`

const getJobs = groq`*[_type == "job" ] | order(startDate desc) {title, endDate, startDate, place, url }[0...4]`

const IndexPage = ({ jobs }) => {
  console.log('comp', jobs)
  return (
    <Page>
      <SEO title="home" description="Designer + Coder" />
      <Columns smallCount={1} smallSpacing={10} className="AlignCenter">
        <Stack smallSpacing={10}>
          <Stack className="AlignStart fadeInUpSlight" spacing={1}>
            <MassiveHeading>dan hollick</MassiveHeading>
            <Title>designer and builder.</Title>
          </Stack>
          {jobs && <JobList className="AlignEnd" jobs={jobs} />}
        </Stack>
        <ProfileImage
          className="JustifyEnd"
          width={400}
          height={400}
          src="/profile.png"
        />
      </Columns>
    </Page>
  )
}

export async function getStaticProps() {
  const jobs = await client.fetch(getJobs)

  console.log('data', jobs)
  return {
    props: { jobs: jobs || null }, // will be passed to the page component as props
  }
}
export default IndexPage

// export const ALL_JOBS_QUERY = gql`
//   query AllJobsQuery {
//     jobs: allSanityJob(limit: 4, sort: { fields: startDate, order: DESC }) {
//       nodes {
//         title
//         endDate(formatString: "YYYY")
//         startDate(formatString: "YYYY")
//         place
//         url
//       }
//     }
//   }
// `
