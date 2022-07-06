import React from 'react';
import CV from '../assets/img/pdf/Ansel-Cv.pdf'
import Lettie from './lettie'
import Lottiejs from './lottie'

const Hero = () => {
  return (
    <section
      id='home'
      className='xl:h-[110vh] flex items-center bg-primary xl:bg-cover xl:bg-center xl:bg-no-repeat py-32 xl:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full flex-col md:flex-row xl:pb-12'>
          <div className='flex-1 flex flex-col items-center xl:items-start xl:pb-6'>
            <p className='text-lg text-orange-500 text-md mb-[16px] xl:ml-10 xl:py-2 xl:mt-24 text-center'>
              Hola, Soy Gustavo! ✌
            </p>
            <h1 className='hidden md:flex text-4xl text-white leading-[44px] md:text-5xl md:leading-tight xl:text-7xl xl:leading-[1.2] font-bold md:tracking-[-2px] px-6 xl:px-36'>
              Desarrollador Web <br />Frond-End.
            </h1>
            <p className='hidden md:flex pt-4 pb-8 md:py-2 xl:py-2 xl:ml-10 xl:pl-20 max-w-[480px] text-base text-center  text-gray-200 px-6 '>
            Me considero a mi mismo un fan de la tecnología
            </p>
            <a  href={CV} download className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg md:mt-5 xl:mt-4 xl:ml-64 '>
              Descargar CV.
            </a>
          </div>
          <div className='hidden xl:flex flex-1 justify-center items-end h-full pb-1 xl:mb-16'>
            <Lettie className=""/>
          </div>
          <div className='xl:hidden flex  flex-1 justify-center items-end h-full pb-1  w-full mt-10'>
            <Lottiejs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;