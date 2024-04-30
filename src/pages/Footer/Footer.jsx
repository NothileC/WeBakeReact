import React from 'react';
import { Globe } from 'phosphor-react';
import { PhoneCall } from 'phosphor-react';
import { At } from 'phosphor-react';


const Footer = () => {
  return <>
    <div className='text-white mt-20'>
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
            {/*heading section*/}
            <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>

            {/*grid section*/}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
                {/*address section*/}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                        <Globe className='text-5xl'></Globe>
                    </div>
                    <p>
                        192 Fredman Drive<br></br> Sandton<br></br>2196
                    </p>
                </div>
                {/*email section*/}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                    <At className='text-5xl'></At>
                    </div>
                    <p>info@WeBake.com</p>
                    <p>hr@WeBake.co.za</p>
                </div>
                {/*Number Section*/}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                    <PhoneCall className='text-5xl'></PhoneCall>
                    </div>
                    <p>TEL: (0) 1152 5120 323</p>
                    <p>Tel: (0) 1520 5120 745</p>
                    <p>Tel: (0) 123  5120 090</p>
                    
                </div>

            </div>

        </div>
    
    </div>
  </>;
};

export default Footer;