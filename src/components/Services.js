import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            Que Ofrezco
          </h2>
          <p className='subtitle'>
          Como amante de la tecnologia estoy siempre en la vanguardia con los cambios tecnológicos
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-4 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;