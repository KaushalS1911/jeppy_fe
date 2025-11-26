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
import {Link, useParams} from "react-router-dom";
import {getSimilarProducts} from '../../data/productsData';

const ProductSlider = () => {
    const { id } = useParams();
    const products = getSimilarProducts(parseInt(id), 4);
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

    if (products.length === 0) {
        return null;
    }

    return (
        <Box sx={{ backgroundColor: "#C37A3D", py: { xs: 6, md: 8 } }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: { xs: 3, md: 5 },
                        p: { xs: 3, sm: 4, md: 5 },
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '28px', sm: '36px', md: '42px' },
                            fontWeight: 700,
                            textAlign: 'center',
                            mb: 6,
                            color: '#000',
                        }}
                    >
                        Similar Products
                    </Typography>

                    <Box sx={{ position: 'relative', px: { xs: 0, sm: 6, md: 8 } }}>
                        {/* Left Arrow */}
                        <Button
                            sx={{
                                backgroundColor: 'white',
                                color: '#000',
                                position: 'absolute',
                                top: '50%',
                                left: { xs: '-20px', sm: '-24px', md: '-28px' },
                                transform: 'translateY(-50%)',
                                border: '2px solid #000',
                                borderRadius: '50%',
                                height: { xs: '40px', sm: '48px', md: '56px' },
                                width: { xs: '40px', sm: '48px', md: '56px' },
                                minWidth: { xs: '40px', sm: '48px', md: '56px' },
                                p: 0,
                                zIndex: 15,
                                display: { xs: 'none', sm: 'flex' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: '0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                '&:hover': {
                                    backgroundColor: '#000',
                                    color: '#F97316',
                                    transform: 'translateY(-50%) scale(1.1)',
                                },
                            }}
                            onClick={handlePrev}
                        >
                            <WestIcon sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
                        </Button>

                        {/* Swiper Slider */}
                        <Box sx={{ position: 'relative', zIndex: 5 }}>
                            <Swiper
                                ref={swiperRef}
                                modules={[Autoplay]}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                spaceBetween={16}
                                slidesPerView={1}
                                breakpoints={{
                                    300: { slidesPerView: 2, spaceBetween: 12 },
                                    600: { slidesPerView: 3, spaceBetween: 16 },
                                    900: { slidesPerView: 4, spaceBetween: 20 },
                                    1200: { slidesPerView: 4, spaceBetween: 24 },
                                }}
                                style={{ padding: '10px 0' }}
                            >
                                {products.map((product) => (
                                    <SwiperSlide key={product.id}>
                                        <Link
                                            to={`/product/${product.id}`}
                                            style={{ textDecoration: "none", display: "block", height: "100%" }}
                                        >
                                            <Box
                                                sx={{
                                                    textAlign: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'transform 0.2s',
                                                    height: '100%',
                                                    '&:hover': {
                                                        transform: 'translateY(-5px)',
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: '100%',
                                                        aspectRatio: '1',
                                                        maxHeight: { xs: '150px', sm: '180px', md: '200px' },
                                                        mb: 1.5,
                                                        backgroundColor: '#fafafa',
                                                        borderRadius: '12px',
                                                        p: 2,
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
                                                <Typography
                                                    variant="body1"
                                                    fontWeight={500}
                                                    sx={{
                                                        color: '#333',
                                                        fontSize: { xs: '14px', sm: '15px', md: '16px' },
                                                    }}
                                                >
                                                    {product.name}
                                                </Typography>
                                            </Box>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>

                        {/* Right Arrow */}
                        <Button
                            sx={{
                                backgroundColor: 'white',
                                color: '#000',
                                position: 'absolute',
                                top: '50%',
                                right: { xs: '-20px', sm: '-24px', md: '-28px' },
                                transform: 'translateY(-50%)',
                                border: '2px solid #000',
                                borderRadius: '50%',
                                height: { xs: '40px', sm: '48px', md: '56px' },
                                width: { xs: '40px', sm: '48px', md: '56px' },
                                minWidth: { xs: '40px', sm: '48px', md: '56px' },
                                p: 0,
                                zIndex: 15,
                                display: { xs: 'none', sm: 'flex' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: '0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                '&:hover': {
                                    backgroundColor: '#000',
                                    color: '#F97316',
                                    transform: 'translateY(-50%) scale(1.1)',
                                },
                            }}
                            onClick={handleNext}
                        >
                            <EastIcon sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ProductSlider;