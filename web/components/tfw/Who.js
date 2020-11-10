import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Stack, Columns, below } from '../Layout/index'
import { Heading, Body } from '../text'
import { colors } from '../../utils/colors'

const FullHeightSection = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  position: relative;
  .MaxTextLength {
    max-width: 400px;
  }
`

const CirclePattern = styled.div`
  width: 120vw;
  border-radius: 2px;
  height: 100%;

  position: absolute;
  margin: 0rem 0rem 0rem -50vw;
  padding: 0rem 0rem 0rem -50vw;
  z-index: 0;

  background-color: #ffffff;
  opacity: 0.1;
  background: radial-gradient(
      circle,
      transparent 20%,
      #ffffff 20%,
      #ffffff 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        #ffffff 20%,
        #ffffff 80%,
        transparent 80%,
        transparent
      )
      17.5px 17.5px,
    linear-gradient(
        #e95407 1.4000000000000001px,
        transparent 1.4000000000000001px
      )
      0 -0.7000000000000001px,
    linear-gradient(
        90deg,
        #e95407 1.4000000000000001px,
        #ffffff 1.4000000000000001px
      ) -0.7000000000000001px 0;
  background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
  ${below.med`
        margin: 0rem 0rem 0rem -6vw;
        padding: 0rem 0rem 0rem -6vw;
        width: 112vw;
      `}
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

const Profile = styled.div`
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  justify-items: start;
  cursor: pointer;
  :hover {
    transform: translateY(-4%);
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.12);
  }
`

export const Who = () => (
  <FullHeightSection>
    <CirclePattern />
    <Stack
      css={`
        z-index: 2;
      `}
      alignSelf={['center', 'center', 'center']}
      gap={[3, 3, 3]}
    >
      <Stack gap={[1, 1, 1]} className="MaxTextLength">
        <GradientText>Who made this shit?</GradientText>
      </Stack>
      <Link href="/">
        <a style={{ textDecoration: 'none', appearance: 'none' }}>
          <Profile>
            <Columns
              hp={[2, 2, 2]}
              vp={[2, 2, 2]}
              //   alignItems={['center', 'center', 'center']}
              columns={['auto 1fr', 'auto 1fr', 'auto 1fr']}
            >
              <img
                style={{ borderRadius: '100px' }}
                src="/profile.png"
                height={56}
                width={56}
              />
              <Stack gap={[0, 0, 0]}>
                <Heading>Dan Hollick</Heading>
                <Body color={colors.medium_grey}>
                  complaints@tobiasvanschneider.com
                </Body>
              </Stack>
            </Columns>
          </Profile>
        </a>
      </Link>
    </Stack>
  </FullHeightSection>
)
