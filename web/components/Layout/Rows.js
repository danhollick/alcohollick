import styled from 'styled-components'
import PropTypes from 'prop-types'
import { below } from './styleUtils'
import { CommonWrapper } from './CommonLayoutWrapper'

const RowWrapper = styled(CommonWrapper)`
  grid-template-rows: ${props => props.rows[0]};
  grid-auto-flow: ${props => props.overflow[0]};

  ${below.med`
    grid-template-rows: ${props => props.rows[1]};
    grid-auto-flow: ${props => props.overflow[1]};
  `}

  ${below.small`
    grid-template-rows: ${props => props.rows[2]};
    grid-auto-flow: ${props => props.overflow[2]};
  `}
`

export const Rows = ({
  className,
  as,
  children,
  rows = ['auto', ' auto', 'auto'],
  overflow = ['row', 'row', 'row'],
  ...props
}) => (
  <RowWrapper
    {...props}
    className={className}
    as={as}
    rows={rows}
    overflow={overflow}
  >
    {children}
  </RowWrapper>
)

Rows.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rows: PropTypes.arrayOf(PropTypes.string),
  overflow: PropTypes.arrayOf(PropTypes.oneOf(['row', 'column'])),
}
