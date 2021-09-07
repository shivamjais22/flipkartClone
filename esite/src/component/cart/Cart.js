import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import CardItem from "./cartItem";


const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px'
    },
    leftcomponent: {
        width: '67%',
    },
    rightcomponent: {

    },
    header: {
        padding: "15px 24px ",
        background: '#fff',
    }
});

const Cart = () => {

    const classes = useStyle();

    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
        console.log(cartItems);
    })


    return (
        <>
            {
                cartItems.length ?
                    <Box className={classes.component}>
                        <Box className={classes.leftcomponent}>
                            <Box className={classes.header}>
                                <Typography style={{ fontWeight: 600, fontSize: 18 }} >My Cart({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item =>(
                                  <CardItem item={item}/>
                                ))
                            }
                        </Box>
                        <Box className={classes.rightcomponent}>

                        </Box>
                        <p>hello</p>
                    </Box>
                    :
                    <Box className={classes.component} >
                        <p>empty</p>
                    </Box>
            }
        </>
    )
}
export default Cart;
