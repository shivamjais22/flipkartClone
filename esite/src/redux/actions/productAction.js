import axios  from "axios";
import * as action from '../constants/productConstant';
import { apiUrl } from "../../constants/appConfig";

export const getProducts= () => async (dispatch)=>{
    try {
        const {data}=await axios.get(`${apiUrl}/products`);
        dispatch({type: action.GET_PRODUCT_SUCCESS,payload:data});
         
    } catch (error) {
        dispatch({type:action.GET_PRODUCT_FAIL,payload:error.response});
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
       // dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`${apiUrl}/products/${id}`);

        dispatch({
            type: action.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: action.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response
        });

    }
};