import React from 'react';
import { Bus } from 'phosphor-react';

const WhyChoose = () => {
  return <>
    <div className='py-14 md:py-28 bg-gray-50'>
        <div className="container">
            {/*heading section*/}
            <h1 className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us</h1>


             {/*card section*/}
             <div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
                {/*first card*/}
                <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <p className='text-dark/70 font-semibold'>Uncompromising Quality</p>
                    <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>....</p>
                    <Bus className='text-5xl text-secondary'></Bus>

                </div>
                {/*second card*/}
                <div className='text-center flex justify-center items-center flex-col gap-2 px-3'>
                <Bus className='text-5xl text-secondary'></Bus>
                <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>....</p>
                <p className='text-dark/70 font-semibold'>Handcrafted Excellence </p>
                </div>
                
                 {/*third card*/}
                 <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <p className='text-dark/70 font-semibold'>Community Connection</p>
                    <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>....</p>
                    <Bus className='text-5xl text-secondary'></Bus>
                    </div>
                {/*forth card*/}
                <div className='text-center flex justify-center items-center flex-col gap-2 px-3'>
                <Bus className='text-5xl text-secondary'></Bus>
                <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>....</p>
                <p className='text-dark/70 font-semibold'>Personalized Service </p>
                </div>



              </div>

             </div>
        </div>
    </div>
  </>
};

export default WhyChoose;