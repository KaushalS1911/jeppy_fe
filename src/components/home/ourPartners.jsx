import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import {Autoplay} from 'swiper/modules';

import image1 from '../../assets/images/home/ourParteners/akash.PNG';
import image2 from '../../assets/images/home/ourParteners/Bablu.PNG';
import image3 from '../../assets/images/home/ourParteners/balaji.PNG';
import image4 from '../../assets/images/home/ourParteners/crax.PNG';
import image5 from '../../assets/images/home/ourParteners/ghodawat-foods.PNG';
import image6 from '../../assets/images/home/ourParteners/haldiram.PNG';
import image7 from '../../assets/images/home/ourParteners/panjwani.PNG';
import image8 from '../../assets/images/home/ourParteners/priniti.PNG';
import image9 from '../../assets/images/home/ourParteners/real.PNG';
import image10 from '../../assets/images/home/ourParteners/shyam-g.PNG';
import image11 from '../../assets/images/home/ourParteners/Sunder.PNG';





const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

function OurPartners() {

    const theme = useTheme();

    return (
        <Box sx={{background: `${theme.palette.saffron}`}}>
            <Typography className={'monserrat'} sx={{
                fontSize: {md: "36px", sm: "28px", xs: "20px"},
                fontWeight: 700,
                textAlign: "center",
                color: "white",
                pb: 4
            }}>
                Our Success Partners
            </Typography>

            <Box sx={{mt: 4, px: 2,  py: {sm: 8, xs: 5}}}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        768: {slidesPerView: 3},
                        1024: {slidesPerView: 4},
                        1500: {slidesPerView: 5},
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", px: 2}}>
                                <img src={img} alt={`partner-${index}`}
                                     style={{height: "220px", objectFit: "contain"}}/>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Box>
        </Box>
    );
}

export default OurPartners;
