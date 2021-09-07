import NavBar from "./NavBar";
import Banner from './Banner';
import { Box, makeStyles } from "@material-ui/core";
import Slide from "./Slide";
import MidSection from "./MidSection";
//import { products } from "../../constants/data";
import { useSelector,useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productAction";
import { useEffect } from "react";

const useStyle = makeStyles({
    component: {
        padding: 10,
        backgroundColor: '#F2F2F2'
    },
    rightwrapper:{
      background:'#FFFFFF',
      padding:5,
      margin:'12px 0 0 10px',
      width:"17%"
    }
})


const Home = () => {
    const classes = useStyle();
    
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
const {products,error}=  useSelector(state => state.getProducts)

const dispatch = useDispatch();

useEffect(() => {
    dispatch(listProducts())
}, [dispatch]);


    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display:'flex'}}>
                    <Box style={{width:'83%'}}>
                        <Slide timer ={true}
                        title="Deals of The Day"
                        data={products} />
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src={adURL} style={{width:230,height:'auto'}}/>
                    </Box>
                </Box>
                
                <Slide timer ={false} title="Discount point" data={products} />
                <MidSection/>
                <Slide timer ={false} title="Discount point" data={products}/>
                <Slide timer ={false} title="Discount point" data={products}/>
            </Box>
        </>
    )
}
export default Home;