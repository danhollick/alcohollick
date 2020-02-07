import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Stack } from './layout'
import { Title, Subtitle, MassiveHeading, TextLink } from './text'

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

const Job = ({
  title,
  place,
  url,
  startDate,
  endDate = 'present',
  className,
}) => (
  <Stack spacing={0} className={className}>
    <Title>
      <TextLink href={url} target="_blank">
        {place}, {title}
      </TextLink>
    </Title>
    <Subtitle>
      {startDate} - {endDate || 'Present'}
    </Subtitle>
  </Stack>
)

export const JobList = ({ className }) => {
  const data = useStaticQuery(ALL_JOBS_QUERY)
  return (
    <Stack spacing={3} className={className}>
      {data &&
        data.jobs.nodes.map((job, i) => (
          <Job key={i} className="AlignEnd" {...job} />
        ))}
    </Stack>
  )
}
