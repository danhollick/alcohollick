import Image from 'next/image'

export default function Profile({
  width = 220,
  height = 220,
  priority = true,
}) {
  return (
    <div className="relative">
      <div
        className={`bg-purplish absolute top-0 left-0 w-full h-full max-w-[${width}px] max-h-[${height}px] z-10 mix-blend-screen`}
      />
      <Image
        priority={priority}
        className="filter grayscale"
        src="/profile.png"
        alt="Picture of the Dan Hollick and his cat Weez"
        width={height}
        height={height}
      />
    </div>
  )
}
