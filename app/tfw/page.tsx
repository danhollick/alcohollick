'use client'
import Image from 'next/image'
import React from 'react'
import Google from '../../public/play-store.png'
import Apple from '../../public/app-store.png'
import Mobile from './mobile'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <motion.div
      transition={{
        duration: 10,
        type: 'tween',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      initial={{
        backgroundColor: 'hsla(240,89%,39%,1)',
        backgroundImage:
          'radial-gradient(at 25% 0%, hsla(252,100%,70%,1) 0px, transparent 50%),radial-gradient(at 95% 82%, hsla(270,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(343,100%,76%,1) 0px, transparent 50%), radial-gradient(at 78% 92%, hsla(175,98%,70%,0.24) 0px, transparent 50%), url(/noise.svg)',
      }}
      animate={{
        backgroundColor: 'hsla(24,90%,68%,1)',
        backgroundImage:
          'radial-gradient(at 44% 0%, hsla(306,100%,70%,1) 0px, transparent 50%),radial-gradient(at 99% 98%, hsla(338,100%,61%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(343,100%,76%,1) 0px, transparent 50%),radial-gradient(at 54% 98%, hsla(111,92%,50%,0.87) 0px, transparent 50%), url(/noise.svg)',
      }}
      className=" h-screen grid items-center justify-center"
    >
      <div className="grid grid-cols-[auto,1fr] items-center gap-20">
        <Mobile />
        <div className="grid gap-6 mt-20 ">
          <div>
            <h2 className="text-xl font-semibold  text-black/40  bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 mix-blend-difference">
              The Fucking Weather.
            </h2>
            <h1 className="text-6xl leading-tight font-sans font-semibold text-black/50  bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 mix-blend-difference">
              A terrible weather app,
              <br /> for terrible people.
            </h1>
          </div>
          <h3 className="text-xl font-semibold  text-black/40  bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 mix-blend-difference">
            It's honestly awful - I don't know why people like it.
          </h3>
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            initial={{ y: 20, opacity: 0 }}
            className="grid grid-cols-[auto,auto] justify-start gap-6 mt-8"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.twf.prod"
            >
              <Image
                className="transition ease-in-out  hover:scale-105  duration-100  saturate-0 hover:saturate-100"
                width={100}
                height={30}
                alt="Google Play Store Download "
                src={Google}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://itunes.apple.com/us/app/tfw/id1359091947?ls=1&mt=8"
            >
              <Image
                className="transition ease-in-out  hover:scale-105  duration-100 saturate-0 hover:saturate-100"
                width={100}
                height={30}
                alt="Google Play Store Download "
                src={Apple}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Page
