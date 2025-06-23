import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn   } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
return (
<footer className="text-gray-600 body-font bg-gray-100">
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
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
         <Link href="https://www.facebook.com/profile.php?id=100019535464886" target='_blank' className="text-gray-500">
            <FaFacebookF />
         </Link>
        
         <Link href="https://www.instagram.com/rakeshpal8300/" target='_blank' className="ml-3 text-gray-500">
            <FaLinkedinIn />
         </Link>
         <Link href="https://www.linkedin.com/in/rakesh-pal-478031146/" target='_blank' className="ml-3 text-gray-500">
          <FaLinkedinIn />
         </Link>
      </span>
   </div>
</footer>
)
}
export default Footer