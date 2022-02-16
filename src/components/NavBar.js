import React from 'react';
import {AppBar, styled, Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";

const SiteAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.secondary,
    color: theme.palette.primary,
    height:"150px",
    paddingTop: "40px"
}));


const SiteTab = styled(Tab)(({ theme }) => ({
    backgroundColor: theme.palette.secondary,
    color: theme.palette.primary,
    fontSize:30,
    fontFamily: 'Raleway',
    fontWeight: "bold"
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
                <SiteTab label="Menú" value="/menu" to="/menu" component={Link}/>
                <SiteTab label="Acerca de Nosotros" value="/about" to="/about" component={Link}/>
                <SiteTab label="Contacto" value="/contact" to="/contact" component={Link}/>
            </LargeSiteTabs>
            <SmallSiteTabs >
                <SiteTab  label="Home" value="/home" to="/" component={Link}/>
            </SmallSiteTabs>
        </SiteAppBar>
    );
}

export default NavBar;