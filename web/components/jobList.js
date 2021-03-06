import React from 'react'
import { Stack } from './layout'
import { Job } from './job'

export const JobList = ({ className, jobs }) => (
  <Stack spacing={3} className={className}>
    {jobs.map((job, i) => (
      <Job key={i} delay={i} className="AlignEnd" {...job} />
    ))}
  </Stack>
)
