import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Stack, Columns } from '../layout'
import { Heading, Body } from '../text'

const FullHeightSection = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  .MaxTextLength {
    max-width: 400px;
  }
`

export const Section1 = () => (
  <FullHeightSection id="_why">
    <Columns
      padding={[6, 3]}
      spacing={10}
      smallSpacing={10}
      smallCount={1}
      className="AlignCenter"
    >
      <Image
        className="JustifyCenter"
        src="/div2.png"
        width={320}
        height={320}
      />
      <Stack
        spacing={4}
        smallSpacing={4}
        className="AlignCenter  MaxTextLength"
      >
        <Heading>The most vague weather app available today.</Heading>
        <Body>
          If you’re like us, you hate how accurate and precise weather apps are.
        </Body>
        <Body>
          That’s why we spent almost an entire month crafting the world’s least
          accurate mobile weather experience.
        </Body>
      </Stack>
    </Columns>
  </FullHeightSection>
)
