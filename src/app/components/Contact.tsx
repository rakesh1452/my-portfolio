import React from 'react'

function Contact() {
  return (
   <section className="text-gray-600 body-font relative" id='contact'>
   <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
         <iframe
         width="100%"
         height="100%"
         className="absolute inset-0"
         frameBorder={0}
         title="map"
         marginHeight={0}
         marginWidth={0}
         scrolling="no"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9369597484033!2d72.59687857587991!3d22.952548668936622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f471050a1b5%3A0xe8e954a94a84d853!2sLAXMI%20NIVAS%20NAROL%2C%20Vatva%2C%20Ahmedabad%2C%20Gujarat%20382440!5e0!3m2!1sen!2sin!4v1750603438727!5m2!1sen!2sin"
         style={{ filter: " contrast(1.2) opacity(0.4)" }}
         />
         <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
               </h2>
               <p className="mt-1">
                 Laxmi Nivas, Narol, Ahmedabad, India
               </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
               </h2>
               <a className="text-red-500 leading-relaxed">rakesh.pal1452@email.com</a>
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
               </h2>
               <p className="leading-relaxed">826-439-5950</p>
            </div>
         </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
         <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Contact
         </h2>
         <p className="leading-relaxed mb-5 text-gray-600">
            Feel free to contact me.
         </p>
         <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
            </label>
            <input
               type="text"
               id="name"
               name="name"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               />
         </div>
         <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
            </label>
            <input
               type="email"
               id="email"
               name="email"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               />
         </div>
         <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
            </label>
            <textarea
               id="message"
               name="message"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
               defaultValue={""}
               />
         </div>
         <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
         Send Message
         </button>
        
      </div>
   </div>
</section>
  )
}

export default Contact