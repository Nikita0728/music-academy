"use client";
import { BackgroundGradient } from "./ui/background-gradient";

import Image from "next/image";
import React from 'react'
import courseData from '../data/music_course.json'

const Cards = () => {
  return (
    <div  >
      <div className="flex  flex-col justify-center">
      <h2> Our services</h2>
      <p>Work with the best</p>
      </div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <div className="flex justify-center">
            <p > Web design </p>
            </div>
            
            </BackgroundGradient>
            

    </div>
  )
}

export default Cards