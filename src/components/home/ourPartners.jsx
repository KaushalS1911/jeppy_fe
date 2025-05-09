import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

import image1 from '../../assets/images/home/ourParteners/1034d6dade6515e884009abd0d5fa05fd6b94f99.png';
import image2 from '../../assets/images/home/ourParteners/fefe1f8d2a476bfb9bc87208c2ef73e3850ac856.png';
import image3 from '../../assets/images/home/ourParteners/2fc1a4d0238a8b54cd072be0f937c13c9a1c20d1.png';
import image4 from '../../assets/images/home/ourParteners/692c3ae707f825d98efa71a2efce3da27a5bb7d4.png';
import image5 from '../../assets/images/home/ourParteners/e878bf73590ea1b40036fcefbbaa5c70845de2a5.png';
import image6 from '../../assets/images/home/ourParteners/1567673037c0d13adde8d39518de9cd7efe59c10.png';
import image7 from '../../assets/images/home/ourParteners/451daacf11cb5a93e1618319b1679fa357118ad3.png';

const images = [image1, image2, image3, image4, image5, image6, image7];

function OurPartners() {

    const theme = useTheme();

    return (
        <Box sx={{py: {xs: 5, md: 10}}}>
            <Typography className={'monserrat'} sx={{ fontSize: { md: "36px", sm: "28px", xs: "20px" }, fontWeight: 700, textAlign: "center", color: "#000" , pb:4 }}>
                Our Success Partners
            </Typography>

            <Box sx={{ mt: 4, px: 2 ,background: `${theme.palette.saffron}` , py: {sm:8 , xs:5}}}>
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
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1500: { slidesPerView: 5 },
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,px:2 }}>
                                <img src={img} alt={`partner-${index}`} style={{ height: "120px", objectFit: "contain" }} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Box>
        </Box>
    );
}

export default OurPartners;
