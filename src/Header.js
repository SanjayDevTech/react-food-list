import logo from './logo.svg';
import { AppBar, Badge, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    grow: {
        flexGrow: 1,
    },
    toolbarIcons: {
        maxHeight: 50
    }
}));
function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <img className={classes.toolbarIcons} src={logo} alt='' />
                <div className={classes.grow} />
                <Typography variant="h5" >React food list</Typography>
                <div className={classes.grow} />
                <IconButton color="inherit">
                    <Badge badgeContent={10} max={9} color="error">
                        <ShoppingCart className={classes.toolbarIcons} />
                    </Badge>
                </IconButton>
                <IconButton edge="end" color="inherit">
                    <AccountCircle className={classes.toolbarIcons} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;