import Link from 'next/link'
import React from 'react'
import { cn } from '@/utils/cn'
import { Spotlight } from './ui/Spotlight'

const HeroSection = () => {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#A3CFCD"
      />
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
     <div className='p-4 relative  w-full text-center'>
     
        <h1>HELLO WORLD</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, veniam pariatur! Aut, incidunt repellat accusamus consequatur magnam asperiores distinctio exercitationem ex obcaecati sint aspernatur ad deserunt facere explicabo, quasi sed est quia praesentium neque consectetur, a commodi. Labore, quam voluptas!</p>
        <div className='mt-4'>
            <Link href={"/courses"}>Explore</Link>

        </div>

     </div>
        </div>
        </>
  )
}

export default HeroSection