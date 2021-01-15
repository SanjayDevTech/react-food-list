import { Box, Button, ButtonGroup, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { foodSelector } from "./redux/store";
import { addItemToCart, removeItemFromCart } from './redux/cart/cartActions';

function CartItem(props) {
    return (
        <Box display="flex" style={{ padding: 10 }}>
            <Box>
                <img style={{ width: 300 }} src={props.food.img || ""} alt={props.food.title || ""} />
            </Box>
            <Box display="flex" style={{ padding: 10 }} flexGrow={1}>
                <Box flexGrow={1}>
                    <Typography variant="h5">
                        {props.food.title || "ERROR"}
                    </Typography>
                </Box>
                <Box>
                    <ButtonGroup style={{ height: 40, width: 100 }}>
                        <Button onClick={props.addCartItem} ><Typography variant="h5">+</Typography></Button>
                        <Button><Typography variant="h5">{props.cart.count}</Typography></Button>
                        <Button onClick={props.removeCartItem} ><Typography variant="h5">-</Typography></Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state, ownProps) => ({
    food: foodSelector(state).filter(food => food.id === ownProps.cart.id)[0] || {},
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addCartItem: () => dispatch(addItemToCart(ownProps.cart.id)),
    removeCartItem: () => dispatch(removeItemFromCart(ownProps.cart.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);