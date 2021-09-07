import { makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    component: {
        marginTop: 40
    },
    logout:{
        marginLeft:20
    }
})

const Profile = ({ account, setAccount }) => {

    const [open, setopen] = useState(false);
    const classes = useStyle();

    const handleClose = () => {
        setopen(false);
    }
    const handleClick = (event) => {
        setopen(event.currentTarget);
    }
    const logout=()=>{
        setAccount("");
    }
    return (
        <>
           <Link> <Typography onClick={handleClick} style={{ marginTop: 4 }}>{account}</Typography></Link>
            <Menu

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={()=>{handleClose();logout();}}>
                    <PowerSettingsNewIcon fontSize="small" color="primary" />
                    <Typography className={classes.logout} >Logout</Typography></MenuItem>

            </Menu>
        </>
    )
}
export default Profile;