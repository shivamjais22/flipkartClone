import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { authenticateSignup,authenticateLogin } from "../../service/app";


const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: "90vh",
    },
    wrapper: {
        display: 'flex'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: "45px 35px",
        '&>*': {
            color: '#FFFFFF',
            fontWeight: 600,
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '&>*': {
            marginTop: 20,
        }

    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginbtn: {
        textTransform: 'none',
        background: "#FB6418",
        color: '#FFFFFF',
        height: 48,
        borderRadius: 2,


    },
    requestbtn: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        textAlign: 'cenet',
        marginTop: 'auto',
        fontSize: 14,
        color: "#2874f0",
        fontWeight: 600,
        cursor: 'pointer',
    },
    error:{
        fontSize:10,
        color:'#ff6161',
        marginTop:10,
        fontWeight:600,
        lineHeight:0,
    }
})
const initialValue={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Oders,Wishlist and Recommendations'
    },
    signup:{
       view:'signup',
       heading:'Looks Like you are new here',
       sunHeading:'Sign up with your mobile number to get started'
    }
}

const signupInitialValues ={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const loginInitialValues={
    username:'',
    password:''
}

const Login = ({ open, setOpen,setAccount }) => {

    const classes = useStyle();
    const [account, setToggleAccount] = useState(initialValue.login);
    const [signup, setSignup]=useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setToggleAccount(initialValue.login);
    }
    const toggleUserAccount=()=>{
        setToggleAccount(initialValue.signup);
    }

    const signupUser=async()=>{
      let response= await authenticateSignup(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.username);
    }
    const loginUser=async()=>{
        let response= await authenticateLogin(login);
        if(!response){
        setError(true);
        setTimeout(() => setError(false), 3000);
        return;
        }
        handleClose();
        setAccount(login.username);
        setLogin(loginInitialValues);
      }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});

    }
    
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});

    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box className={classes.wrapper}>
                    <Box className={classes.image} >
                        <Typography variant='h5' >{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>

                    </Box>
                    {
                        account.view == 'login' ?

                            <Box className={classes.login}  >
                                <TextField onChange={(e)=> onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                                <TextField onChange={(e)=> onValueChange(e)} name='password' label='Enter Password' />
                                {
                                    error && <Typography className={classes.error}> Invalid user name or password</Typography>
                                }
                                <Typography className={classes.text} >By continuing ,you agree to Flipkart's Termsof use and privacy policy</Typography>
                                <Button variant="contained" className={classes.loginbtn} onClick={()=>loginUser()} >Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant='contained' className={classes.requestbtn} >Request OTP</Button>
                                <Typography onClick={()=>toggleUserAccount()} className={classes.createText} >New to Flipkart? Create an account</Typography>

                            </Box> :


                            <Box className={classes.login}  >
                                <TextField onChange={(e)=> onInputChange(e)} name='firstname' label='Enter Fristname' />
                                <TextField onChange={(e)=> onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField onChange={(e)=> onInputChange(e)} name='username' label='Enter Username' />
                                <TextField onChange={(e)=> onInputChange(e)} name='email' label='Enter Email' />
                                <TextField onChange={(e)=> onInputChange(e)} name='password' label='Enter Password' />
                                <TextField onChange={(e)=> onInputChange(e)} name='phone' label='Enter Phone' />
                                <Button variant='contained'onClick={()=> signupUser()} className={classes.loginbtn}>Signup</Button>

                            </Box>
                    }
                </Box>

            </DialogContent>

        </Dialog>
    )
}
export default Login;