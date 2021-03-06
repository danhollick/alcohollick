import styled from 'styled-components'
import PropTypes from 'prop-types'
import { below } from './styleUtils'
import { CommonWrapper } from './CommonLayoutWrapper'

const StackWrapper = styled(CommonWrapper)`
  grid-auto-flow: ${props =>
    props.direction[0] === `vertical` ? `row` : `column`};
  ${below.med`
    grid-auto-flow: ${props =>
      props.direction[1] === `vertical` ? `row` : `column`};
  `}
  ${below.small`
    grid-auto-flow: ${props =>
      props.direction[2] === `vertical` ? `row` : `column`};
  `}
`

export const Stack = ({
  className,
  as,
  children,
  direction = ['vertical', 'vertical', 'vertical'],
  ...props
}) => (
  <StackWrapper {...props} as={as} className={className} direction={direction}>
    {children}
  </StackWrapper>
)

Stack.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  direction: PropTypes.arrayOf(PropTypes.oneOf(['vertical', 'horizontal'])),
}
