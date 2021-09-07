import { apiUrl } from "../../constants/appConfig";
import axios from 'axios';
import * as actionTypes from '../../constants/addToCart';




export const addToCart = (id) => async(dispatch) =>{
    
    try {
      const {data} = await axios.get(`${apiUrl}/products/${id}`);
      
      dispatch({type:actionTypes.ADD_TO_CART,
        payload:data[0]
    });
        
    } catch (error) {
     console.log(`error while calling api ${id}`);   
     
    }
}