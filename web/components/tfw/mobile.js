import React, { useState } from 'react'
import styled from 'styled-components'
import { Columns } from '../Layout/index'
import { below } from '../Layout/styleUtils'

const Phone = styled.div`
  margin: 0;
  box-sizing: border-box;
  position: relative;
  contain: paint;
  width: 264px;
  height: 534px;
  padding: 12px;
  border-radius: 48px;
  background: white;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.12),
    inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35);
  user-select: none;
  overflow: hidden;
  display: grid;
  justify-self: center;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: rotate3d(0, 0, 1, -2deg);
  :hover {
    transform: translateY(-1%) rotate3d(2, 2, 1, -4deg);
    box-shadow: 10px 80px 100px rgba(0, 0, 0, 0.12),
      inset 0 -5px 6px 0 rgba(10, 37, 64, 0.35);
  }
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
`

const PhoneWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  height: 100vh;
  display: grid;
  grid-row-gap: 2.4rem;
  align-content: center;
  justify-content: center;
  ${below.med`
    position: relative;
    height: auto;
  `}
  .Pointer {
    cursor: pointer;
  }
`

const SunIcon = ({ isActive, setActiveVid }) => {
  const randomSvgId = `warmGradient${Math.floor(Math.random() * 10) + 1}`
  return (
    <svg
      onClick={() => setActiveVid('warm')}
      className="Pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={isActive ? `url(#${randomSvgId})` : '#909090'}
        fillRule="evenodd"
        d="M12 0a1 1 0 011 1v2a1 1 0 11-2 0V1a1 1 0 011-1zm0 8a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zm7 9a1 1 0 10-2 0v2a1 1 0 102 0v-2zM3.513 3.513a1 1 0 011.414 0l1.42 1.42a1 1 0 01-1.414 1.414l-1.42-1.42a1 1 0 010-1.414zm15.554 14.14a1 1 0 00-1.414 1.414l1.42 1.42a1 1 0 001.414-1.414l-1.42-1.42zM0 12a1 1 0 011-1h2a1 1 0 110 2H1a1 1 0 01-1-1zm21-1a1 1 0 100 2h2a1 1 0 100-2h-2zM6.347 17.653a1 1 0 010 1.414l-1.42 1.42a1 1 0 01-1.414-1.414l1.42-1.42a1 1 0 011.414 0zm14.14-12.726a1 1 0 00-1.414-1.414l-1.42 1.42a1 1 0 001.414 1.414l1.42-1.42z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={randomSvgId}
          x1="12"
          x2="12"
          y1="0"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B11515" />
          <stop offset="1" stopColor="#DBA007" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const CloudIcon = ({ isActive, setActiveVid }) => {
  const randomSvgId = `coldGradient${Math.floor(Math.random() * 10) + 1}`
  return (
    <svg
      onClick={() => setActiveVid('cold')}
      className="Pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0)">
        <path
          fill={isActive ? `url(#${randomSvgId})` : '#909090'}
          fillRule="evenodd"
          d="M8.082 1.047A9 9 0 0117.48 7h.522a6 6 0 012.4 11.496 1 1 0 01-.802-1.832A4 4 0 0017.999 9H16.74a1 1 0 01-.968-.75 7 7 0 10-11.148 7.219 1 1 0 01-1.248 1.562A9 9 0 018.082 1.047zM7 16a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h.01a1 1 0 100-2H8zm3-1a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm1 3a1 1 0 100 2h.01a1 1 0 100-2H12zm3-5a1 1 0 011-1h.01a1 1 0 110 2H16a1 1 0 01-1-1zm1 3a1 1 0 100 2h.01a1 1 0 100-2H16z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id={randomSvgId}
          x1="11.994"
          x2="11.994"
          y1="1"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68D9C4" />
          <stop offset="1" stopColor="#4B40D1" />
        </linearGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const Toggle = ({ setActiveVid, activeVid }) => (
  <Columns
    gap={[4, 4, 4]}
    justifySelf={['center', 'center', 'center']}
    columns={['1fr 1fr', '1fr 1fr', '1fr 1fr']}
  >
    <SunIcon setActiveVid={setActiveVid} isActive={activeVid === 'warm'} />
    <CloudIcon
      css={`
        z-index: 1;
        vertical-align: middle;
        fill: none;
        stroke: none;
      `}
      setActiveVid={setActiveVid}
      isActive={activeVid === 'cold'}
    />
  </Columns>
)

const Mobile = () => {
  const [activeVid, setActiveVid] = useState('warm')

  return (
    <PhoneWrapper>
      <Toggle activeVid={activeVid} setActiveVid={setActiveVid} />
      <Phone>
        <div
          style={{
            overflow: 'hidden',
            borderRadius: '36px',
            // hacks to make video clipping work
            transform: 'translate3d(0, 0, 0)',
            borderLeft: '1px solid transparent',
            borderRight: '1px solid transparent',
          }}
        >
          {activeVid === 'warm' && (
            <video
              width="240"
              // height="490"
              autoPlay
              muted
              loop
              poster="/warm.png"
            >
              <source src="/warm.mp4" type="video/mp4" />
            </video>
          )}
          {activeVid === 'cold' && (
            <video
              width="240"
              // height="490"
              autoPlay
              muted
              loop
              poster="/cold.png"
            >
              <source src="/cold.mp4" type="video/mp4" />
            </video>
          )}
          {/* <img
            src="/fallback-image-min.jpg"
            alt="Screenshot of app with forcasts on device"
            width="240"
          /> */}
        </div>
      </Phone>
    </PhoneWrapper>
  )
}

Mobile.propTypes = {}

export default Mobile
