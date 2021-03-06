import styled from 'styled-components'

export * from './Columns'
export * from './Stack'
export * from './Box'
export * from './Rows'
export * from './CommonLayoutWrapper'
export * from './Animate'
export * from './styleUtils'

const base = 8

export const FullScreenWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export const Spacer = styled.div`
  height: ${props => base * props.multiplier}px;
  width: ${props => base * props.multiplier}px;
`
