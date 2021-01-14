import logo from './logo.svg';
import { AppBar, Badge, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";
import { cartSelector } from "./redux/store";

const useStyles = makeStyles(() => ({
    grow: {
        flexGrow: 1,
    },
    toolbarIcons: {
        maxHeight: 50
    }
}));
function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <img className={classes.toolbarIcons} src={logo} alt='' />
                <div className={classes.grow} />
                <Typography variant="h5" >React food list</Typography>
                <div className={classes.grow} />
                <IconButton color="inherit">
                    <Badge badgeContent={props.cartCount} max={9} color="error">
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

const mapStateToProps = state => {
  let count = 0;
  cartSelector(state).forEach((cartItem) => {
    if (cartItem.count > 0) {
      count += cartItem.count;  
    }
  });
  return {
     cartCount: count
  }
};

export default connect(mapStateToProps)(Header);
