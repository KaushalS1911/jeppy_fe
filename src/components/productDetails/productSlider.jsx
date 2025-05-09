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

import img1 from '../../assets/images/products/ABCD-min-600x600 1.png';
import img2 from '../../assets/images/products/Animal-Big-min-600x600 1.png';
import img3 from '../../assets/images/products/Animals-Small-min-600x600 1.png';
import img4 from '../../assets/images/products/Bacon-Chips-400x400 1.png';
import img5 from '../../assets/images/products/Button-12mm-400x400 1.png';
import img6 from '../../assets/images/products/Button-12mm-400x400 2.png';
import img7 from '../../assets/images/products/Button-14mm-400x400 1.png';
import img8 from '../../assets/images/products/Crab-400x400 1.png';
import img9 from '../../assets/images/products/Engine-Rider-400x400 1.png';
import img10 from '../../assets/images/products/Flower-Button-400x400 1.png';
import img11 from '../../assets/images/products/Garlic-400x400 1.png';
import img12 from '../../assets/images/products/Garlic-Ring-9mm-400x400 1.png';
import img13 from '../../assets/images/products/Garlic-Ring-14mm-600x600 1.png';
import img14 from '../../assets/images/products/Gear-Ring-600x600 1.png';
import img15 from '../../assets/images/products/Jems-Giant-600x600 1.png';
import img16 from '../../assets/images/products/Lentil-Curl-600x600 1.png';
import img17 from '../../assets/images/products/Mad-Stick-600x600 1.png';
import img18 from '../../assets/images/products/Mesh-9-600x600 1.png';
import img19 from '../../assets/images/products/Mini-Ring-9mm-600x600 1.png';
import img20 from '../../assets/images/products/Penne-4mm-600x600 1.png';

import {Link} from "react-router-dom";

const products = [
    {id: 1, name: 'ABCD', image: img1, category: '2D Pellets'},
    {id: 2, name: 'ANIMAL BIG', image: img2, category: '2D Pellets'},
    {id: 3, name: 'ANIMAL SMALL', image: img3, category: '2D Pellets'},
    {id: 4, name: 'BACON CHIPS', image: img4, category: '3D Pellets'},
    {id: 5, name: 'PENNE - 4MM', image: img5, category: '3D Pellets'},
    {id: 6, name: 'BASKET 9', image: img6, category: 'Micro Pellets'},
    {id: 7, name: 'BUTTON 12MM', image: img7, category: 'Micro Pellets'},
    {id: 8, name: 'BUTTON 14MM', image: img8, category: 'Potato Pallets'},
    {id: 9, name: 'CRAB', image: img9, category: 'Potato Pallets'},
    {id: 10, name: 'ENGINE RIDER', image: img10, category: 'Protein Pellets'},
    {id: 11, name: 'FLOWER BUTTON', image: img11, category: 'Protein Pellets'},
    {id: 12, name: 'GARLIC RING 9MM', image: img12, category: 'Sheeted Pellets'},
    {id: 13, name: 'GARLIC RING 14MM', image: img13, category: 'Sheeted Pellets'},
    {id: 14, name: 'GARLIC', image: img14, category: 'Veggi Pellets'},
    {id: 15, name: 'MINI RING 9MM', image: img15, category: 'Veggi Pellets'},
    {id: 16, name: 'GEAR RING', image: img16, category: 'Glutten Free Pellets'},
    {id: 17, name: 'MESH 9', image: img17, category: 'Glutten Free Pellets'},
    {id: 18, name: 'LENTIL CURL', image: img18, category: '2D Pellets'},
    {id: 19, name: 'JEMS GIANT', image: img19, category: '3D Pellets'},
    {id: 20, name: 'MAD STICK', image: img20, category: 'Micro Pellets'},
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