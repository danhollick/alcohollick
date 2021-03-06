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

const CirclePattern = styled.div`
  border-radius: 2px;
  height: 100vh;
  width: 120vw;
  position: absolute;
  margin: 0rem 0rem 0rem -50vw;
  padding: 0rem 0rem 0rem -50vw;
  z-index: 0;
  background-color: transparent;
  opacity: 1;
  background-image: radial-gradient(#dbd1fd 1.05px, transparent 1.05px),
    radial-gradient(#dbd1fd 1.05px, #ffffff 1.05px);
  background-size: 42px 42px;
  background-position: 0 0, 21px 21px;
`

const Review = styled.div`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
  width: 100%;
  justify-self: stretch;
  /* object-fit: contain; */
  :hover {
    transform: translateY(-4%);
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.12);
  }
`

const GradientText = styled.h1`
  background-image: radial-gradient(
    75.9% 213.41% at 4.82% 27.78%,
    #d490b9 0%,
    #6630af 72.92%,
    #e5e8f7 100%
  );

  font-weight: 700;
  font-size: max(4vh, 40px);
  line-height: 110%;
  /* letter-spacing: -0.01em; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

export const Reviews = () => (
  <FullHeightSection>
    <CirclePattern />
    <Stack
      css={`
        z-index: 2;
      `}
      alignSelf={['center', 'center', 'center']}
      gap={[5, 5, 5]}
    >
      <Stack gap={[2, 2, 2]} className="MaxTextLength">
        <GradientText>What are people saying?</GradientText>
        <Body color={colors.medium_grey}>Honestly? Mostly bad things.</Body>
      </Stack>
      <Stack gap={[3, 3, 3]}>
        <Review>
          <Image src="/review-1.png" width={500} height={83} />
        </Review>
        <Review>
          <Image src="/review-2.png" width={500} height={83} />
        </Review>
        <Review>
          <Image src="/review-3.png" width={500} height={68} />
        </Review>
        <Review>
          <Image src="/review-4.png" width={500} height={68} />
        </Review>
      </Stack>
    </Stack>
  </FullHeightSection>
)
