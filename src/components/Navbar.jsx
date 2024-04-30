import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'phosphor-react';


const NavLinks =[
  {
    id: 1,
    name: 'Home',
    link: '/Homepage',
  },
  {
    id: 1,
    name: 'About Us',
    link: '/About',
  },
  {
    id: 1,
    name: 'Menu',
    link: '/Menu',
  },
];

const Navbar = () => {
  return <>
    <div className='bg-white shadow-md'>
        <div className="container flex justify-between py-4 sm:py-3">
          
          <div className="font-bold text-3xl"><span className=' font-cursive text-orange-700'>We</span> <span className=' font-cursive text-orange-700'>Bake</span></div>
          {/*Navlinks section*/}
          <div>
            <ul className='flex items-center gap-10'>
              {NavLinks.map(({ id, name, link}) => (
                <li key={id}>
                  <a href={link} className='inline-block hover:text-primary text-xl font-semibold'>{name}</a>

                </li>
                

                ))}
            </ul>
          </div>
          
            {/*login button section*/}
            <button className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'><User></User>My Account </button>
            
          
        </div>
    </div>
    </>;
  
};

export default Navbar;