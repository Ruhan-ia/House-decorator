import React from 'react';
import pic1 from '../../../assets/images/pic8.jpg'
import pic2 from '../../../assets/images/pic7.jpg'
import pic3 from '../../../assets/images/pic9.jpg'
import pic4 from '../../../assets/images/pic11.jpg'

import {  Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <>
       
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
      autoHeight={true}
      navigation={true}
      autoPlay={{
        delay: 2500,
       
      }}
      pagination={{
        type: 'progressbar',
      }}
     
      className='mySwiper'
    >
      <SwiperSlide><img src={pic1} alt="pic1" /></SwiperSlide>
      <SwiperSlide><img src={pic2} alt="pic2" /></SwiperSlide>
      <SwiperSlide><img src={pic3} alt="pic3" /></SwiperSlide>
      <SwiperSlide><img src={pic4} alt="pic4" /></SwiperSlide>
      
    </Swiper>
    </>
    );
};

export default Banner;