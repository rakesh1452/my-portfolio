import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <section className="text-gray-600 body-font" id='about'>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="w-80 h-80 mb-10 md:mb-0 mx-auto animate-float">
  <img
    src="/assets/pictures/white-shirt.jpg"
    alt="hero"
    width={400}
    height={400}
    className="w-full h-full rounded-full shadow-xl object-cover object-top"
  />
</div>





            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                About Me               
            </h2>
            <p className="mb-8 leading-relaxed">
               A seasoned UI Developer and Web Designer with over 5.9 years of experience in 
                creating engaging, responsive, and user-friendly digital interfaces. Proven track record in 
                delivering high-quality websites and applications using modern web technologies with a 
                strong eye for detail and performance optimization.
            </p>
            <div className="flex justify-center">
               <Link href="/assets/cv/resume.pdf" target="_blank">
                    <button className="relative inline-flex items-center justify-center px-6 py-2 text-lg text-red-500 border-2 border-red-500 rounded overflow-hidden transition-all duration-300 group">
                        <span className="absolute left-0 top-0 h-full w-0 bg-red-500 transition-all duration-300 group-hover:w-full z-0"></span>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        View CV
                        </span>
                    </button>
                </Link>

               
            </div>
            </div>
        </div>
    </section>

  )
}

export default About