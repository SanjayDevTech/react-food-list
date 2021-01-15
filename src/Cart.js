import { Paper, Typography, makeStyles, Grid, Divider, Box } from "@material-ui/core";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { cartSelector, foodLoadingSelector, foodSelector } from "./redux/store";
import { fetchFoods } from "./redux/food/foodActions";
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        padding: 20,
        height: '100%',
    },
    title: {
        textAlign: 'center',
        marginBottom: 10,
    },
    gridItem: {
        padding: 20,
    },
}));

function Cart(props) {
    const classes = useStyles();
    if (props.foodList.length === 0 && !props.loading) {
        props.fetchFoodsP();
    }
    return (
        <Box bgcolor="grey.100" className={classes.root}>
            <Typography className={classes.title} variant="h4">
                Shopping cart
            </Typography>
            <Grid container spacing={2} justify="center">
                <Grid xs={12} md={8} item>
                    <Paper className={classes.gridItem}>
                        <Typography>
                            Cart ({props.cartItems.length} items)
                        </Typography>
                        {props.cartItems.map((cart, index) => (
                            <div key={cart.id}>
                                {index !== 0 && <Divider />}
                                <CartItem cart={cart} />
                            </div>
                        ))}
                    </Paper>
                </Grid>
                <Grid xs={12} md={3} item>
                    <Paper className={classes.gridItem}>hi</Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

const mapStateToProps = state => ({
    cartItems: cartSelector(state).filter(cart => cart.count > 0),
    foodList: foodSelector(state),
    loading: foodLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    fetchFoodsP: () => dispatch(fetchFoods())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);