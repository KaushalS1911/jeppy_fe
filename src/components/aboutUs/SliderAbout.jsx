import React, {useRef} from 'react';
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    CardMedia,
    IconButton, useTheme
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import aboutsliderimg from '../../assets/images/home/About/Vector.png';
import aboutsliderline from "../../assets/images/home/About/Vector 5.png"


const cards = [
    {
        since: "1987s",
        description: "Jayant Snacks and Beverages Pvt. Ltd. was founded in Rajkot, India, marking the beginning of our journey in the snack industry.",
        image: "/images/design.jpg"
    },
    {
        since: "1990s",
        description: "Expanded production capacity and began supplying ready-to-fry Papad Snacks across India.",
        image: "/images/development.jpg"
    },
    {
        since: "2000s",
        description: "Introduced 2D, 3D, laminated, and punched snack shapes — establishing our position as a leader in snack innovation.",
        image: "/images/ai.jpg"
    },
    {
        since: "2010s",
        description: "Launched our popular brands JEPPY and WOW, gaining strong market recognition.",
        image: "/images/productivity.jpg"
    },
    {
        since: "2015s",
        description: "Scaled up R&D, launching 100+ new product trials yearly and creating hundreds of unique shapes.",
        image: "/images/animation.jpg"
    },
    {
        since: "2018s",
        description: "Expanded into international markets, exporting to clients across Asia, Africa, and the Middle East.",
        image: "/images/animation.jpg"
    },
    {
        since: "2020s",
        description: "Introduced air-roast snack options to meet evolving health-conscious demands.",
        image: "/images/animation.jpg"
    },
    {
        since: "2023s",
        description: "Established four fully operational plants, increasing supply capacity and flexibility for custom manufacturing.",
        image: "/images/animation.jpg"
    },
    {
        since: "2025s",
        description: "On a mission to become the Global Leader in Snack Papad, with more innovations and expansion underway.",
        image: "/images/animation.jpg"
    }
];

function SliderAbout() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const theme = useTheme();


    return (
        <Box sx={{backgroundColor: '#fff',  paddingY:"60px"}}>
            <Container maxWidth="xl">
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        mb: 5,
                        color: '#333',
                        fontSize: "36px",
                        padding: '20px',
                    }}
                >
                    Our Journey
                </Typography>

                <Box sx={{position: 'relative'}}>
                    {/* Custom Nav Buttons */}
                    <IconButton

                        ref={prevRef}
                        sx={{
                            position: 'absolute',
                            top: -40,
                            left: 0,
                            zIndex: 10,
                            backgroundColor: '#fff',
                            boxShadow: 1,
                            width: 45,
                            height: 45,
                            border: '1px solid black',
                            '&:hover': {
                                backgroundColor: 'black',
                                color: `${theme.palette.saffron}`
                            },
                            '&:active': {
                                backgroundColor: 'black',
                                color: `${theme.palette.saffron}`
                            },
                        }}

                    >
                        <ArrowBackIcon sx={{fontSize: 22}}/>
                    </IconButton>

                    <IconButton
                        ref={nextRef}
                        sx={{
                            position: 'absolute',
                            top: -40,
                            right: 0,
                            zIndex: 10,
                            backgroundColor: '#fff',
                            boxShadow: 1,
                            width: 45,
                            height: 45,
                            border: "1px solid black",
                            '&:hover': {
                                backgroundColor: 'black',
                                color: `${theme.palette.saffron}`
                            },
                            '&:active': {
                                backgroundColor: 'black',
                                color: `${theme.palette.saffron}`
                            },
                        }}
                    >
                        <ArrowForwardIcon sx={{fontSize: 22}}/>
                    </IconButton>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current
                        }}
                        style={{
                            paddingBottom: '60px',
                        }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                        pagination={{clickable: true}}
                        spaceBetween={30}
                        breakpoints={{
                            640: {slidesPerView: 1},
                            768: {slidesPerView: 2},
                            1024: {slidesPerView: 3}
                        }}
                    >
                        {cards.map((card, i) => (
                            <SwiperSlide key={i}>
                                <Box sx={{textAlign: "center", paddingBottom: "50px"}}>
                                    <Box>
                                        <Typography sx={{
                                            color: "blue",
                                            fontWeight: "400",
                                            fontSize: "32px",
                                            lineHeight: "65px",
                                            textAlign: "center"
                                        }}>{card.since}</Typography>
                                    </Box>
                                    <Box sx={{
                                        margin: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "106px",
                                        width: "106px",
                                        borderRadius: "20px",
                                        backgroundColor: "#fdefe0"
                                    }}>
                                        <img src={aboutsliderimg} alt=""/>
                                    </Box>
                                    <Box sx={{position: "absolute", zIndex: "-1", top: "70px", right: "-200px"}}>
                                        <img src={aboutsliderline} alt="" style={{height: "auto", width: "100%"}}/>
                                    </Box>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{height: '100%'}}
                                >

                                    <Card
                                        sx={{
                                            width: '300px',
                                            height: '418px',
                                            borderRadius: '20px',
                                            boxShadow:"20px 20px 80px rgba(0, 0, 0, 0.1)",
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            bgcolor: '#fff',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: 'grey',
                                                margin: '15px',
                                                borderRadius: '15px',
                                                height: '180px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={card.image}
                                                alt="card preview"
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '15px'
                                                }}
                                            />
                                        </Box>
                                        <CardContent
                                            sx={{
                                                flexGrow: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                px: 3,
                                                pb: 3,
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                color="text.primary"
                                                sx={{fontSize: '20px'}}
                                            >
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
}

export default SliderAbout;
