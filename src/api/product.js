import axios from 'axios';

//create new product
export async function createProduct(product){
    try{
        const res = await axios.post("/api/product",product);
        return res.data;
    }catch(error){
        console.log(`api error -${error}`);
    }    
}

//Get all products
export async function getAllProducts(){
    const res = await axios.get("/api/product");
    return res.data;
}

//Get a specific product
export async function getProduct(prodId){
    const res = await axios.get(`/api/product/${prodId}`);
    return res.data;
}

//update a product
export async function updateProduct(prodId, product){
    const res = await axios.patch(`/api/product/${prodId}`,product);
    return res.data;
}

//Delete a product
export async function deleteProduct(prodId){
    await axios.delete(`/api/product/${prodId}`);
}