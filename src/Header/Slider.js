import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide className='w-full' >
                    <div className='bg-[#9ceaf1] h-[38.68rem] max-w-7xl mx-auto mt-10 rounded-lg flex justify-between items-center font-mont'>
                        <div className='flex flex-col px-[10rem] gap-y-[30px] w-1/2'>
                            <span className='text-[16px] font-bold text-[#2A7CC7] tracking-tight'>SUMMER 2020</span>
                            <h2 className='text-[58px] text-[#252B42] font-bold '>NEW COLLECTION</h2>
                            <p className='text-[20px] text-[#737373] w-7/12'>We know how large objects will act, but things on a small scale.</p>
                            <button className='bg-[#23A6F0] py-[15px] px-[40px] font-bold text-[24px] rounded-lg text-white self-start hover:bg-[#1c98db] transition duration-150'><a href="#">SHOP NOW</a></button>
                        </div>
                        <div className='w-1/2 bg-rose-300'>
                            <img src="./header/slider/hero.png" className='bg-cover'   alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full' >
                    <div className='bg-[#9ceaf1] h-[38.68rem] max-w-7xl mx-auto mt-10 rounded-lg flex justify-between items-center font-mont'>
                        <div className='flex flex-col px-[10rem] gap-y-[30px] w-1/2'>
                            <span className='text-[16px] font-bold text-[#2A7CC7] tracking-tight'>SUMMER 2020</span>
                            <h2 className='text-[58px] text-[#252B42] font-bold '>NEW COLLECTION</h2>
                            <p className='text-[20px] text-[#737373] w-7/12'>We know how large objects will act, but things on a small scale.</p>
                            <button className='bg-[#23A6F0] py-[15px] px-[40px] font-bold text-[24px] rounded-lg text-white self-start hover:bg-[#1c98db] transition duration-150'><a href="#">SHOP NOW</a></button>
                        </div>
                        <div className='w-1/2 bg-rose-300'>
                            <img src="./header/slider/hero.png" className='bg-cover'   alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
