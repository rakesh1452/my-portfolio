import React from 'react'
import { FaCheck } from "react-icons/fa";

function Skills() {
  return (
    <section className="text-gray-600 body-font" id='skills'>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
                Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                My Skills
            </h1>
            </div>  
            <div className="flex flex-wrap -m-4">
                <div className="p-4 w-[100%] md:w-1/3">
                    <div className="flex rounded-lg h-full p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                        <FaCheck />
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                                HTML
                            </h2>
                        </div>
                        <div className="flex-grow">                        
                            <div className='h-1 w-full bg-gray-300 rounded-xl relative'>
                                <div className='absolute bg-red-500 h-1 rounded-xl w-[100%]'></div>
                            </div>
                            <p className='font-bold text-red-500 text-right'>100%</p>
                        </div>
                    </div>
                </div>
             <div className="p-4 w-[100%] md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCheck />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            CSS
                        </h2>
                    </div>
                    <div className="flex-grow">                        
                        <div className='h-1 w-full bg-gray-300 rounded-xl relative'>
                            <div className='absolute bg-red-500 h-1 rounded-xl w-[95%]'></div>
                        </div>
                        <p className='font-bold text-red-500 text-right'>95%</p>
                    </div>
                </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCheck />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            JAVASCRIPT
                        </h2>
                    </div>
                    <div className="flex-grow">                        
                        <div className='h-1 w-full bg-gray-300 rounded-xl relative'>
                            <div className='absolute bg-red-500 h-1 rounded-xl w-[60%]'></div>
                        </div>
                        <p className='font-bold text-red-500 text-right'>60%</p>
                    </div>
                </div>
            </div>

             <div className="p-4 w-[100%] md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCheck />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            REACT.JS/NEXT.JS
                        </h2>
                    </div>
                    <div className="flex-grow">                        
                        <div className='h-1 w-full bg-gray-300 rounded-xl relative'>
                            <div className='absolute bg-red-500 h-1 rounded-xl w-[80%]'></div>
                        </div>
                        <p className='font-bold text-red-500 text-right'>80%</p>
                    </div>
                </div>
            </div>

             <div className="p-4 w-[100%] md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCheck />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            WORDPRESS
                        </h2>
                    </div>
                    <div className="flex-grow">                        
                        <div className='h-1 w-full bg-gray-300 rounded-xl relative'>
                            <div className='absolute bg-red-500 h-1 rounded-xl w-[85%]'></div>
                        </div>
                        <p className='font-bold text-red-500 text-right'>85%</p>
                    </div>
                </div>
            </div>

             <div className="p-4 w-[100%] md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCheck />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            TAILWIND CSS
                        </h2>
                    </div>
                    <div className="flex-grow">                        
                        <div className='h-1 w-full bg-gray-300 rounded-xl relative'>
                            <div className='absolute bg-red-500 h-1 rounded-xl w-[95%]'></div>
                        </div>
                        <p className='font-bold text-red-500 text-right'>70%</p>
                    </div>
                </div>
            </div>


            </div>
        </div>
    </section>

  )
}

export default Skills