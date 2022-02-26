import React from 'react';
import {Grid, Link, styled, Typography} from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled(`div`)(({ theme }) => ({
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    color: theme.palette.primary.main,
    width: "100%",
    marginTop: 20
}));

const Footer = () => {
    return (
        <FooterContainer>
            <Grid container>
                <Grid item md={6} sm={12} lg={6}>
                    <Typography variant="h3"> Redes sociales</Typography>
                    <Link href=" https://wa.me/573008908719">
                        <WhatsAppIcon/>
                    </Link>
                    <Link href="https://www.facebook.com/jackysbakeryco/">
                        <FacebookIcon/>
                    </Link>
                    <Link href="https://instagram.com/jackysbakery_?utm_medium=copy_link">
                        <InstagramIcon/>
                    </Link>
                    <Link href="https://twitter.com/jackysbakery_?s=11">
                        <TwitterIcon/>
                    </Link>
                </Grid>
                <Grid item md={6} sm={12} lg={6}>
                    <Typography variant="h3">Información de Contacto</Typography>
                    <Typography variant="h4"> Dirección: Carrera 21a #150-30, Casa</Typography>
                    <Typography variant="h4"> Las Margaritas, Bogota D.C</Typography>
                    <Typography variant="h4"> Correo: jackysbakeryco@gmail.com</Typography>
                    <Typography variant="h4"> Celular: 3008908719</Typography>
                </Grid>
            </Grid>
        </FooterContainer>
    );
}

export default Footer;