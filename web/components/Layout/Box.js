import styled from 'styled-components'
import PropTypes from 'prop-types'
import { below } from './styleUtils'
import { CommonWrapper } from './CommonLayoutWrapper'

const BoxWrapper = styled(CommonWrapper)`
  display: ${props => props.display[0]};
  ${below.med`
    display: ${props => props.display[1]};
  `}
  ${below.small`
    display: ${props => props.display[2]};
  `}
`

export const Box = ({
  className,
  as,
  children,
  display = ['inline-block', 'inline-block', 'inline-block'],
  css,
  ...props
}) => (
  <BoxWrapper
    {...props}
    as={as}
    css={css}
    className={className}
    display={display}
  >
    {children}
  </BoxWrapper>
)

Box.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  css: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  display: PropTypes.arrayOf(
    PropTypes.oneOf([
      'initial',
      'inline-block',
      'block',
      'grid',
      'flex',
      'none',
    ])
  ),
}
