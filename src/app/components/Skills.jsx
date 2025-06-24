"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaCheck } from "react-icons/fa";

const skillsData = [
  { name: "HTML", percent: 100 },
  { name: "CSS", percent: 95 },
  { name: "JAVASCRIPT", percent: 60 },
  { name: "REACT.JS/NEXT.JS", percent: 80 },
  { name: "WORDPRESS", percent: 85 },
  { name: "TAILWIND CSS", percent: 70 }
];

function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gray-100 bg-fixed bg-cover" id="skills" ref={sectionRef}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">          
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-90">
            My Skills
          </h2>
           <div className='w-[50px] bg-gray-500 h-[2px] mx-auto mb-5'></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {skillsData.map((skill, index) => (
            <div className="p-4 w-full md:w-1/3" key={index}>
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {skill.name}
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 rounded-xl relative overflow-hidden">
                    <div
                      className="absolute bg-red-500 h-1 rounded-xl transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${skill.percent}%` : "0%",
                      }}
                    ></div>
                  </div>
                  <p className="font-bold text-red-500 text-right">{skill.percent}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
