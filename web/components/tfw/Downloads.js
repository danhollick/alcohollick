import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Columns, Stack } from '../layout'
import { Heading, Body } from '../text'
import { colors } from '../../utils/colors'
import { AppStoreIcons } from './Hero'

const Wrapper = styled.div`
  display: grid;
  padding: 80px 0px;
  grid-row-gap: 40px;
  width: 100%;
  height: 100vh;
  align-content: center;
  .MaxTextLength {
    max-width: 400px;
  }
`

const GradientText = styled.h1`
  background-image: linear-gradient(106.75deg, #b100a0 4.92%, #e7eb3a 121.86%);

  font-weight: 700;
  font-size: max(4vh, 40px);
  line-height: 110%;
  /* letter-spacing: -0.01em; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

export const Downloads = () => (
  <Wrapper>
    <Stack>
      <GradientText>You still want it?</GradientText>
      <Body color={colors.medium_grey}>
        Woah, people don't make it down here often.
      </Body>
    </Stack>
    <AppStoreIcons />
  </Wrapper>
)
