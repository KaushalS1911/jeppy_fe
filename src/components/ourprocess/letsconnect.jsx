import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Container, useTheme, Stack, IconButton
} from "@mui/material";
import {useForm, Controller} from "react-hook-form";
import * as yup from 'yup';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";


function LetsConnect() {

    const theme = useTheme();

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required('First Name is required')
            .matches(/^[A-Za-z\s]+$/, 'Invalid First Name'),

        lastName: yup
            .string()
            .required('Last Name is required')
            .matches(/^[A-Za-z\s]+$/, 'Invalid Last Name'),

        email: yup
            .string()
            .required('Email is required')
            .email('Invalid email address'),

        phone: yup
            .string()
            .required('Phone Number is required')
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),

        subject: yup
            .string()
            .required('Please select a subject'),

        message: yup
            .string()
            .required('Message is required'),
    });
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                width: '100%',
                borderRadius: 0,
                overflow: 'hidden'
            }}>
                <Box

                    sx={{
                        py: 3,
                        fontWeight: '700',
                        fontSize: {lg: '48px', md: "40px", sm: '30px', xs: '20px', textAlign: 'center'}
                    }}
                >
                    Let's Connect
                </Box>

                <Grid container sx={{
                    bgcolor: 'rgba(255, 255, 255, 1)',
                    p:2,
                    marginBottom:4,
                    borderRadius: 4,
                    // boxShadow:"20px 20px 80px rgba(0, 0, 0, 0.1)",
                }}>
                    <Grid
                        item
                        size={{xs: 12, lg: 5}}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: {lg:'flex-end',xs:'flex-start'},
                            // alignItems: 'center',
                            p: {xs: 3, md: 6},
                            pt:{lg:0,md:15,xs:8},
                            height: {lg:"647px",md:'500px'},
                            width: {lg: "491px", xs: "100%"},
                            bgcolor: `${theme.palette.saffron}`,
                            color: 'white',
                            borderRadius: 4,
                        }}
                    >
                        <Box>
                            <Box sx={{mb: 2}}>
                                <Box sx={{mb: 3, fontWeight: '600', fontSize: '36px', lineHeight: '100%'}}>
                                    Our Mission
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{lineHeight: 1.5, fontSize: '24px', fontWeight: '500' , pb:10}}>
                                    To revolutionize everyday snacking by delivering high-quality, innovative, and
                                    wholesome products that delight taste buds and build lasting trust — one bite at a
                                    time.
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'sp',
                            flexDirection: 'column',

                        }}>
                            <Stack direction="row" spacing={2}>
                                <IconButton
                                    aria-label="Twitter"
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&:hover': {bgcolor: 'rgba(255, 255, 255, 0.3)'}
                                    }}
                                >
                                    <TwitterIcon/>
                                </IconButton>
                                <IconButton
                                    aria-label="Instagram"
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&:hover': {bgcolor: 'rgba(255, 255, 255, 0.3)'}
                                    }}
                                >
                                    <InstagramIcon/>
                                </IconButton>
                                <IconButton
                                    aria-label="Telegram"
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&:hover': {bgcolor: 'rgba(255, 255, 255, 0.3)'}
                                    }}
                                >
                                    <TelegramIcon/>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid size={{xs: 12, lg: 7}}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                pr: {xs: 3, md: 7},
                                py: {xs: 3, md: 7},
                                px: {xs: 5, lg: 8}
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid size={{xs: 12, sm: 6}}>
                                    <Typography variant="body2" color="text.secondary" sx={{mb: 0.5}}>
                                        First Name
                                    </Typography>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                error={!!errors.firstName}
                                                helperText={errors.firstName?.message}
                                                variant="standard"
                                                InputProps={{disableUnderline: false}}
                                                sx={{
                                                    mb: 3,
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '2px solid #E0E0E0',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                        borderBottom: '2px solid #757575',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid size={{xs: 12, sm: 6}}>
                                    <Typography variant="body2" color="text.secondary" sx={{mb: 0.5}}>
                                        Last Name
                                    </Typography>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                variant="standard"
                                                error={!!errors.lastName}
                                                helperText={errors.lastName?.message}
                                                InputProps={{disableUnderline: false}}
                                                sx={{
                                                    mb: 3,
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '2px solid #E0E0E0',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                        borderBottom: '2px solid #757575',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid size={{xs: 12, sm: 6}}>
                                    <Typography variant="body2" color="text.secondary" sx={{mb: 0.5}}>
                                        Email
                                    </Typography>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                variant="standard"
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                                InputProps={{disableUnderline: false}}
                                                sx={{
                                                    mb: 3,
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '2px solid #E0E0E0',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                        borderBottom: '2px solid #757575',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid size={{xs: 12, sm: 6}}>
                                    <Typography variant="body2" color="text.secondary" sx={{mb: 0.5}}>
                                        Phone Number
                                    </Typography>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                variant="standard"
                                                error={!!errors.phone}
                                                helperText={errors.phone?.message}
                                                InputProps={{disableUnderline: false}}
                                                sx={{
                                                    mb: 3,
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '2px solid #E0E0E0',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                        borderBottom: '2px solid #757575',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>

                            {/* Subject selection */}
                            <Box>
                                <Typography variant="body2" fontWeight={'Bold'} color="#000" sx={{mb: 2}}>
                                    Select Subject?
                                </Typography>
                                <Controller
                                    name="subject"
                                    control={control}
                                    render={({field}) => (
                                        <FormControl error={!!errors.subject}>
                                            <RadioGroup row {...field}>
                                                <FormControlLabel
                                                    value="General Inquiry 1"
                                                    control={<Radio size="small"/>}
                                                    label="General Inquiry"
                                                />
                                                <FormControlLabel
                                                    value="General Inquiry 2"
                                                    control={<Radio size="small"/>}
                                                    label="General Inquiry"
                                                />
                                                <FormControlLabel
                                                    value="General Inquiry 3"
                                                    control={<Radio size="small"/>}
                                                    label="General Inquiry"
                                                />
                                                <FormControlLabel
                                                    value="General Inquiry 4"
                                                    control={<Radio size="small"/>}
                                                    label="General Inquiry"
                                                />
                                            </RadioGroup>
                                            <Typography variant="caption" color="error">{errors.subject?.message}</Typography>

                                        </FormControl>
                                    )}
                                />
                            </Box>

                            {/* Message */}
                            <Box>
                                <Typography variant="body2" color="text.secondary" sx={{mb: 0.5}}>
                                    Message
                                </Typography>
                                <Controller
                                    name="message"
                                    control={control}
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant="standard"
                                            placeholder="Write your message..."
                                            multiline
                                            minRows={1}
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            InputProps={{disableUnderline: false}}
                                            sx={{
                                                mb: 1.5,
                                                '& .MuiInput-underline:before': {
                                                    borderBottom: '2px solid #E0E0E0',
                                                },
                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                    borderBottom: '2px solid #757575',
                                                },
                                                '& .MuiInput-underline:after': {
                                                    borderBottom: '2px solid black',
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Box>


                            {/* Submit button */}
                            <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 1}}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        bgcolor: `${theme.palette.saffron}`,
                                        border: `2px solid ${theme.palette.saffron}`,
                                        transition: "0.3s",
                                        '&:hover': {
                                            border: `2px solid ${theme.palette.saffron}`,
                                            background: "transparent",
                                            color: "#000"
                                        },
                                        borderRadius: '5px',
                                        px: 5,
                                        py: 1.5,
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        boxShadow: 'none',
                                        fontSize: '16px'
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default LetsConnect;