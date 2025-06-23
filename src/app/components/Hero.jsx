"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

function Hero() {
return (
<section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-hero">
   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
           I am
            <br className="hidden lg:inline-block" />
           <Typewriter
            options={{
                strings: ['Web Developer',
                     'Ui/Ux Designer',
                      'Frontend Developer',
                    ],
                     
                autoStart: true,
                loop: true,
            }}
            />
         </h1>
         <div className='w-[50px] bg-gray-500 h-[2px]'></div>
         <p className="mb-8 leading-relaxed mt-5">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
            chambray.
         </p>
         <div className="flex justify-center">
            <Link href="#contact">
             <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
               Contact Us
            </button>
            </Link>
           
           
         </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 perspective">
         <div className="transform-style rounded-3xl transition-transform duration-500 hover:rotate-3d">
            <Image
               src="/assets/pictures/rakesh.jpeg" 
               alt="Logo"
               width={400}
               height={400}
               priority
               className="object-cover object-center rounded-3xl"
            />
         </div>
      </div>

   </div>
</section>
)
}
export default Hero