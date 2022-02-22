import React from 'react';
import {AppBar, styled, Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";
import logo from './logo.png';

const SiteAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary,
}));


const SiteTab = styled(Tab)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontSize:30,
    fontFamily: 'Raleway',
    fontWeight: "bold",
    maxWidth: "230px"
}));

const LogoImageContainer = styled("div")(({ theme }) => ({
    width: "200px",
    textAlign: "center"
}));

const LargeSiteTabs = styled(Tabs)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none"
    },
}));
const SmallSiteTabs = styled(Tabs)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: "none"
    },
}));

const NavBar = () => {
    return (
        <SiteAppBar elevation={0}>
            <LargeSiteTabs centered>
                <SiteTab  label="Home" value="/home" to="/" component={Link}/>
                <SiteTab label="Contacto" value="/contact" to="/contact" component={Link}/>
                <LogoImageContainer>
                    <img src={logo} alt={"logo"} width={"80%"}/>
                </LogoImageContainer>
                <SiteTab label="Acerca de nosotros" width={"10px"} value="/about" to="/about" component={Link}/>
                <SiteTab label="Menú" value="/menu" to="/menu" component={Link}/>
            </LargeSiteTabs>
            <SmallSiteTabs >
                <SiteTab  label="Home" value="/home" to="/" component={Link}/>
            </SmallSiteTabs>
        </SiteAppBar>
    );
}

export default NavBar;