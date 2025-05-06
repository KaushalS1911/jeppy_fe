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
    Container
} from "@mui/material";
import * as yup from 'yup';
import {useForm, Controller} from "react-hook-form";
import Img1 from '../../assets/images/contactUs/img1.png';
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";

function LetsTalk() {

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
        // Handle form submission
    };

    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                width: '100%',
                // maxWidth: '1200px',
                // mx: 'auto',
                bgcolor: '#FAFAFA',
                borderRadius: 4,
                overflow: 'hidden'
            }}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    fontWeight="bold"
                    sx={{py: 3}}
                >
                    Let's Talk
                </Typography>

                <Grid container sx={{bgcolor: '#FAFAFA'}}>
                    {/* Left side - Image */}
                    <Grid
                        item
                        size={{xs: 12, lg: 5}}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: {xs: 3, md: 6},
                            height: "647px",
                            width: {lg: "491px", xs: "100%"},
                        }}
                    >
                        <Box
                            component="img"
                            src={Img1}
                            alt="Snacks assortment"
                            sx={{
                                width: '100%',
                                // maxWidth: '500px',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>

                    {/* Right side - Form */}
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
                                px: {xs: 5, lg: 0}
                            }}
                        >
                            {/* First row - First name and Last name */}
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
                                                variant="standard"
                                                error={!!errors.firstName}
                                                helperText={errors.firstName?.message}
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

                            {/* Second row - Email and Phone */}
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
                                        bgcolor: '#F58B28',
                                        '&:hover': {bgcolor: '#e07b18'},
                                        borderRadius: '5px',
                                        px: 5,
                                        py: 1.5,
                                        textTransform: 'none',
                                        fontWeight: 'normal',
                                        boxShadow: 'none',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                fontSize: {md: '48px', sm: '36px', xs: '28px'},
                fontWeight: '700',
                color: '#F28A1E',
                textAlign: 'center',
                py: 5
            }}>
                At Jeppy, we don’t just deliver snacks — we deliver success.
            </Box>
        </Container>
    );
}

export default LetsTalk;