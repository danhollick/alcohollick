'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SunIcon = ({ isActive, setActiveVid }) => {
  const randomSvgId = `warmGradient${Math.floor(Math.random() * 10) + 1}`
  return (
    <div
      onClick={() => setActiveVid('warm')}
      className=" w-10 h-10 rounded-lg bg-black/5 hover:bg-black/10 grid items-center justify-center"
    >
      <motion.svg
        transition={{
          duration: 4,
          type: 'tween',
          repeat: Infinity,
        }}
        variants={{
          active: { rotate: 360 },
        }}
        initial={{ rotate: 0 }}
        animate={isActive ? 'active' : 'initial'}
        className=" z-50 align-middle stroke-none mix-blend-difference"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill={isActive ? `url(#${randomSvgId})` : '#1a1a1a60'}
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
      </motion.svg>
    </div>
  )
}

const CloudIcon = ({ isActive, setActiveVid }) => {
  const randomSvgId = `coldGradient${Math.floor(Math.random() * 10) + 1}`
  return (
    <motion.div
      // variants={{
      //   active: { rotate: [0, 0, 270, 270, 0] },
      //   inactive: {},
      // }}
      // transition={{
      //   duration: 10,
      //   type: 'tween',
      //   repeat: Infinity,
      //   repeatType: 'reverse',
      // }}
      animate={isActive ? 'active' : 'initial'}
      onClick={() => setActiveVid('cold')}
      className="z-50  w-10 h-10 rounded-lg bg-black/5 hover:bg-black/10 grid items-center justify-center "
    >
      <motion.svg
        variants={{
          active: { pathLength: 1 },
        }}
        initial={{ pathLength: 0 }}
        animate={isActive ? 'active' : 'initial'}
        className="z-1 align-middle fill-none stroke-none mix-blend-difference"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <motion.g clipPath="url(#clip0)">
          <motion.path
            fill={isActive ? `url(#${randomSvgId})` : '#1a1a1a60'}
            fillRule="evenodd"
            d="M8.082 1.047A9 9 0 0117.48 7h.522a6 6 0 012.4 11.496 1 1 0 01-.802-1.832A4 4 0 0017.999 9H16.74a1 1 0 01-.968-.75 7 7 0 10-11.148 7.219 1 1 0 01-1.248 1.562A9 9 0 018.082 1.047zM7 16a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h.01a1 1 0 100-2H8zm3-1a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm1 3a1 1 0 100 2h.01a1 1 0 100-2H12zm3-5a1 1 0 011-1h.01a1 1 0 110 2H16a1 1 0 01-1-1zm1 3a1 1 0 100 2h.01a1 1 0 100-2H16z"
            clipRule="evenodd"
          />
        </motion.g>
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
      </motion.svg>
    </motion.div>
  )
}

const Toggle = ({ setActiveVid, activeVid }) => (
  <div className="grid grid-cols-2 gap-4 justify-self-center">
    <SunIcon setActiveVid={setActiveVid} isActive={activeVid === 'warm'} />
    <CloudIcon setActiveVid={setActiveVid} isActive={activeVid === 'cold'} />
  </div>
)

const Mobile = () => {
  const [activeVid, setActiveVid] = useState('warm')

  return (
    <motion.div
      whileHover={{
        y: -10,
        rotate: 0,
        rotateX: 2,
        rotateY: 2,
        rotateZ: 1,
      }}
      animate={{
        y: 0,
        x: 0,
        rotate: -1,
        opacity: 1,
        transition: { duration: 0.3 },
      }}
      initial={{ y: 50, x: -20, rotate: -8, opacity: 0 }}
      className="grid grid-flow-row gap-10"
    >
      <Toggle activeVid={activeVid} setActiveVid={setActiveVid} />
      <motion.div
        whileHover={{
          boxShadow:
            '10px 80px 100px rgba(0, 0, 0, 0.12),inset 0 -5px 6px 0 rgba(10, 37, 64, 0.35)',
        }}
        style={{
          margin: 0,
          boxSizing: 'border-box',
          position: 'relative',
          contain: 'paint',
          // width: '264px',
          // height: '534px',
          padding: '12px',
          borderRadius: '48px',
          background: '#F4F4F5',
          boxShadow:
            '0px 30px 60px rgba(0, 0, 0, 0.12), inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35)',
          userSelect: 'none',
          overflow: 'hidden',
          display: 'grid',
          justifySelf: 'center',
          animationTimingFunction: 'ease-out',
          animationIterationCount: 'infinite',
        }}
      >
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
      </motion.div>
    </motion.div>
  )
}

Mobile.propTypes = {}

export default Mobile
