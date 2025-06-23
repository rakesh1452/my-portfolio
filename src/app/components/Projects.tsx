import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="text-gray-600 body-font" id='projects'>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    My Projects
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                    gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                    heard of them man bun deep jianbing selfies heirloom.
                </p>
            </div>
            <div className="flex flex-wrap m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="relative overflow-hidden group rounded-lg">
                    <Image
                        alt="gallery"
                        width="500"
                        height="400"
                        className="absolute inset-0 w-full object-cover object-center border-2"
                        src="/assets/projects/project1.png"
                       
                        />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                             E-commerce                          
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                             GANESHA SPEAKS
                        </h1>
                        <p className="leading-relaxed">
                           Initiated in 2003 with a definitive vision, GaneshaSpeaks.com is a pioneer brand in more ways than one.
                        </p>
                        <p>
                            <Link href="https://www.ganeshaspeaks.com/" target='_blank' className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-3'>View Project</Link>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="relative overflow-hidden group rounded-lg">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/assets/projects/project2.png"
                        width="500"
                        height="400"
                        />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                            Medical
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Dental101
                        </h1>
                        <p className="leading-relaxed">
                            Dental 101 is an education and training initiative to facilitate overseas dental professionals to acquire skills necessary to pass Australian successfully.
                        </p>
                         <p>
                            <Link href="https://www.dental101.com.au/" target='_blank' className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-3'>View Project</Link>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="relative overflow-hidden group rounded-lg">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/assets/projects/project3.png"
                         width={500}
                        height={400}
                        />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                            ASTROLOGY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            My Pandit
                        </h1>
                        <p className="leading-relaxed">
                            The brainchild of a technocrat Mr Kalpesh Shah, Predictive Technologies was started in 2019 to provide authentic astrology services.
                        </p>

                         <p>
                            <Link href="https://www.mypandit.com/" target='_blank' className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-3'>View Project</Link>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="relative overflow-hidden group rounded-lg">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/assets/projects/project4.png"
                        width={500}
                        height={400}
                        />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                            TRANSPORT
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Bestmovements                           
                        </h1>
                        <p className="leading-relaxed">
                           Best Movements is a one-stop-shop for all the removal needs of individuals and corporate. We move your belongings both locally and globally experience.
                        </p>
                         <p>
                            <Link href=" https://www.bestmovements.com.au/" target='_blank' className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-3'>View Project</Link>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="relative overflow-hidden group rounded-lg">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/assets/projects/project5.png"
                         width={500}
                        height={500}
                        />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                           REAL ESTATE
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Elitehomes
                        </h1>
                        <p className="leading-relaxed">
                          As passionate custom home builders in Melbourne, Elite Homes Victoria is committed to transforming innovative concepts into extraordinary realities.
                        </p>
                         <p>
                            <Link href="https://www.elitehomesvictoria.com.au/" target='_blank' className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-3'>View Project</Link>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="relative overflow-hidden group rounded-lg">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/assets/projects/project6.png"
                         width={500}
                        height={500}
                        />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1 uppercase">
                            Architecture 
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Archgod.in
                        </h1>
                        <p className="leading-relaxed">
                           Architectural Graphics on Dimension" (ArchGOD), with a powerful statement that emphasizes the intersection of design and destiny.
                        </p>
                         <p>
                            <Link href="https://archgod.in/" target='_blank' className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-3'>View Project</Link>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects