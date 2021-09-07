 
import {AppBar, Toolbar ,makeStyles,Box,Typography,withStyles} from '@material-ui/core'; 
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';
import { Link } from 'react-router-dom';


 const  useStyle = makeStyles({
     header : {
           background:'#2874f0',
           height: 55
     },
     logo:{
         width:75
     },
     container: {
        display: 'flex'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    component:{
        marginLeft: '12%',
        lineHeight:0,
        textDecoration:'none',
        color:'#fff'
    }
 })

 const ToolBar = withStyles({
     root: {
         minHeight :55
     }
 })(Toolbar);

const Header = () =>{
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>    
                    <img src={logoURL} className={classes.logo} />
                    <Box component="span" className={classes.container}>
                        <Typography className = {classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar/>
                <HeaderButton/>
            </ToolBar>
        </AppBar>

    )
}

export default Header;