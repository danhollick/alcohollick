import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Stack } from './layout'
import { colors } from '../utils/colors'
import { Title, Subtitle } from './text'

const Greyscale = styled(Img)`
  max-height: 120px;
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

const PostContainer = styled.div`
  border: 1px solid ${colors.light_grey};
  height: 100%;
  transition: transform ease-in-out 200ms;
  :hover {
    ${Greyscale} {
      filter: grayscale(0);
    }
    ${PurpleFilter} {
      background-color: transparent;
    }
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
`

export const PostPreview = ({
  title,
  mainImage,
  description,
  publishedAt,
  className,
}) => (
  <PostContainer>
    <Stack>
      <PurplePostImage className={className}>
        <PurpleFilter />
        <Greyscale fixed={mainImage.asset.fixed} />
      </PurplePostImage>
      <Stack className="AlignEnd" padding={[2, 2]}>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </Stack>
    </Stack>
  </PostContainer>
)
