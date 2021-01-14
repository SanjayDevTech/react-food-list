import { Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 20,
        width: 330,
        maxHeight: 300,
    },
    media: {
        paddingTop: '56.25%'
    },
}));

function FoodItem({ food }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                image={food.img}
                title={food.title} />
            <CardContent>
                <Typography variant="h5">
                    {food.title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FoodItem;