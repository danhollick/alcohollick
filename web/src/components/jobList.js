import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Stack } from './layout'
import { Job } from './job'

const ALL_JOBS_QUERY = graphql`
  query AllJobsQuery {
    jobs: allSanityJob(limit: 4, sort: { fields: startDate, order: DESC }) {
      nodes {
        title
        endDate(formatString: "YYYY")
        startDate(formatString: "YYYY")
        place
        url
      }
    }
  }
`

export const JobList = ({ className }) => {
  const data = useStaticQuery(ALL_JOBS_QUERY)
  return (
    <Stack spacing={3} className={className}>
      {data &&
        data.jobs.nodes.map((job, i) => (
          <Job key={i} delay={i} className="AlignEnd" {...job} />
        ))}
    </Stack>
  )
}
