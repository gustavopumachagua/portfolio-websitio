import React from 'react';
import CV from '../assets/img/pdf/Ansel-Cv.pdf'

// import woman image
import ManImg from '../assets/img/perfil.webp';

const Hero = () => {
  return (
    <section
      id='home'
      className='xl:h-[85vh] flex items-center bg-primary xl:bg-cover xl:bg-center xl:bg-no-repeat py-32 xl:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center xl:items-start'>
            <p className='text-lg text-orange-500 text-md mb-[22px]'>
              Hola, Soy Gustavo! ✌
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight xl:text-7xl xl:leading-[1.2] font-bold md:tracking-[-2px]'>
              Desarrollador Web <br />Frond-End.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center xl:text-left'>
            Me considero a mi mismo un fan de la tecnología
            </p>
            <a  href={CV} download className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg mt-8 xl:mt-2'>
              Descargar CV.
            </a>
          </div>
          <div className='hidden xl:flex flex-1 justify-center items-end h-full pb-20 '>
            <img src={ManImg} alt='perfil' className='rounded-full h-80 w-80  border-4'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;