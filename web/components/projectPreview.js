import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Stack, HoverWrapper } from './layout'
import { Title, Subtitle } from './text'
import { colors } from '../utils/colors'

const Greyscale = styled.img`
  max-height: 200px;
  width: 100%;
  /* min-height: 100%; */
  object-fit: cover;
  grid-row: 1;
  grid-column: 1;
  transition: filter ease-in-out 200ms;
  filter: grayscale(1);
  z-index: 1;
`

const PurpleFilter = styled.div`
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.purplish};
  z-index: 2;
  mix-blend-mode: screen;
  transition: background-color ease-in-out 200ms;
`

const PurplePostImage = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
`

const ProjectContainer = styled.div`
  border: 1px solid ${colors.light_grey};
  display: grid;
  height: 100%;
  transition: transform ease-in-out 200ms;
  :hover {
    ${Greyscale} {
      filter: grayscale(0);
    }
    ${PurpleFilter} {
      background-color: transparent;
    }
  }

  animation-name: fadeInUpSlight;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-delay: ${props => `${props.delay * 150}ms`};
`

export const ProjectPreview = ({
  name,
  image,
  description,
  className,
  delay = 0,
}) => (
  <HoverWrapper>
    <ProjectContainer delay={delay}>
      <Stack>
        <PurplePostImage className={className}>
          <PurpleFilter />
          <Greyscale src={image} layout="fill" />
        </PurplePostImage>
        <Stack className="AlignEnd" padding={[2, 2]}>
          <Title>{name}</Title>
          <Subtitle>{description}</Subtitle>
        </Stack>
      </Stack>
    </ProjectContainer>
  </HoverWrapper>
)
