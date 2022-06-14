import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center  social'
            key={index}
          >
            <a target="_blank" rel='noreferrer' className='text-base' href={item.href} >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;