import React, {useRef} from 'react';
import {
    Box,
    Button,
    Container,
    Typography
} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

import img1 from '../../assets/images/products/2d.PNG';
import img2 from '../../assets/images/products/3d.PNG';
import img3 from '../../assets/images/products/micropellets.PNG';
import img4 from '../../assets/images/products/sheeted-and-papd.PNG';

import {Link} from "react-router-dom";

const products = [
    {id: 1, name: 'ABCD', image: img1, category: '2D Pellets'},
    {id: 2, name: 'BACON CHIPS', image: img2, category: '3D Pellets'},
    {id: 3, name: 'BASKET 9', image: img3, category: 'Micro Pellets'},
    {id: 4, name: 'GARLIC RING 9MM', image: img4, category: 'Sheeted Pellets'},
];

const ProductSlider = () => {
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Container maxWidth="xl" sx={{my: 10}}>
            <Typography
                sx={{
                    fontSize: '42px',
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: 6,
                }}
            >
                Similar Products
            </Typography>

            <Box sx={{position: 'relative'}}>
                {/* Left Arrow */}
                <Button
                    sx={{
                        backgroundColor: 'white',
                        color: '#000',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        border: '2px solid #000',
                        borderRadius: '50%',
                        height: '48px',
                        width: '48px',
                        minWidth: '48px',
                        p: 0,
                        zIndex: 10,
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: '0.3s ease',
                        '&:hover': {
                            backgroundColor: '#000',
                            color: '#F97316',
                        },
                    }}
                    onClick={handlePrev}
                >
                    <WestIcon />
                </Button>


                {/* Swiper Slider */}
                <Swiper
                    ref={swiperRef}
                    modules={[Autoplay]}
                    autoplay={{delay: 2500, disableOnInteraction: false}}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        300: {slidesPerView: 2},
                        600: {slidesPerView: 3},
                        900: {slidesPerView: 4},
                        1200: {slidesPerView: 5},
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    height: 250,
                                    width: {lg: 250, md: 218, sm: 210, xs: 142},
                                    mx: 'auto',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: 160,
                                        width: '100%',
                                        paddingTop: 1,
                                        px: 1,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={product.image}
                                        alt={product.name}
                                        sx={{
                                            maxHeight: '100%',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>
                                <Box sx={{paddingBottom: '16px !important'}}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bold"
                                        gutterBottom
                                        noWrap
                                    >
                                        {product.name}
                                    </Typography>
                                    <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="text"
                                            size="small"
                                            sx={{
                                                color: '#1ea4ce',
                                                borderTop: '2px solid #F97316',
                                                paddingBottom: 0,
                                                textTransform: 'none',
                                                borderRadius: 0
                                            }}
                                        >
                                            More Details
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Arrow */}
                <Button
                    sx={{
                        backgroundColor: 'white',
                        color: '#000',
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        border: '2px solid #000',
                        borderRadius: '50%',
                        height: '48px',
                        width: '48px',
                        minWidth: '48px',
                        p: 0,
                        zIndex: 10,
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: '0.3s ease',
                        '&:hover': {
                            backgroundColor: '#000',
                            color: '#F97316',
                        },
                    }}
                    onClick={handleNext}
                >
                    <EastIcon />
                </Button>


            </Box>
        </Container>
    );
};

export default ProductSlider;