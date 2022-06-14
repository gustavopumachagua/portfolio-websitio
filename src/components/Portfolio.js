import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Mi Lista de Proyectos
          </h2>
          <p className='subtitle'>
            Algunos proyectos hechos con Reactjs, tailwindcss, HTML, CSS, JavaScrit.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;