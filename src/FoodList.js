import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import FoodItem from "./FoodItem";
import { fetchFoods } from "./redux/food/foodActions";
import { foodSelector } from "./redux/store";

function FoodList(props) {
    if (props.foodList.length === 0) {
        props.fetchFoods();
    }
    return (
        <div style={{ padding: 20 }}>
            <Grid container spacing={2} justify="space-around">
                {props.foodList.length > 0 && props.foodList.map(food => (
                    <Grid key={food.id} item>
                        <FoodItem food={food} />
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}

const mapStateToProps = state => ({
    foodList: foodSelector(state)
});

const mapDispatchToProps = dispatch => ({
    fetchFoods: () => dispatch(fetchFoods())
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);