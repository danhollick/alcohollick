'use client'
import React, { useState } from 'react'
import Vectorfield from './sketch'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

const P5Wrapper = ({ className, grid }) => {
  const [mode, setMode] = useState('default')
  const [wave, setWave] = useState('perlin')
  const [color, setColor] = useState('rgb(0, 56, 254)')

  const handleModeChange = mode => {
    setMode(mode)
  }

  const handleWaveChange = wave => {
    setWave(wave)
  }

  return (
    <div className={className}>
      <div className="absolute bottom-12 md:bottom-2  z-10  justify-center w-full grid grid-flow-col gap-6 auto-cols-auto font-mono text-sm">
        <ToggleGroup.Root
          title="Perlin"
          type="single"
          value={wave}
          onValueChange={value => {
            if (value) handleWaveChange(value)
          }}
          className=" grid grid-flow-col gap-1"
        >
          <ToggleGroup.Item
            value="perlin"
            className={`${
              wave === 'perlin' ? `stroke-purplish` : `stroke-current`
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9.50171C2 9.50171 2.52209 7.93558 3.38943 6.50074C4.07368 5.36879 4.97281 4.31855 6 4.18345C7.27476 4.01579 5.5 9.50343 10.25 9.50171C15 9.5 11.5 14 17 14C19 14 18.5 9.50171 18.5 9.50171"
                strokeWidth="1.5"
              />
            </svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            title="Sine"
            value="sine"
            className={`${
              wave === 'sine' ? `stroke-purplish` : `stroke-gray-500`
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 9.50097C1.5 9.50097 5.5 -2.49805 9.75 9.50097C14 21.5 18 9.50097 18 9.50097"
                strokeWidth="1.5"
              />
            </svg>
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <ToggleGroup.Root
          type="single"
          value={mode}
          onValueChange={value => {
            if (value) handleModeChange(value)
          }}
          className=" grid grid-flow-col gap-1"
        >
          <ToggleGroup.Item
            title="Motion"
            value="default"
            className={`${
              mode === 'default' ? `stroke-purplish` : `stroke-gray-500`
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 3.5V17.5" strokeWidth="1.5" />
              <path d="M10 4L7 17.5" strokeOpacity="0.6" strokeWidth="1.5" />
              <path d="M12.5 5L7 17.5" strokeOpacity="0.3" strokeWidth="1.5" />
            </svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            title="Debug"
            value="debug"
            className={`${
              mode === 'debug' ? `stroke-purplish ` : `stroke-current `
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.5V17.5M10 3.5L12.5 6M10 3.5L7.5 6"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <ToggleGroup.Root
          type="single"
          value={color}
          onValueChange={value => {
            if (value) setColor(value)
          }}
          className=" grid grid-flow-col gap-1"
        >
          <ToggleGroup.Item
            title="Blue"
            value="rgb(0, 56, 254)"
            className={`${
              color === 'rgb(0, 56, 254)'
                ? `fill-purplish `
                : `fill-purplish/20 `
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="4" />
            </svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            title="Red"
            value="rgb(225, 29, 72)"
            className={`${
              color === 'rgb(225, 29, 72)' ? `fill-rose-500 ` : `fill-rose-200 `
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="4" />
            </svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            title="Green"
            value="rgb(16, 185, 129)"
            className={`${
              color === 'rgb(16, 185, 129)'
                ? `fill-emerald-500 `
                : `fill-emerald-200 `
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            {' '}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="4" />
            </svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            title="Gradient"
            value="gradient"
            className={`${
              color === 'gradient' ? `opacity-100` : `opacity-20 `
            } bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 grid items-center justify-center rounded-xl p-2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="4" fill="#0038FE" />
              <circle
                cx="10"
                cy="10"
                r="4"
                fill="url(#paint0_linear_3008_5771)"
              />
              <circle
                cx="10"
                cy="10"
                r="4"
                fill="url(#paint1_linear_3008_5771)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3008_5771"
                  x1="11.7143"
                  y1="4"
                  x2="4.85714"
                  y2="13.7143"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8B55E2" stopOpacity="0" />
                  <stop offset="1" stopColor="#FD1010" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3008_5771"
                  x1="8.28571"
                  y1="6.57143"
                  x2="16.2857"
                  y2="8.57143"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7AE255" stopOpacity="0" />
                  <stop offset="1" stopColor="#10FD8B" />
                </linearGradient>
              </defs>
            </svg>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
      <Vectorfield grid={grid} mode={mode} wave={wave} color={color} />
    </div>
  )
}

export default P5Wrapper
