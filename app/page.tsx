'use client'
import Profile from './profile'
import P5Wrapper from './p5Wrapper'
import React, { useLayoutEffect, useEffect, useState, useCallback } from 'react'
import { useWindowSize, useMeasure } from 'react-use'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { isSafari } from 'react-device-detect'

export default function Home() {
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure()
  const { width: initialWidth, height: initialHeight } = useWindowSize()
  const [showChild, setShowChild] = useState(false)

  const [grid, setGrid] = useState({
    size: 80,
    outerWidth: width > 0 ? width : initialWidth,
    outerHeight: height > 0 ? height : initialHeight,
    innerWidth: Math.round(initialHeight / 80) * 80,
    innerHeight: Math.round(initialHeight / 80) * 80,
    cardWidth: initialWidth / 2,
    cardHeight: initialHeight / 2,
    horizontalPadding: 0,
    verticalPadding: 0,
  })

  const fitGrid = useCallback(({ width, height }) => {
    console.log('isSafari', isSafari)
    let outerWidth = isSafari ? Math.min(width, 2000) : width
    let outerHeight = isSafari ? Math.min(height, 1600) : height
    let scale

    switch (true) {
      case width < 640:
        scale = 40
        break
      case width < 1400:
        scale = 50
        break
      case width < 2000:
        scale = 60
        break
      default:
        scale = 80
        break
    }
    const horizontalPadding =
      outerWidth > 640 ? (outerWidth % scale) / 2 + scale : 0
    const verticalPadding =
      outerWidth > 640 ? (outerHeight % scale) / 2 + scale : 0
    const innerWidth =
      outerWidth > 640
        ? outerWidth - ((outerWidth % scale) + scale * 2)
        : Math.round(outerWidth / scale) * scale
    const innerHeight =
      outerWidth > 640
        ? outerHeight - ((outerHeight % scale) + scale * 2)
        : Math.round(outerHeight / scale) * scale

    const cardWidth = outerWidth > 768 ? scale * 10 : scale * 8
    const cardHeight = outerWidth > 768 ? scale * 6 : scale * 11

    setGrid({
      size: scale,
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      cardWidth: cardWidth,
      cardHeight: cardHeight,
      horizontalPadding: horizontalPadding,
      verticalPadding: verticalPadding,
    })
  }, [])

  useEffect(() => {
    if (width > 0) {
      setShowChild(true)
    }
  }, [width, height, fitGrid])

  useLayoutEffect(() => {
    // console.log('before', showChild)
    fitGrid({ width, height })
    // console.log('after', showChild)
  }, [width, height, fitGrid, showChild])

  return (
    <div
      className="h-screen grid w-screen overflow-hidden absolute justify-center"
      ref={ref}
    >
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        // style={{
        //   width: grid.cardWidth,
        //   height: grid.cardHeight,
        //   top:
        //     grid.verticalPadding +
        //     Math.floor(grid.innerHeight / 2 / grid.size) * grid.size -
        //     grid.cardHeight / 2,
        //   left:
        //     grid.horizontalPadding +
        //     Math.floor(grid.innerWidth / 2 / grid.size) * grid.size -
        //     grid.cardWidth / 2,
        // }}
        style={{
          width: grid.cardWidth,
          height: grid.cardHeight,
          top:
            grid.verticalPadding +
            Math.floor(initialHeight / 2 / grid.size) * grid.size -
            grid.cardHeight / 2,
          left:
            grid.horizontalPadding +
            Math.floor(initialWidth / 2 / grid.size) * grid.size -
            grid.cardWidth / 2,
        }}
        // style={{
        //   width: grid.cardWidth,
        //   height: grid.cardHeight,
        //   top: initialHeight / 2 - grid.cardHeight / 2,
        //   left: initialWidth / 2 - grid.cardWidth / 2,
        // }}
        className="grid absolute z-10 grid-flow-row bg-[#FAFAFA] md:grid-cols-[auto,1fr] md:py-10 md:pl-10 md:pr-6 p-4	self-center content-center items-center md:gap-8 gap-4 justify-center"
      >
        <Profile
          size={
            grid.outerWidth > 768 ? grid.cardWidth * 0.33 : grid.cardWidth * 0.5
          }
        />
        <div className="grid grid-flow-row auto-rows-auto content-center gap-4">
          <div>
            <h1 className="text-4xl font-serif text-gray-900 font-semibold">
              Dan Hollick.
            </h1>
            <h3 className=" text-gray-700 font-mono">Design, technically.</h3>
          </div>
          <div className="text-gray-900 grid grid-flow-row auto-rows-auto gap-0 mt-0 ">
            {/* <p className="">
              Product designer, working with clients through
              <br />{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                href="https://www.rectangle-labs.com"
              >
                @Rectangle Labs
              </a>
              , a tiny design company.
            </p> */}
            <p className="">
              Client work:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                href="https://www.rectangle-labs.com"
              >
                @Rectangle Labs.
              </a>
            </p>
            <p className="">
              Prev:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                href="https://www.tidal.com"
              >
                @TIDAL
              </a>
              ,{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                href="https://www.barclays.com"
              >
                @Barclays
              </a>{' '}
              and more.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-[auto,auto] lg:gap-6 gap-4 justify-start mt-4 md:mt-6">
              <Link href={'/writing'}>
                <h3 className="  font-serif font-semibold text-xl ext-link">
                  Writing. →
                </h3>
              </Link>
              <a href="https://typefully.com/DanHollick">
                <h3 className="  font-serif font-semibold text-xl ext-link">
                  Threads. →
                </h3>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {showChild && (
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <P5Wrapper grid={grid} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
