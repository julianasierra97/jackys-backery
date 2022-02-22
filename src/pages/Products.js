import React from 'react';
import {Container, Typography} from "@mui/material";

const Products = (items) => {
    return (
        <Container>
            <Typography variant="h1"> {items.items}</Typography>
        </Container>
    );
}

export default Products;