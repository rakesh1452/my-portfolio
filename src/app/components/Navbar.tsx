"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBeer } from 'react-icons/fa';
import { FaCloudDownloadAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-10" id='home'>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/assets/pictures/logo.png" 
            alt="Logo"
            width={100}
            height={100}
            priority
            className='w-[128]'
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"#home"} className="mr-5 hover:text-red-500">Home</Link>
          <Link href={"#about"} className="mr-5 hover:text-red-500">About</Link>
          <Link href={"#skills"} className="mr-5 hover:text-red-500">Skills</Link>
          <Link href={"#projects"} className="mr-5 hover:text-red-500">Projects</Link>
          <Link href={"#contact"} className="mr-5 hover:text-red-500">Contact</Link>
        </nav>
        <Link href="/assets/cv/resume.pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
            <FaCloudDownloadAlt className='text-lg ms-2' />         
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
