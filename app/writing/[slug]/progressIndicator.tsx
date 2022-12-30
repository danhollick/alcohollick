'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const ProgressIndicator = ({}) => {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    return scrollYProgress.onChange(latest => {
      const rounded = Math.floor((latest * 100) / 5) * 5
      setProgress(rounded)
    })
  }, [])
  return (
    <div className="grid grid-cols-[auto_1fr] uppercase font-mono text-sm space-between">
      <div className="grid grid-flow-col auto-cols-auto gap-[2px]">
        <p className="text-gray-400 ">[</p>
        {[...Array(10)].map((_, i) => (
          <p
            key={i}
            className={
              (i + 1) * 10 > progress
                ? 'text-gray-200'
                : 'text-gray-900 font-semibold'
            }
          >
            |
          </p>
        ))}
        <p className="text-gray-400">]</p>
      </div>
      <p className="justify-self-end text-gray-900 ">{progress}%</p>
    </div>
  )
}

export default ProgressIndicator
