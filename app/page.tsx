'use client'
import Profile from './profile'
import P5Wrapper from './p5Wrapper'
import React, {
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { useWindowSize, useMeasure } from 'react-use'
import Link from 'next/link'

export default function Home() {
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure()
  const { width: initialWidth, height: initialHeight } = useWindowSize()
  const [gridSize, setGridSize] = useState(80)
  // TODO: maybe move the layout effect into the parent and pass the red down?

  const [grid, setGrid] = useState({
    size: gridSize,
    outerWidth: initialWidth,
    outerHeight: initialHeight,
    innerWidth: initialWidth - ((initialWidth % gridSize) + gridSize),
    innerHeight: initialHeight - ((initialHeight % gridSize) + gridSize),
    horizontalPadding: (initialWidth % gridSize) / 2 + gridSize / 2,
    verticalPadding: (initialHeight % gridSize) / 2 + gridSize / 2,
  })

  const fitGrid = useCallback(
    ({ width, height }) => {
      const innerWidth = width - ((width % gridSize) + gridSize)
      const innerHeight = height - ((height % gridSize) + gridSize)

      const horizontalPadding = (width % gridSize) / 2 + gridSize / 2
      const verticalPadding = (height % gridSize) / 2 + gridSize / 2

      setGrid({
        size: gridSize,
        outerWidth: width,
        outerHeight: height,
        innerWidth: innerWidth,
        innerHeight: innerHeight,
        horizontalPadding: horizontalPadding,
        verticalPadding: verticalPadding,
      })
    },
    [gridSize]
  )

  // useEffect(() => {
  //   fitGrid({ width, height })

  //   console.log('effect', grid, width)
  // }, [width, height, fitGrid])

  useLayoutEffect(() => {
    console.log('before', grid, width)
    fitGrid({ width, height })

    console.log('after', grid, width)
  }, [width, height, fitGrid])
  console.log('outside', grid)
  return (
    <div className="h-screen grid w-screen overflow-hidden absolute" ref={ref}>
      <div className="grid w-[700px] h-[300px] z-10 grid-flow-col bg-gray-50 grid-cols-[auto,1fr] justify-self-center py-10 pl-10 pr-6	self-center content-center gap-8 justify-center ">
        <Profile />
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
            <div className="grid-flow-col grid gap-4 justify-start mt-6">
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
