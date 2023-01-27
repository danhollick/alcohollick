import Image from 'next/image'
import profile from '../public/profile.png'

export default function Profile({ size = 200 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`grid grid-cols-1 grid-rows-1`}
    >
      <div
        className={`bg-purplish  col-start-1 row-start-1 row-span-1 w-full h-full z-10 mix-blend-screen`}
      />
      <Image
        priority
        className={` col-start-1 row-start-1 filter grayscale brightness-110 bg-transparent`}
        src={profile}
        alt="Picture of the Dan Hollick and his cat Weez"
        width={size}
        height={size}
        placeholder="blur"
      />
    </div>
  )
}
