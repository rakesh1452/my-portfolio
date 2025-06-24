import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram    } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
return (
<footer className="text-gray-600 body-font bg-white">
   <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">       
         <span className="ml-3 text-xl">
            <Image
                       src="/assets/pictures/logo.png" 
                       alt="Logo"
                       width={100}
                       height={100}
                       priority
                       className='w-[128]'
                     />
         </span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
         © 2020 Tailblocks —
         <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
            >
         @knyttneve
         </a>
      </p>
    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-2">
  {/* Facebook */}
  <Link
    href="https://www.facebook.com/profile.php?id=100019535464886"
    target="_blank"
    className="group relative text-gray-500"
  >
    <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-[#1877F2] group-hover:shadow-lg transform group-hover:scale-110">
      <FaFacebookF className="transition-colors duration-300 group-hover:text-white" />
    </div>
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/rakeshpal8300/"
    target="_blank"
    className="group relative text-gray-500"
  >
    <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:shadow-lg transform group-hover:scale-110">
      <FaInstagram className="transition-colors duration-300 group-hover:text-white" />
    </div>
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/in/rakesh-pal-478031146/"
    target="_blank"
    className="group relative text-gray-500"
  >
    <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-[#0A66C2] group-hover:shadow-lg transform group-hover:scale-110">
      <FaLinkedinIn className="transition-colors duration-300 group-hover:text-white" />
    </div>
  </Link>
</div>




   </div>
</footer>
)
}
export default Footer