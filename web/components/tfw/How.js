import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Stack, Columns } from '../layout'
import { Heading, Body, Title } from '../text'
import { colors } from '../../utils/colors'

const FullHeightSection = styled.div`
  display: grid;

  min-height: 100vh;

  width: 100%;
  .MaxTextLength {
    max-width: 400px;
  }
`
const GradientText = styled.h1`
  background-image: linear-gradient(111.29deg, #bd70f1 5.31%, #723aeb 78.44%);

  font-weight: 700;
  font-size: max(4vh, 40px);
  line-height: 110%;
  /* letter-spacing: -0.01em; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

export const How = () => (
  <FullHeightSection>
    <Stack
      as="article"
      spacing={2}
      smallSpacing={4}
      className="AlignCenter  MaxTextLength"
    >
      <GradientText>
        AI?
        <br />
        Machine learning?
      </GradientText>
      <Body color={colors.medium_grey}>
        Nope, this app is as dumb as can be.
      </Body>
      <Stack as="ul" spacing={4} smallSpacing={4} padding={[0, 0]}>
        <Stack as="li">
          <Title>Step 1: Get weather</Title>
          <Body color={colors.medium_grey}>
            We fetch very accurate forecasts from{' '}
            <a href="https://www.met.no/">met.no</a>
          </Body>
        </Stack>
        <Stack as="li">
          <Title>Step 2: </Title>
          <Body color={colors.medium_grey}>
            We greatly reduce the accuracy of the data by converting it into a
            score.
          </Body>
        </Stack>
        <Stack as="li">
          <Title>Step 3: </Title>
          <Body color={colors.medium_grey}>
            Finally, we use that score to generate an incredibly vague sentence.{' '}
          </Body>
        </Stack>
      </Stack>
    </Stack>
  </FullHeightSection>
)
