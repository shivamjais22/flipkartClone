import { Card ,Box, Typography,makeStyles } from "@material-ui/core";
import clsx from 'clsx';



const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop:'1px solid #f0f0f0',
    },
    leftComponent: {
        marginTop: 20,
    },
    rightComponent: {
        marginTop: 20,
    },
    smallText:{
        fontSize:14,
    },
    greyTextColor:{
        color:'#878787',
    },
    price:{
        fontSize:10,
        fontWeight:600,
    }
})


const CardItem = ({ item }) => {

    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


    return (
      <Card className={classes.component}>
          <Box className={classes.leftComponent}>
              hiiiiiiiiiiiiii
          </Box>
          <Box className={classes.rightComponent}>
              <Typography>{item.title.longTitle}</Typography>
              <Typography className={clsx(classes.smallText,classes.greyTextColor)} style={{marginTop:10}} >Seller:SuperComNet
                 <span><img src={fassured} style={{width:50,marginLeft:10}} /></span>
              </Typography>
              <Typography style={{margin:'20px 0'}} >
                  <span className={classes.price} >{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                  <span className={classes.greyTextColor}><strike>{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                  <span style={{color:'#388E3C'}}>{item.price.discount}0ff</span>
              </Typography>
             
          </Box>

      </Card>
    )
}
export default CardItem;