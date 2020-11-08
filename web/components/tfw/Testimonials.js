import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Stack, Columns } from '../layout'
import { Body } from '../text'
import { colors } from '../../utils/colors'

const Wrapper = styled.div`
  display: grid;
  padding: 80px 0px;
  grid-row-gap: 40px;
  width: 100%;
  .MaxTextLength {
    max-width: 400px;
  }
`

export const Testimonials = () => (
  <Wrapper>
    <Body
      className="JustifyCenter"
      color={colors.light_grey}
      fontStyle="italic"
    >
      ** None of these companies have ever used this app **
    </Body>
    <Columns spacing={10} count={3} smallCount={1} className="AlignCenter">
      <Stack>
        <Image
          width={120}
          height={120}
          className="JustifyCenter"
          src="/TC-logo.png"
        />
        <Body
          fontStyle="italic"
          color={colors.medium_grey}
          className="JustifyCenter"
        >
          "Nice colors."
        </Body>
      </Stack>
      <Stack>
        <Image
          width={120}
          height={120}
          className="JustifyCenter"
          src="/VB-logo.png"
        />
        <Body
          fontStyle="italic"
          color={colors.medium_grey}
          className="JustifyCenter"
        >
          "Deleted it almost immediately."
        </Body>
      </Stack>
      <Stack>
        <Image
          width={120}
          height={120}
          className="JustifyCenter"
          src="/Wired-logo.png"
        />
        <Body
          fontStyle="italic"
          color={colors.medium_grey}
          className="JustifyCenter"
        >
          "I don’t see the point of this app."
        </Body>
      </Stack>
    </Columns>
  </Wrapper>
)
