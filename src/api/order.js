import axios from "axios";

//Post Order
export async function createOrder(){
    const res = await axios.post("/api/product",{products});
    return res.data;
}