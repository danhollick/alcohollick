import React from 'react'
import styled from 'styled-components'
import { Columns } from '../layout'
import { colors } from '../../utils/colors'
import { Title, TextLink } from '../text'

const StickyHeader = styled(Columns)`
  position: sticky;
  grid-column: 1 / -1;
`

export const FloatingHeader = ({}) => (
  <StickyHeader padding={[3, 0]}>
    <Title color={colors.light_grey}>The F*cking Weather</Title>
    <Columns className="JustifyEnd" spacing={3}>
      <Title>
        <TextLink hoverColor="white" color={colors.light_grey} href="#_why">
          Why?
        </TextLink>
      </Title>
      <Title>
        <TextLink hoverColor="white" color={colors.light_grey} href="#_how">
          How?
        </TextLink>
      </Title>
      <Title>
        <TextLink
          hoverColor="white"
          color={colors.light_grey}
          target="_blank"
          href="/"
        >
          Who?
        </TextLink>
      </Title>
    </Columns>
  </StickyHeader>
)
