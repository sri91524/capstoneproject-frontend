import axios from 'axios';
const BASE_URL=import.meta.env.VITE_API_BASE_URL

//create new product
export async function createProduct(product){
    try{
        const res = await axios.post(`${BASE_URL}/api/product`,product);
        return res.data;
    }catch(error){
        console.log(`api error -${error}`);
    }    
}

//Get all products
export async function getAllProducts(){
    const res = await axios.get(`${BASE_URL}/api/product`);
    return res.data;
}

//Get a specific product
export async function getProduct(prodId){
    const res = await axios.get(`${BASE_URL}/api/product/${prodId}`);
    return res.data;
}

//update a product
export async function updateProduct(prodId, product){
    const res = await axios.patch(`${BASE_URL}/api/product/${prodId}`,product);
    return res.data;
}

//Delete a product
export async function deleteProduct(prodId){
    await axios.delete(`${BASE_URL}/api/product/${prodId}`);
}