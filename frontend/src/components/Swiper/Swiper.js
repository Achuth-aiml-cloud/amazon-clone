import React from 'react';
import {Swiper , SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css"

function Carousel(){
    return(
        <div className="carousel-container">
            <Swiper
            loop={true}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation,Autoplay]}
            autoplay={{
                delay: 4000,
              }}
            className="swiperclass"
            >
                <SwiperSlide>
                    <img className="banner-img" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/PUSH/PC_Hero_3000x1200_NTA_2X._CB599338253_.jpg" alt="banner1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="banner-img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img12/OHL/AugART/Hero/PC_hero_1_2x._CB599372168_.jpg" alt="banner2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="banner-img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/AugART/GW/HPC_Unrec_Event_3000x1200._CB599383591_.jpg" alt="banner3"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="banner-img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/AugART23/GW/PC_Hero_3000x1200-PCA._CB599740638_.jpg" alt="banner4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://m.media-amazon.com/images/I/714VlfkSB-L._SX3000_.jpg" className="banner-img" alt="banner-4" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel;