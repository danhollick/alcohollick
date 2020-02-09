import React from 'react'
import styled from 'styled-components'
import { Stack } from './layout'
import { Title, Subtitle, TextLink } from './text'

const AnimatedJob = styled(Stack)`
  animation-name: fadeInUpSlight;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-delay: ${props => `${props.delay * 150}ms`};
`

export const Job = ({
  title,
  place,
  url,
  startDate,
  endDate = 'present',
  className,
  delay,
}) => (
  <AnimatedJob delay={delay} spacing={0} className={className}>
    <Title>
      <TextLink href={url} target="_blank">
        {place} - {title}
      </TextLink>
    </Title>
    <Subtitle>
      {startDate} - {endDate || 'Present'}
    </Subtitle>
  </AnimatedJob>
)
