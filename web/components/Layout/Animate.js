import styled from 'styled-components'
import PropTypes from 'prop-types'

const AnimateWrapper = styled.div`
  border: ${props => (props.debug ? 'solid 2px magenta' : `none`)};
  animation-name: ${props => `animate-in-${props.uniqueKey}`};
  animation-fill-mode: both;
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.duration};
  animation-timing-function: ${props => props.easing};

  ${props => `@keyframes animate-in-${props.uniqueKey}`} {
    from {
      opacity: 0;
      transform: ${props =>
        `translate3d(${props.moveFrom}) rotate3d(${props.rotateFrom});`};
    }

    to {
      opacity: 1;
      transform: ${props => `translate3d(${props.to}) rotate3d(${props.to});`};
    }
  }
`

export const Animate = ({
  className,
  as,
  children,
  css,
  moveFrom = '0, 50%, 0',
  moveTo = '0, 0, 0',
  rotateFrom = '0, 0, 0, 0deg',
  rotateTo = '0, 0, 0, 0deg',
  duration = '300ms',
  delay = 'none',
  easing = 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  debug = false,
  ...props
}) => {
  // assign a unique name to each animation using a random number
  const uniqueKey = Math.floor(Math.random() * 100) + 1
  return (
    <AnimateWrapper
      debug={debug}
      moveFrom={moveFrom}
      moveTo={moveTo}
      rotateFrom={rotateFrom}
      rotateTo={rotateTo}
      duration={duration}
      delay={delay}
      easing={easing}
      {...props}
      as={as}
      css={css}
      className={className}
      uniqueKey={uniqueKey.toString()}
    >
      {children}
    </AnimateWrapper>
  )
}

Animate.propTypes = {
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
  moveFrom: PropTypes.string,
  moveTo: PropTypes.string,
  rotateFrom: PropTypes.string,
  rotateTo: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.string,
  easing: PropTypes.string,
  debug: PropTypes.bool,
}
