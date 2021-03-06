import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Stack, below } from '../layout'
import { Columns } from '../Layout/index'
import { MassiveHeading, Heading } from '../text'
import { colors } from '../../utils/colors'
import Mobile from './Mobile'

const GradientText = styled.h1`
  background-image: radial-gradient(
    75.9% 213.41% at 4.82% 27.78%,
    #d490b9 0%,
    #6630af 72.92%,
    #e5e8f7 93.75%
  );

  font-weight: 900;
  font-size: max(8vh, 40px);

  line-height: 100%;
  /* letter-spacing: -0.01em; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

const HeroWrapper = styled.div`
  /* background-color: red; */
  /* margin: 0rem -9999px; */
  min-height: 100vh;
  /* padding: 0rem 9999px; */
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 1fr;
  align-content: center;
  align-self: flex-start;
  /* grid-template-rows: auto 1fr;
  background: #fdfdfd; */
  /* background: rgb(162, 192, 207);
  background: linear-gradient(
    0deg,
    rgba(162, 192, 207, 1) 0%,
    rgba(135, 171, 189, 1) 100%
  ); */
  ${below.med`
    grid-template-columns: 1fr;
    grid-row-gap: 56px;
  `}
`

const Subheading = styled.h3`
  font-family: Inter;
  color: rgba(119, 122, 129, 1);

  font-style: normal;
  font-weight: 500;
  font-size: max(4vh, 24px);
  line-height: 110%;
`
const SVGSpin = styled.svg`
animation-name: spin;
animation-duration: 4000ms;
animation-iteration-count: infinite;
animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
/* transform: rotate(3deg); */
 /* transform: rotate(0.3rad);/ */
 /* transform: rotate(3grad); */ 
 /* transform: rotate(.03turn);  */
}

@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}`

const IconWrapper = styled.a`
  justify-self: start;
  align-self: start;
  display: grid;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  :hover {
    transform: translateY(-4%);
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.12);
  }
`

export const Hero = () => (
  <HeroWrapper>
    <SVGSpin
      width="max(4vh, 64px)"
      height="max(4vh, 64px)"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9862 59.1818H38.3499L36.7135 41.1818L51.6453 51.6136L59.8272 37.2955L43.4635 29.7273L59.8272 22.1591L51.6453 7.84092L36.7135 18.2727L38.3499 0.272736H21.9862L23.6226 18.2727L8.69079 7.84092L0.508972 22.1591L16.8726 29.7273L0.508972 37.2955L8.69079 51.6136L23.6226 41.1818L21.9862 59.1818Z"
        fill="url(#paint0_radial)"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-9.56627 17.8889) rotate(56.4574) scale(126.378 237.432)"
        >
          <stop stopColor="#D490B9" />
          <stop offset="0.729167" stopColor="#6630AF" />
          <stop offset="0.9375" stopColor="#E5E8F7" />
        </radialGradient>
      </defs>
    </SVGSpin>

    <GradientText>
      The
      <br /> Fucking
      <br /> Weather.
    </GradientText>
    <Subheading color={colors.medium_grey}>
      A weather app for people who don't give a shit about weather.
    </Subheading>
    <AppStoreIcons />
  </HeroWrapper>
)

export const AppStoreIcons = () => (
  <Columns
    justifyContent={['start', 'center', 'center']}
    justifySelf={['start', 'start', 'start']}
    columns={['1fr 1fr', '1fr 1fr', '1fr 1fr']}
    gap={[4, 4, 4]}
  >
    <IconWrapper
      target="_blank"
      rel="noopener noreferrer"
      href="https://play.google.com/store/apps/details?id=com.twf.prod"
    >
      <Image
        style={{ display: 'block', verticalAlign: 'bottom' }}
        width={100}
        height={30}
        src="/play-store.png"
      />
    </IconWrapper>
    <IconWrapper
      target="_blank"
      rel="noopener noreferrer"
      href="https://itunes.apple.com/us/app/tfw/id1359091947?ls=1&mt=8"
    >
      <Image
        style={{ display: 'block', verticalAlign: 'bottom' }}
        width={100}
        height={30}
        src="/app-store.png"
      />
    </IconWrapper>
  </Columns>
)
