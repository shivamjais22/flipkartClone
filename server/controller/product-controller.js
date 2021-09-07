import Product from "../modle/productSchema.js"; 



 export const getProducts=async(request,response)=>{
     try {
     const products= await Product.find({});
      response.json(products);
         
     } catch (error) {
         console("error",error.massage);
     }
 }
 export const getProductById=async(request,response)=>{
    try {
    const product= await Product.find({'id':request.params.id});
     response.json(product);
        
    } catch (error) {
        console("error",error.massage);
    }
}