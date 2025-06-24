'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'GANESHA SPEAKS',
    category: 'E-commerce',
    description:
      'Initiated in 2003 with a definitive vision, GaneshaSpeaks.com is a pioneer brand in more ways than one.',
    image: '/assets/projects/project1.png',
    url: 'https://www.ganeshaspeaks.com/',
  },
  {
    title: 'Dental101',
    category: 'Medical',
    description:
      'Dental 101 helps overseas dental professionals acquire skills to pass Australian exams.',
    image: '/assets/projects/project2.png',
    url: 'https://www.dental101.com.au/',
  },
  {
    title: 'My Pandit',
    category: 'ASTROLOGY',
    description:
      'Started in 2019 to provide authentic astrology services by technocrat Mr Kalpesh Shah.',
    image: '/assets/projects/project3.png',
    url: 'https://www.mypandit.com/',
  },
  {
    title: 'Bestmovements',
    category: 'TRANSPORT',
    description:
      'We move your belongings both locally and globally with quality removal services.',
    image: '/assets/projects/project4.png',
    url: 'https://www.bestmovements.com.au/',
  },
  {
    title: 'Elitehomes',
    category: 'REAL ESTATE',
    description:
      'Elite Homes Victoria transforms innovative concepts into extraordinary realities.',
    image: '/assets/projects/project5.png',
    url: 'https://www.elitehomesvictoria.com.au/',
  },
  {
    title: 'Archgod.in',
    category: 'Architecture',
    description:
      '"Architectural Graphics on Dimension" emphasizes the intersection of design and destiny.',
    image: '/assets/projects/project6.png',
    url: 'https://archgod.in/',
  },
];

const Projects = () => {
  return (
    <section className="text-gray-600 body-font" id="projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            My Projects
          </h2>
          <div className='w-[50px] bg-gray-500 h-[2px] mx-auto mb-5'></div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A showcase of web development work across domains like e-commerce, medical, real estate, and more.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div className="w-full lg:w-1/3 sm:w-1/2 p-4" key={index}>
              <div className="group [perspective:1000px]">
                <div className="relative h-[400px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front side */}
                  <div className="absolute inset-0 backface-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Back side */}
                  <div className="absolute border border-red-200 inset-0 bg-white text-black rounded-lg px-6 py-8 backface-hidden [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center">
                    <h2 className="text-red-500 font-medium text-sm tracking-widest mb-1">
                      {project.category}
                    </h2>
                    <h1 className="text-lg font-semibold mb-3">{project.title}</h1>
                    <p className="text-sm mb-4">{project.description}</p>
                   <Link
                    href={project.url}
                    target="_blank"
                    className="relative inline-flex items-center justify-center px-5 py-2 text-sm text-red-500 border-2 border-red-500 rounded overflow-hidden transition-all duration-300 group"
                  >
                    <span className="absolute left-0 top-0 h-full w-0 bg-red-500 transition-all duration-300 group-hover:w-full z-0"></span>
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      View Project
                    </span>
                  </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
