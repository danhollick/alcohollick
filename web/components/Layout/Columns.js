import styled from 'styled-components'
import PropTypes from 'prop-types'
import { below } from './styleUtils'
import { CommonWrapper } from './CommonLayoutWrapper'

const ColumnWrapper = styled(CommonWrapper)`
  grid-template-columns: ${props => props.columns[0]};
  grid-auto-flow: ${props => props.overflow[0]};
  ${below.med`
  grid-template-columns: ${props => props.columns[1]};
  grid-auto-flow: ${props => props.overflow[1]};
  `}
  ${below.small`
  grid-template-columns: ${props => props.columns[2]};
  grid-auto-flow: ${props => props.overflow[2]};
  `}
`

export const Columns = ({
  className,
  as,
  children,
  columns = ['auto', ' auto', 'auto'],
  overflow = ['column', 'row', 'row'],
  ...props
}) => (
  <ColumnWrapper
    {...props}
    className={className}
    as={as}
    columns={columns}
    overflow={overflow}
  >
    {children}
  </ColumnWrapper>
)

Columns.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  columns: PropTypes.arrayOf(PropTypes.string),
  overflow: PropTypes.arrayOf(PropTypes.oneOf(['row', 'column'])),
}
