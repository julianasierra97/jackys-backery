import React from 'react';
import {Container, Grid, IconButton, Paper, styled, Typography} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import {Link} from "react-router-dom";

const CarouselItems = [
    {
        image: "https://drive.google.com/uc?export=view&id=1YHocfhDK4gmQdTXZjVEfqyUcOGO6GL2c"
    },
    {
        image: "https://drive.google.com/uc?export=view&id=1RcVjndXkBv0W-uv-ipvItUOHkJ4a7b_g"
    },
    {
        image: "https://drive.google.com/uc?export=view&id=1pTyMUIp1GxWrvex0ua6MRG7wxX-Xh4eu"
    }
]

const ProductItems = [
    {
        image: "https://drive.google.com/uc?export=view&id=1YHocfhDK4gmQdTXZjVEfqyUcOGO6GL2c",
        name: "Tortas",
        link: "/tortas"
    },
    {
        image: "https://drive.google.com/uc?export=view&id=1RcVjndXkBv0W-uv-ipvItUOHkJ4a7b_g",
        name: "Bites",
        link: "/bites"
    },
    {
        image: "https://drive.google.com/uc?export=view&id=1pTyMUIp1GxWrvex0ua6MRG7wxX-Xh4eu",
        name: "Postres",
        link: "/postres"
    }
]

const Image = styled(Paper)(({ theme , image}) => ({
    textAlign: 'center',
    width: "100%",
    height: "400px",
    paddingTop:"220px",
    backgroundImage: `url(${image})`,
    backgroundSize: "100% auto",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
}));

const ProductTab = styled(Paper)(({ theme , item}) => ({
    textAlign: 'right',
    width: "300px",
    height: "400px",
    backgroundImage: `url(${item.image})`,
    backgroundSize: "auto 120% ",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: 20,
    color: theme.palette.primary.main
}));
function Item(props)
{
    return (
        <Image image={props.item.image} elevation={0}>
            <Typography variant={"h1"} color={"white"}> Jacky's Backery</Typography>
            <br/>
            <Typography variant={"h3"} color={"white"}> EST. 2020</Typography>
            <Typography variant={"h3"} color={"white"}> CREANDO DULCES SUEÑOS</Typography>
        </Image>
    )
}

const Home = props => {
    return (
        <div>
            <Carousel>
                {
                    CarouselItems.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <Container>
                <Grid container>
                    {
                        ProductItems.map( (item, i) =>
                            <Grid item md={4} sm={12}>
                                <IconButton component={Link} to={item.link}>
                                    <ProductTab key={i} item={item} >
                                        <Typography variant={"h1"} color={"white"}> {item.name} </Typography>
                                    </ProductTab>
                                </IconButton>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>

    );
}

export default Home;