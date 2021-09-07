import {products}  from './constants/product.js';
import Product from './modle/productSchema.js';


const DefaultData = async()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("data imported");
        
    } catch (error) {
        console.log('error', error.message);
    }

}
 
export default DefaultData;