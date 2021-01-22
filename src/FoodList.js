import { Box, Grid, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import FoodItem from "./FoodItem";
import { fetchFoods } from "./redux/food/foodActions";
import { foodSelector, foodLoadingSelector } from "./redux/store";
import { ClipLoader } from 'react-spinners';
import { FETCH_FOODS_REQUEST_ASYNC } from "./redux/food/foodTypes";

const useStyles = makeStyles(() => ({
    loading: {
        margin: 'auto',
    },
}));

function FoodList(props) {
    const classes = useStyles();
    if (props.foodList.length === 0) {
        props.fetchFoods();
    }
    return (
        <Box bgcolor="grey.100" style={{ padding: 20 }}>
            <ClipLoader className={classes.loading} loading={props.loading} />
            <Grid container spacing={2} justify="space-around">
                {props.foodList.length > 0 && props.foodList.map(food => (
                    <Grid key={food.id} item>
                        <FoodItem food={food} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

const mapStateToProps = state => ({
    foodList: foodSelector(state),
    loading: foodLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    fetchFoods: () => dispatch({ type: FETCH_FOODS_REQUEST_ASYNC })
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);