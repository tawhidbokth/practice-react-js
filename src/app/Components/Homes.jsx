import React from 'react';
import Servises from './Servises';
import Section from './Section';

export default function Homes() {
  return (
    <div>
      <section className="bg-gray-900 text-white mb-16">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded-sm border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Servises></Servises>
      <Section></Section>
    </div>
  );
}
