import axios from "axios";
const BASE_URL=import.meta.env.VITE_API_BASE_URL

//Post Order
export async function createOrder(){
    const res = await axios.post(`${BASE_URL}/api/product`,{products});
    return res.data;
}