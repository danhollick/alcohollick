import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Stack, Columns } from '../Layout/index'
import { Heading, Body } from '../text'
import { colors } from '../../utils/colors'

const FullHeightSection = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  position: relative;

  /* contain: content; */
  .MaxTextLength {
    max-width: 400px;
  }
`

const GradientText = styled.h1`
  background-image: linear-gradient(111.29deg, #cd970c 5.31%, #d65353 78.44%);

  font-weight: 700;
  font-size: max(4vh, 40px);
  line-height: 110%;
  /* letter-spacing: -0.01em; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

export const New = () => (
  <FullHeightSection>
    <Stack
      alignSelf={['center', 'center', 'center']}
      gap={[3, 3, 3]}
      className="MaxTextLength"
    >
      <Stack gap={[1, 1, 1]} className="MaxTextLength">
        <GradientText>What's new in 2.0?</GradientText>
        <Body color={colors.medium_grey}>
          Fewer features. Worse usablility.
        </Body>
      </Stack>
      <Stack gap={[1, 1, 1]} className="MaxTextLength">
        <Body color={colors.dark_grey}>
          <b>Removed features:</b>
        </Body>
        <ul>
          <Body color={colors.medium_grey} as="li">
            No more search. Search is hard you know?
          </Body>
          <Body color={colors.medium_grey} as="li">
            No more favourite/recent locations.{' '}
          </Body>
          <Body color={colors.medium_grey} as="li">
            In fact, you can only get the weather in your current location. Hope
            you don’t travel.
          </Body>
          <Body color={colors.medium_grey} as="li">
            Shorter forecasts.
          </Body>
        </ul>
      </Stack>
      <Stack gap={[1, 1, 1]} className="MaxTextLength">
        <Body>
          <b>New features:</b>
        </Body>
        <ul>
          <Body color={colors.medium_grey} as="li">
            The colors swoosh around now. That’s pretty cool right?
          </Body>
          <Body color={colors.medium_grey} as="li">
            Slightly more accurate forecasts.
          </Body>
        </ul>
      </Stack>
    </Stack>
  </FullHeightSection>
)
