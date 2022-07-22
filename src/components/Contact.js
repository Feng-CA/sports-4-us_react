import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import '../style.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_fa8l5l8', 'template_tknf8e9', form.current, 'f75KRyXISF9Mry1c9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <Container sx={{width: 380}}>
            <Box sx={{textAlign: "center"}} margin={3}>
                <Typography variant='h4'>Contact Us</Typography>
            </Box>

            <Box className="contactForm">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <Button type="submit" variant="contained" color="success">Send Message</Button>
                </form>
            </Box>
        </Container>
    )
}

export default Contact