import { Card, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';
import { addItemToCart } from './redux/cart/cartActions';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 20,
        width: 330,
        maxHeight: 500,
    },
    grow: {
      flexGrow: 1,
    },
    media: {
        paddingTop: '56.25%'
    },
}));

function FoodItem(props) {
    const classes = useStyles();
    const {food} = props;
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                image={food.img}
                title={food.title} />
            <CardContent>
                <Typography variant="body1">
                    {food.title}
                </Typography>
                <div className={classes.grow} />
                <Rating name="half-rating-read" defaultValue={food.rating} precision={0.1} readOnly />
            </CardContent>
            <CardActions>
                <IconButton onClick={() => props.addItem(food.id)} color="secondary" aria-label="add to cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

const mapDispatchToProps = dispatch => ({
  addItem: (id) => dispatch(addItemToCart(id))
});

export default connect(null, mapDispatchToProps)(FoodItem);
