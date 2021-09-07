import { Box, Button,  makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ShoppingCart, FlashOn } from "@material-ui/icons";
import { addToCart } from "../../redux/actions/cartAction";
import {useDispatch }from 'react-redux';
import { useHistory } from "react-router";

const useStyle= makeStyles({
    leftContainer:{
     padding:'40px 0 0 80px',
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #fefefe',
        width:'95%'
    },
    button:{
        height:50,
        width:'46%',
        borderRadius:2
    },
    addToCart:{
        background:'#ff9f00',
        marginRight:10,
        color:'#fff'
    },
    buynow:{
        background:'#fb641b',
        color:'#fff'
    }

})



const ActionItem=({prod})=>{

   const classes=useStyle();
   const history =useHistory();

 const  dispatch = useDispatch();
   
  const proceedToCart=()=>{
      dispatch(addToCart(prod.id));
      history.push('/cart');
  }



    return(
     <Box className={classes.leftContainer} >
         <img src={prod.detailUrl} className={classes.image} />
         <Button onClick={proceedToCart} variant="contained" className={clsx( classes.button,classes.addToCart)}><ShoppingCart/>Add to Cart</Button>
         <Button variant="contained" className={clsx(classes.button,classes.buynow)}><FlashOn/> Buy Now</Button>
     </Box>
    )
}


export default ActionItem;