import React from 'react';
import { Paper, styled, Typography} from "@mui/material";
import Carousel from 'react-material-ui-carousel'

var items = [
    {
        image: "https://badun.nestle.es/imgserver/v1/80/1290x742/layer-cake-de-chocolate-negro-70-.jpg"
    },
    {
        image: "https://i2.wp.com/smittenkitchen.com/wp-content/uploads/2021/03/hummingbird-cake-scaled.jpg?fit=1200%2C800&ssl=1"
    },
    {
        image: "https://realfood.tesco.com/media/images/1400x919-ApprovedTescoFestiveStreetFood6919ClassicCristmasCake-5aac3563-6153-4213-a444-3f2e215e64cd-0-1400x919.jpg"
    }
]

const Image = styled(Paper)(({ theme , image}) => ({
    textAlign: 'center',
    backgroundColor: theme.palette.secondary,
    width: "100%",
    height: "400px",
    paddingTop:"220px",
    backgroundImage: `url(${image})`,
}));
function Item(props)
{
    return (
        <Image image={props.item.image}>
            <Typography variant={"h1"} color={"white"}> Jacky's Backery</Typography>
            <br/>
            <Typography variant={"h3"} color={"white"}> EST. 2020</Typography>
            <Typography variant={"h3"} color={"white"}> CREANDO DULCES SUEÑOS</Typography>
        </Image>
    )
}

const Home = () => {
    return (
        <div>
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>

    );
}

export default Home;