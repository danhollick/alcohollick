import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const sizes = {
  small: 450,
  med: 960,
  large: 1140,
  massive: 2000,
}

export const getWindowSize = () => {
  if (typeof window === 'undefined') {
    return null
  }
  const intViewportWidth = window.innerWidth
  let widths = Object.keys(sizes).filter(
    size => sizes[size] >= intViewportWidth
  )
  widths = widths[0]
  return widths
}

export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const Stack = styled.div`
  display: grid;
  padding: ${props =>
    props.padding
      ? `${props.padding[0] * 8}px ${props.padding[1] * 8}px`
      : `auto`};
  row-gap: ${props => (props.spacing ? `${props.spacing * 8}px` : `8px`)};
  grid-template-rows: ${props =>
    props.count
      ? `repeat(${props.count}, auto )`
      : `repeat(${React.Children.count(props.children)}, auto )`};

  ${below.med`
      padding: ${props =>
        props.smallPadding &&
        `${props.smallPadding[0] * 8}px ${props.smallPadding[1] * 8}px`};
      row-gap: ${props =>
        props.smallSpacing ? `${props.smallSpacing * 8}px` : `8px`};
      grid-template-rows: ${props =>
        props.smallCount && `repeat(${props.smallCount}, auto )`}
  `}
`

export const Columns = styled.div`
  display: grid;
  padding: ${props =>
    props.padding
      ? `${props.padding[0] * 8}px ${props.padding[1] * 8}px`
      : `auto`};
  grid-template-columns: ${props =>
    props.count
      ? `repeat(${props.count}, 1fr )`
      : `repeat(${React.Children.count(props.children)}, auto )`};
  column-gap: ${props => (props.spacing ? `${props.spacing * 8}px` : `8px`)};
  row-gap: ${props => (props.spacing ? `${props.spacing * 8}px` : `8px`)};

  ${below.med`
   padding: ${props =>
     props.smallPadding &&
     `${props.smallPadding[0] * 8}px ${props.smallPadding[1] * 8}px`};
  grid-template-columns: ${props =>
    props.smallCount && `repeat(${props.smallCount}, 1fr )`};
  column-gap: ${props => props.smallSpacing && `${props.smallSpacing * 8}px`};
  row-gap: ${props => props.smallSpacing && `${props.smallSpacing * 8}px`};
  `}
`

export const UnstyledLink = styled(Link)`
  appearance: none;
  text-decoration: none;
`

export const HoverWrapper = styled.div`
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
`
