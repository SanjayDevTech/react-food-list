import { Grid } from "@material-ui/core";
import FoodItem from "./FoodItem";

const foodList = [{ "id": "1", "title": "Chocolate", "rating": 4.7, "img": "https://i.ibb.co/YLQF3gn/pexels-lisa-fotios-918328.jpg" }, { "id": "2", "title": "Cake", "rating": 4.4, "img": "https://i.ibb.co/wB63v6c/pexels-acharaporn-kamornboonyarush-1028714.jpg" }, { "id": "3", "title": "French fries", "rating": 4.5, "img": "https://i.ibb.co/KVsH3qw/pexels-valeria-boltneva-1893555.jpg" }, { "id": "4", "title": "Pizza", "rating": 4.1, "img": "https://i.ibb.co/m82wxD1/pexels-sydney-troxell-708587.jpg" }, { "id": "5", "title": "Hamburger", "rating": 4.6, "img": "https://i.ibb.co/d4N2B0L/pexels-valeria-boltneva-1199957.jpg" }, { "id": "6", "title": "Popcorn", "rating": 4.8, "img": "https://i.ibb.co/0qV2Zj1/pexels-pixabay-33129.jpg" }, { "id": "7", "title": "Candy", "rating": 4.5, "img": "https://i.ibb.co/HtBZDrL/pexels-foodie-factor-539447.jpg" }]
function FoodList() {
    return (
        <div style={{ padding: 20 }}>
            <Grid container spacing={2} justify="space-around">
                {foodList.map(food => (
                    <Grid key={food.id} item>
                        <FoodItem food={food} />
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}

export default FoodList;