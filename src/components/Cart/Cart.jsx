import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import classes from '*.module.css';


const Cart = ({ cart }) => {
    const isEmpty = true;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, starting adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>

            </Grid>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Shoopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
