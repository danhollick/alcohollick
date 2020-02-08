import React from 'react'
import { Stack } from './layout'
import { Title, Subtitle, TextLink } from './text'

export const Job = ({
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
        {place} - {title}
      </TextLink>
    </Title>
    <Subtitle>
      {startDate} - {endDate || 'Present'}
    </Subtitle>
  </Stack>
)
