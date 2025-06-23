import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <section className="text-gray-600 body-font" id='about'>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="w-90 h-90 mb-10 md:mb-0 mx-auto animate-float">
                <img
                    src="/assets/pictures/rakesh.jpeg"
                    alt="hero"
                    className="w-full h-full object-cover rounded-full shadow-xl"
                />
            </div>



            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                About Me               
            </h1>
            <p className="mb-8 leading-relaxed">
               A seasoned UI Developer and Web Designer with over 5.9 years of experience in 
                creating engaging, responsive, and user-friendly digital interfaces. Proven track record in 
                delivering high-quality websites and applications using modern web technologies with a 
                strong eye for detail and performance optimization.
            </p>
            <div className="flex justify-center">
                <Link href="/assets/cv/resume.pdf">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                View CV
                </button>
                </Link>
               
            </div>
            </div>
        </div>
    </section>

  )
}

export default About