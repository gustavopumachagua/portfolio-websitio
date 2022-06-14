import React from 'react';

// import img
import Image from '../assets/img/1.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className=' flex flex-col xl:flex-row gap-10 '>
          <img
            className=' mx-auto px-24  md:px-28 lg:px-32 '
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Gustavo
              </h2>
              <p className='mb-4 text-orange-500'>
                 Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Soy desarrollador Front-end con más de 2 años de experiencia en desarrollo web, 2+ años experiencia en Javascript, React. <br />
                <br />
                Me fascina el desarrollo de soluciones para empresas, trabajando con libreria como React y el uso de Framework como TailwindCSS y empaquetadores como Webpack para poder lograr proyectos ordenados y usando las buenas prácticas.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contactos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;