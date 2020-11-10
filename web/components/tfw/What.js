import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Stack, Columns } from '../layout'
import { Heading, Body } from '../text'
import { colors } from '../../utils/colors'
import { below } from '../Layout/styleUtils'

const FullHeightSection = styled.div`
  display: grid;
  min-height: 120vh;
  width: 100%;
  position: relative;
  /* background-color: red; */
  /* contain: content; */
  .MaxTextLength {
    max-width: 400px;
  }

  ${below.med`
      min-height: 100vh;
      `}
`

const GradientText = styled.h1`
  background-image: linear-gradient(103.03deg, #75c6b7 14.65%, #5d53d6 89.26%);

  font-weight: 700;
  font-size: max(4vh, 40px);
  line-height: 110%;
  /* letter-spacing: -0.01em; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

const CirclePattern = styled.div`
  /* height: 100vh;
  width: 96vw; */
  width: 120vw;
  border-radius: 2px;
  height: 100%;
  /* width: 60vw; */
  position: absolute;
  margin: 0rem 0rem 0rem -50vw;
  padding: 0rem 0rem 0rem -50vw;
  z-index: 0;

  background-color: #ffffff;
  opacity: 0.3;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #ffffff 40px
    ),
    repeating-linear-gradient(#cbebe855, #cbebe8);
  ${below.med`
        margin: 0rem 0rem 0rem -6vw;
        padding: 0rem 0rem 0rem -6vw;
        width: 112vw;
      `}
`

export const What = () => (
  <>
    <FullHeightSection id="_why">
      <CirclePattern />
      <Stack
        css={`
          z-index: 2;
        `}
        spacing={4}
        smallSpacing={4}
        className="AlignCenter  MaxTextLength"
      >
        {/* <GradientText>The most vague weather app available today.</GradientText>
        <Body>
          If you’re like us, you hate how accurate and precise weather apps are.
        </Body>
        <Body>
          That’s why we spent almost an entire month crafting the world’s least
          accurate mobile weather experience.
        </Body> */}
        <GradientText>Precipitation? Humidity? Pressure?</GradientText>
        <Body color={colors.medium_grey}>
          Who knows what these words even mean? We certainly don't.
        </Body>
        <Body color={colors.medium_grey}>
          That’s why we spent almost an entire month crafting the world’s least
          accurate mobile weather experience.
        </Body>
      </Stack>
    </FullHeightSection>
  </>
)
