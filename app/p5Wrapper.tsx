'use client'
import React, { useRef, useLayoutEffect, useState } from 'react'
import { useWindowSize, useMeasure } from 'react-use'
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
      <div className="absolute bottom-4 right-4 z-10 grid grid-flow-col gap-4 auto-cols-auto font-mono text-sm">
        {/* <button
          className=" cursor-pointer"
          onClick={() => handleModeChange('debug')}
        >
          [mode: {mode}]
        </button>
        <button
          className=" cursor-pointer"
          onClick={() => handleWaveChange('sine')}
        >
          [wave: {wave}]
        </button> */}

        <ToggleGroup.Root
          type="single"
          value={wave}
          onValueChange={value => {
            if (value) handleWaveChange(value)
          }}
        >
          <ToggleGroup.Item value="perlin">[perlin]</ToggleGroup.Item>
          <ToggleGroup.Item value="sine">[sine]</ToggleGroup.Item>
        </ToggleGroup.Root>

        <ToggleGroup.Root
          type="single"
          value={mode}
          onValueChange={value => {
            if (value) handleModeChange(value)
          }}
        >
          <ToggleGroup.Item value="default">[OFF]</ToggleGroup.Item>
          <ToggleGroup.Item value="debug">[ON]</ToggleGroup.Item>
        </ToggleGroup.Root>
        <ToggleGroup.Root
          type="single"
          value={color}
          onValueChange={value => {
            if (value) setColor(value)
          }}
        >
          <ToggleGroup.Item value="rgb(0, 56, 254)">[BLUE]</ToggleGroup.Item>
          <ToggleGroup.Item value="rgb(225, 29, 72)">[RED]</ToggleGroup.Item>
          <ToggleGroup.Item value="rgb(16, 185, 129)">[GREEN]</ToggleGroup.Item>
          <ToggleGroup.Item value="gradient">[GRADIENT]</ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
      <Vectorfield grid={grid} mode={mode} wave={wave} color={color} />
    </div>
  )
}

export default P5Wrapper
