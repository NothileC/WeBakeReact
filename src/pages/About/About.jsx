import React from 'react';
import image1 from '../../assets/jpeg/image1.png';
import image2 from '../../assets/jpeg/image2.png';
import image3 from '../../assets/jpeg/image3.png';
import PrimaryButton from '../../components/Shared/PrimaryButton';

const About = () => {
  return <>
    <div className='container py-14 relative'>
      <div>
        <h1 className='py-8 tracking-wider text-5xl font-serif text-dark text-center'>About We Bake</h1>
        <p className='py-8 tracking-wider text-2xl font-serif text-dark text-center'>Tradition Since 2000</p>



        {/*text content section*/}

        <div className='space-y-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div>
              <p>Welcome to <span className='font-cursive text-orange-700 text-3xl'>We Bake</span>, where the aroma of freshly baked goodies fills the air, and every bite is a moment of pure indulgence. Founded with a passion for crafting artisanal delights, we blend tradition with innovation to bring you an unparalleled bakery experience.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div></div>
            <div>
              <p><span className='font-cursive text-secondary text-3xl'>Step</span> into our bakery, and you'll find yourself surrounded by an array of tantalizing treats, from flaky croissants to decadent cakes adorned with delicate swirls of frosting. Our menu celebrates both the timeless classics and the latest culinary trends, ensuring there's something to delight every palate.
              </p>
            </div>
          </div>
        </div>
        {/*button section*/}
        <div className='flex justify-center mt-10 sm:mt-14'>
          <PrimaryButton />
        </div>
      </div>
      {/*png folder images*/}
      <div className='absolute top-5 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img src={image1} alt="bakery" className='max-w-[160px}'/>
      </div>
      <div className='absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img src={image2} alt="lemon" className='max-w-[280px]'/>
      </div>
      <div className='absolute top-10 right-16 sm:right-20 opacity-50 sm:opacity-100'>
        <img src={image3} alt="egg" className='max-w-[200px]' />
      </div>

    </div>
    </>;
  
};

export default About;