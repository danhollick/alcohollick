import { css } from 'styled-components'

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
