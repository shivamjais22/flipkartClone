import axios from 'axios';
import { apiUrl } from '../constants/appConfig';


export const authenticateSignup= async(user)=>{
    try {
        return await axios.post(`${apiUrl}/signup`,user)
    } catch (error) {
        console.log('error while callig signup api');
    }
}

export const authenticateLogin= async(user)=>{
    try {
        return await axios.post(`${apiUrl}/login`,user);
    } catch (error) {
        console.log('error while callig login api');
    }
}