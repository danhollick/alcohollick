import styled from 'styled-components'
import PropTypes from 'prop-types'
import { below } from './styleUtils'

export const CommonWrapper = styled.div.attrs(props => ({
  width: props.width || ['initial', 'initial', 'initial'],
  height: props.height || ['initial', 'initial', 'initial'],
  hp: props.hp || [0, 0, 0],
  vp: props.vp || [0, 0, 0],
  hm: props.hm || [0, 0, 0],
  vm: props.vm || [0, 0, 0],
  gap: props.gap || [2, 2, 2],
  alignItems: props.alignItems || ['initial', 'initial', 'initial'],
  alignSelf: props.alignSelf || ['initial', 'initial', 'initial'],
  alignContent: props.alignContent || ['initial', 'initial', 'initial'],
  justifyItems: props.justifyItems || ['initial', 'initial', 'initial'],
  justifySelf: props.justifySelf || ['initial', 'initial', 'initial'],
  justifyContent: props.justifyContent || ['initial', 'initial', 'initial'],
  columnSpan: props.columnSpan || ['initial', 'initial', 'initial'],
  rowSpan: props.rowSpan || ['initial', 'initial', 'initial'],
  radius: props.radius || ['initial', 'initial', 'initial'],
  visible: props.visible || [true, true, true],
  order: props.order || ['initial', 'initial', 'initial'],
  debug: props.debug || false,
}))`
  display: ${props => (props.visible[0] ? `grid` : `none`)};
  width: ${props => props.width[0]};
  height: ${props => props.height[0]};

  padding: ${props =>
    `calc(var(--spacing_base) * ${props.vp[0]}) calc(var(--spacing_base) * ${props.hp[0]})`};
  margin: ${props =>
    `calc(var(--spacing_base) * ${props.vm[0]}) calc(var(--spacing_base) * ${props.hm[0]})`};
  grid-gap: ${props => `calc(var(--spacing_base) * ${props.gap[0]})`};
  align-self: ${props => props.alignSelf[0]};
  align-items: ${props => props.alignItems[0]};
  align-content: ${props => props.alignContent[0]};
  justify-self: ${props => props.justifySelf[0]};
  justify-items: ${props => props.justifyItems[0]};
  justify-content: ${props => props.justifyContent[0]};
  grid-column: ${props => props.columnSpan[0]};
  grid-row: ${props => props.rowSpan[0]};
  border-radius: ${props => props.radius[0]};
  border: ${props => (props.debug ? 'solid 2px magenta' : `none`)};
  order: ${props => props.order[0]};
  ${below.med`
    display: ${props => (props.visible[1] ? `grid` : `none`)};
    width: ${props => props.width[1]};
    height: ${props => props.height[1]};

    padding: ${props =>
      `calc(var(--spacing_base) * ${props.vp[1]}) calc(var(--spacing_base) * ${props.hp[1]})`};
    margin: ${props =>
      `calc(var(--spacing_base) * ${props.vm[1]}) calc(var(--spacing_base) * ${props.hm[1]})`};
    grid-gap: ${props => `calc(var(--spacing_base) * ${props.gap[1]})`};
    align-self: ${props => props.alignSelf[1]};
    align-items: ${props => props.alignItems[1]};
    align-content: ${props => props.alignContent[1]};
    justify-self: ${props => props.justifySelf[1]};
    justify-items: ${props => props.justifyItems[1]};
    justify-content: ${props => props.justifyContent[1]};
    grid-column: ${props => props.columnSpan[1]};
    grid-row: ${props => props.rowSpan[1]};
    border-radius: ${props => props.radius[1]};
    order: ${props => props.order[1]};
  `}
  ${below.small`
    display: ${props => (props.visible[2] ? `grid` : `none`)};
    width: ${props => props.width[2]};
    height: ${props => props.height[2]};
    padding: ${props =>
      `calc(var(--spacing_base) * ${props.vp[2]}) calc(var(--spacing_base) * ${props.hp[2]})`};
    margin: ${props =>
      `calc(var(--spacing_base) * ${props.vm[2]}) calc(var(--spacing_base) * ${props.hm[2]})`};
    grid-gap: ${props => `calc(var(--spacing_base) * ${props.gap[2]})`};
    align-self: ${props => props.alignSelf[2]};
    align-items: ${props => props.alignItems[2]};
    align-content: ${props => props.alignContent[2]};
    justify-self: ${props => props.justifySelf[2]};
    justify-items: ${props => props.justifyItems[2]};
    justify-content: ${props => props.justifyContent[2]};
    grid-column: ${props => props.columnSpan[2]};
    grid-row: ${props => props.rowSpan[2]};
    border-radius: ${props => props.radius[2]};
    order: ${props => props.order[2]};
  `}
`

CommonWrapper.propTypes = {
  width: PropTypes.arrayOf(PropTypes.sring),
  height: PropTypes.arrayOf(PropTypes.sring),
  hp: PropTypes.arrayOf(PropTypes.number),
  vp: PropTypes.arrayOf(PropTypes.number),
  hm: PropTypes.arrayOf(PropTypes.number),
  vm: PropTypes.arrayOf(PropTypes.number),
  gap: PropTypes.arrayOf(PropTypes.number),
  order: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.array,
  alignItems: PropTypes.arrayOf(
    PropTypes.oneOf(['stretch', 'start', 'center', 'end'])
  ),
  alignSelf: PropTypes.arrayOf(
    PropTypes.oneOf(['stretch', 'start', 'center', 'end'])
  ),
  justifyItems: PropTypes.arrayOf(
    PropTypes.oneOf(['stretch', 'start', 'center', 'end'])
  ),
  justifySelf: PropTypes.arrayOf(
    PropTypes.oneOf(['stretch', 'start', 'center', 'end'])
  ),
  justifyContent: PropTypes.arrayOf(
    PropTypes.oneOf([
      'stretch',
      'start',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'end',
    ])
  ),
  alignContent: PropTypes.arrayOf(
    PropTypes.oneOf([
      'stretch',
      'start',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'end',
    ])
  ),
  columnSpan: PropTypes.arrayOf(PropTypes.sring),
  rowSpan: PropTypes.arrayOf(PropTypes.sring),
  visible: PropTypes.arrayOf(PropTypes.bool),
  debug: PropTypes.bool,
}
