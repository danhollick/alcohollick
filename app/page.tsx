'use client'
import Profile from './profile'
import P5Wrapper from './p5Wrapper'
import React, { useLayoutEffect, useState, useCallback } from 'react'
import { useWindowSize, useMeasure } from 'react-use'
import Link from 'next/link'

export default function Home() {
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure()
  const { width: initialWidth, height: initialHeight } = useWindowSize()
  // const [gridSize, setGridSize] = useState(80)
  // TODO: maybe move the layout effect into the parent and pass the ref down?

  // const [grid, setGrid] = useState({
  //   size: 80,
  //   outerWidth: initialWidth,
  //   outerHeight: initialHeight,
  //   innerWidth: initialWidth - ((initialWidth % 80) + 80),
  //   innerHeight: initialHeight - ((initialHeight % 80) + 80),
  //   horizontalPadding: (initialWidth % 80) / 2 + 80 / 2,
  //   verticalPadding: (initialHeight % 80) / 2 + 80 / 2,
  // })

  const [grid, setGrid] = useState({
    size: 80,
    outerWidth: initialWidth,
    outerHeight: initialHeight,
    innerWidth: initialWidth,
    innerHeight: initialHeight,
    cardWidth: initialWidth / 2,
    cardHeight: initialHeight / 2,
    horizontalPadding: 0,
    verticalPadding: 0,
  })

  const fitGrid = useCallback(({ width, height }) => {
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
    const horizontalPadding = width > 640 ? (width % scale) / 2 + scale : 0
    const verticalPadding = width > 640 ? (height % scale) / 2 + scale : 0
    const innerWidth =
      width > 640
        ? width - ((width % scale) + scale * 2)
        : Math.round(width / scale) * scale
    const innerHeight =
      width > 640
        ? height - ((height % scale) + scale * 2)
        : Math.round(height / scale) * scale

    const cardWidth = width > 768 ? scale * 10 : scale * 8
    const cardHeight = width > 768 ? scale * 6 : scale * 11

    setGrid({
      size: scale,
      outerWidth: width,
      outerHeight: height,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      cardWidth: cardWidth,
      cardHeight: cardHeight,
      horizontalPadding: horizontalPadding,
      verticalPadding: verticalPadding,
    })
  }, [])

  useLayoutEffect(() => {
    fitGrid({ width, height })
  }, [width, height, fitGrid, grid.size])

  return (
    <div className="h-screen grid w-screen overflow-hidden absolute" ref={ref}>
      <div
        style={{
          width: grid.cardWidth,
          height: grid.cardHeight,
          top:
            grid.verticalPadding +
            Math.floor(grid.innerHeight / 2 / grid.size) * grid.size -
            grid.cardHeight / 2,
          left:
            grid.horizontalPadding +
            Math.floor(grid.innerWidth / 2 / grid.size) * grid.size -
            grid.cardWidth / 2,
        }}
        className={`grid absolute z-10 grid-flow-row bg-[#FAFAFA] md:grid-cols-[auto,1fr] justify-self-center md:py-10 md:pl-10 md:pr-6 p-4	self-center content-center items-center md:gap-8 gap-4 justify-center `}
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
      </div>
      <P5Wrapper
        grid={grid}
        // className={`absolute top-[${padding.vertical}px] bottom-[-${padding.vertical}px] left-[${padding.horizontal}px] right-[-${padding.horizontal}px] h-full w-full z-0 `}
        className={`absolute top-0 bottom-0 left-0 right-0 h-full w-full z-0 `}
      />
    </div>
  )
}
