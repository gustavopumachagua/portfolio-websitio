import React from 'react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[30px] bg-tertiary flex items-center md:min-h-[80px]'>
      <div
        className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'
      >
        {brands.map((brand, idx) => {
          return (
            <div className='flex justify-center'
              key={idx}
            >
              <img src={brand.img} alt='logo' className=' w-1/2 md:w-1/3 ' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
