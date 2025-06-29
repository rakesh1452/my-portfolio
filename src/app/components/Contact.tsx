"use client";
import React from "react";
 import { ToastContainer, toast, Bounce } from 'react-toastify';

function Contact() {
      const notify = () => toast.success('🦄Message sent!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
  });
  return (
    <section
      className="text-gray-600 body-font bg-gray-100 bg-fixed bg-cover py-24"
      id="contact"
    >
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contact Us
        </h2>
        <div className="w-[50px] bg-gray-500 h-[2px] mx-auto mb-5"></div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          A showcase of web development work across domains like e-commerce,
          medical, real estate, and more.
        </p>
      </div>

      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9369597484033!2d72.59687857587991!3d22.952548668936622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f471050a1b5%3A0xe8e954a94a84d853!2sLAXMI%20NIVAS%20NAROL%2C%20Vatva%2C%20Ahmedabad%2C%20Gujarat%20382440!5e0!3m2!1sen!2sin!4v1750603438727!5m2!1sen!2sin"
            style={{ filter: " contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Laxmi Nivas, Narol, Ahmedabad, India</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed">
                rakesh.pal1452@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">826-439-5950</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5 px-6 rounded-lg">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Get in touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Feel free to contact me.
          </p>

          <form  action="https://formspree.io/f/xgvyrgvz" method="POST">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2
                  focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 
                  focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="subject"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                type="subject"
                id="subject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2
                  focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                required
              />
            </div>
            <button
              onClick={notify}
              className="relative inline-flex items-center justify-center px-6 py-2 text-lg text-red-500 border-2 border-red-500 rounded overflow-hidden transition-all duration-300 group"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-red-500 transition-all duration-300 group-hover:w-full z-0"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Send Message
              </span>
            </button>
          </form>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
            />
        </div>
      </div>
    </section>
  );
}

export default Contact;
