import {Box , Typography} from '@material-ui/core'; 
import { makeStyles } from '@material-ui/styles';
import Carousel from 'react-material-ui-carousel';
import {bannerData} from '../../constants/data';
   
const useStyle = makeStyles({
    image:{
         width:'100%',
         height:280
    },
    carousel:{
        marginTop:10,
    }
})


const Banner =()=>{
    const classes = useStyle();
    return (
        <Carousel
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                background:'#FFFFFF',
                color:'#494949',
                borderRadius:0,
                margin:0
            }
        }}
        className={classes.Carousel}
        >
            {
               bannerData && bannerData.map(image =>( 
                <img src={image} className={classes.image} />
                ))
            }
        </Carousel>
    )
}
export default Banner;
