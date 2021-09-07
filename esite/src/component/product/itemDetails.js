import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductDetails } from "../../redux/actions/productAction";
import { LocalOffer as Badge } from "@material-ui/icons";


import ActionItem from "./Actionitem";


import clsx from 'clsx';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        margin: '0 80px',
        background: '#fff',
        display: 'flex'

    },
    rightContainer: {
        marginTop: 50,
        '&>*': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign:'baseline',
        '&>*': {
            fontSize: 14,
            marginTop: 10,
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28,
    },
    badge:{
        fontSize:14,
        marginRight:10,
        color:"#00CC00"
    }
})



const DetailView = ({ match }) => {

    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


    const { product } = useSelector(state => state.getProductDetails);

   const date =new Date(new Date().getTime()+(5*24*60*60*1000));


    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProductDetails(match.params.id));


    }, [dispatch])

    return (
        <Box className={classes.component}>
            {product && product.length > 0 &&

                product.map((prod) => (
                    <Box className={classes.container}>
                    <Box style={{ minWidth: '40%' }}>
                        <ActionItem prod={prod} />
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>{prod.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                            3 Rating & 1 Review
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}> ₹{prod.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike> ₹{prod.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388EC3' }}>{prod.price.discount}off</span>
                        </Typography>
                        <Typography style={{fontWeight:600,marginTop:20}} >Available offer</Typography>
                        <Box className={classes.smalText}>
                            <Typography><Badge className={classes.badge}/>Baspecial PriceGet extra 18% off (price inclusive of discount) </Typography>
                            <Typography><Badge className={classes.badge}/>Bank offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card </Typography>
                            <Typography><Badge className={classes.badge}/>Bank offerFlat  ₹100 off on first Flipkart Pay Later order of  ₹500 and aboves</Typography>
                            <Typography><Badge className={classes.badge}/>offerBuy 2 items save 5%; buy 3 or more save 10%see all products</Typography>
                        </Box>

                     <Table>
                         <TableBody>
                             <TableRow className={classes.smallText} >
                                 <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                 <TableCell style={{fontWeight:600}} >{date.toDateString()} | 40₹ </TableCell>
                             </TableRow>
                             <TableRow className={classes.smallText}>
                                 <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                 <TableCell>No Warranty</TableCell>
                             </TableRow>
                             <TableRow className={classes.smallText}>
                                 <TableCell className={classes.greyTextColor} >Seller</TableCell>
                                 <TableCell className={classes.smallText}>
                                     <span style={{color:'#2874f0'}} >SupperComNet</span>
                                     <Typography>GST invoice Avaible</Typography>
                                     <Typography>14 Days Return Policy</Typography>
                                     <Typography>View more seller starting from</Typography>
                                </TableCell>    

                             </TableRow>
                             <TableRow>
                                 <TableCell colSpan={2}>
                                     <img src={sellerURL} style={{width:390}} />
                                 </TableCell>
                                 
                             </TableRow>
                             <TableRow className={classes.smallText}>
                                 <TableCell className={classes.greyTextColor}>Description</TableCell>
                                 <TableCell>{prod.description}</TableCell>
                             </TableRow>
                             
                         </TableBody>
                     </Table>

                    </Box>
                </Box>
                ))
            }
        </Box>
    )

}
export default DetailView;
