import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 8 }}>
      {/* White Card Container */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: { xs: 3, md: 5 },
          p: { xs: 3, sm: 4, md: 5, lg: 6 },
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Let's Connect Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 700,
              textAlign: "center",
              fontFamily: "Inter",
              color: "#000",
              mb: 2,
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#666",
              lineHeight: 1.6,
            }}
          >
            Whether you're a brand, distributor, or curious snack lover — we're
            here to help.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Left Side - Contact Information */}
          <Grid item xs={12} md={6}>
            {/* Office Address */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <LocationOnIcon
                  sx={{ color: "#F97316", mr: 1.5, fontSize: "24px" }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Office Address
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#666",
                  ml: 5,
                  lineHeight: 1.6,
                }}
              >
                27 - NH, Ring Road, Near Mira Udhyog, Nr. Bansidhar Weigh
                Bridge, Rajkot - 360003 (Gujarat) India.
              </Typography>
            </Box>

            {/* Contact */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <PhoneIcon
                  sx={{ color: "#F97316", mr: 1.5, fontSize: "24px" }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Contact
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#666",
                  ml: 5,
                }}
              >
                +91 75758 08749
              </Typography>
            </Box>

            {/* Email */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <EmailIcon
                  sx={{ color: "#F97316", mr: 1.5, fontSize: "24px" }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Email
                </Typography>
              </Box>
              <Box sx={{ ml: 5 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#666",
                    mb: 0.5,
                  }}
                >
                  Domestic: inquiry@jeppy.in
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#666",
                  }}
                >
                  International: export@jeppy.in
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Map */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1",
                height: { xs: "300px", md: "400px" },
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2679325523645!2d70.82092687602162!3d22.267838244069882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b584d2aba6c3%3A0xfa831224b3c5ed4a!2sJeppy!5e0!3m2!1sen!2sin!4v1746606002688!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jayant Snacks & Beverages Location"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Send us a Message Section */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 700,
              color: "#000",
              mb: 1,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: 0,
                width: "60px",
                height: "4px",
                backgroundColor: "#F97316",
                borderRadius: "2px",
              },
            }}
          >
            Send us a Message
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#666",
              mt: 3,
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Have a question or want to work together? Fill out the form below
            and we'll get back to you as soon as possible.
          </Typography>

          {/* Contact Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            {/* Row 1: Full Name and Email */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 3 },
                mb: 3,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#333",
                    mb: 1,
                  }}
                >
                  Full Name
                </Typography>
                <TextField
                  fullWidth
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      "& fieldset": {
                        borderColor: "#ddd",
                      },
                      "&:hover fieldset": {
                        borderColor: "#F97316",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#F97316",
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#333",
                    mb: 1,
                  }}
                >
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  name="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      "& fieldset": {
                        borderColor: "#ddd",
                      },
                      "&:hover fieldset": {
                        borderColor: "#F97316",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#F97316",
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Row 2: Phone Number and Subject */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 3 },
                mb: 3,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#333",
                    mb: 1,
                  }}
                >
                  Phone Number
                </Typography>
                <TextField
                  fullWidth
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      "& fieldset": {
                        borderColor: "#ddd",
                      },
                      "&:hover fieldset": {
                        borderColor: "#F97316",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#F97316",
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#333",
                    mb: 1,
                  }}
                >
                  Subject
                </Typography>
                <TextField
                  fullWidth
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding Membership"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      "& fieldset": {
                        borderColor: "#F97316",
                        borderWidth: "2px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#F97316",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#F97316",
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Message Field */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#333",
                  mb: 1,
                }}
              >
                Message
              </Typography>
              <TextField
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                multiline
                rows={5}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    "& fieldset": {
                      borderColor: "#ddd",
                    },
                    "&:hover fieldset": {
                      borderColor: "#F97316",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F97316",
                    },
                  },
                }}
              />
            </Box>

            {/* Send Message Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#F97316",
                  color: "white",
                  borderRadius: "8px",
                  px: { xs: 4, md: 6 },
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: { xs: "16px", md: "18px" },
                  boxShadow: "0 4px 14px rgba(249, 115, 22, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ea6b0a",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(249, 115, 22, 0.4)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
