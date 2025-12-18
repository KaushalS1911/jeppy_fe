import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import slide1 from "../../assets/images/home/success brands/Slide1.png";
import slide2 from "../../assets/images/home/success brands/Slide2.PNG";
import slide3 from "../../assets/images/home/success brands/Slide3.PNG";
import slide4 from "../../assets/images/home/success brands/Slide4.PNG";
import slide5 from "../../assets/images/home/success brands/Slide5.PNG";
import slide6 from "../../assets/images/home/success brands/Slide6.PNG";
import slide7 from "../../assets/images/home/success brands/Slide7.PNG";
import slide8 from "../../assets/images/home/success brands/Slide8.PNG";
import slide9 from "../../assets/images/home/success brands/Slide9.PNG";
import slide10 from "../../assets/images/home/success brands/Slide10.PNG";
import slide11 from "../../assets/images/home/success brands/Slide11.PNG";
import slide12 from "../../assets/images/home/success brands/Slide12.PNG";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
];

function OurPartners() {
  const theme = useTheme();

  return (
    <Box sx={{ background: `${theme.palette.saffron}`, py: { xs: 2, md: 3 } }}>
      <Typography
        className={"monserrat"}
        sx={{
          fontSize: { md: "36px", sm: "28px", xs: "20px" },
          fontWeight: 700,
          textAlign: "center",
          color: "white",
          pt: 10,
          pb: { sm: 4, md: 0 },
        }}
      >
        Our Success Partners
      </Typography>

      <Box sx={{ mt: 4, px: 2, py: { sm: 8, xs: 5 } }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <img
                  src={img}
                  alt={`partner-${index}`}
                  style={{ height: "220px", objectFit: "contain" }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default OurPartners;
