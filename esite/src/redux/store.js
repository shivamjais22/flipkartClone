import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getProductsReducer,getProductDetailsReducer} from './reducers/productReducer.js';
import {cartReducer} from './reducers/cartReducer';

const reducer =combineReducers({
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})
  
const MiddleWare=[thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...MiddleWare))
);

export default store;