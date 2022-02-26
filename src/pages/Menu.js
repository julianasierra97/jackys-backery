import React, {useEffect, useState} from 'react';
import {
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    styled,
    Typography
} from "@mui/material";
import {getMenu} from "../data/MenuData";
import {Link} from "react-router-dom";

const MenuContainer = styled(Container)(({ theme }) => ({
    justifyContent: 'center'
}));

const StyledImageListItemBar = styled(ImageListItemBar)(({ theme }) => ({
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: "bold",
    color: theme.palette.primary.main
}));

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
    '&:hover': {
        background: theme.palette.secondary.main,
    },
    textDecoration: "none"
}));

const Menu = () => {
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const loadMenu = async () => {
            setLoading(true);
            const menu = await getMenu();
            setMenu(menu);
            setLoading(false);
        }
        loadMenu();
    }, []);
    return (
        <MenuContainer>
            <Typography variant="h1"> Menu</Typography>
            {loading ? (
                    <h4>Loading...</h4>) :
                (
                    <ImageList
                        cols={3}
                        gap={8}
                    >
                        {Object.keys(menu).map(item => {
                            const currentItem = menu[item];
                            return   <StyledImageListItem button component={Link} to="/home" key={item}>
                                <img
                                    alt = {item}
                                    loading="lazy"
                                    src={`${currentItem.image}`}
                                    srcSet={`${currentItem.image}`}
                                />
                                <StyledImageListItemBar
                                    title={item}
                                    subtitle={`${currentItem.prices[0]} - ${currentItem.prices[currentItem.prices.length-1]}`}
                                    position="below"
                                />
                        </StyledImageListItem>
                    })}
                    </ImageList>
                )
            }
        </MenuContainer>
    );
}

export default Menu;