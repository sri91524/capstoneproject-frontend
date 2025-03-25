import Form from '../components/Form';
import ProductList from '../components/ProductList';
import Cart from './Cart'
import { useState,useEffect } from 'react';

function Product({addToCart}){

    //to store products in state
    const [productResult, setProductResult] = useState([]); 
     //To set cart items in state
     const [cart, setCart] = useState([]);
     //to toggle cart visibility
      const[isCartOpen, setIsCartOpen] = useState(false);

  // to get list of products from db based on category and search filter
  const getProducts = async(prodcategory, prodsearch) =>{
    try{
      const response = await fetch(`/api/product?category=${prodcategory}&search=${prodsearch}`);
      const data = await response.json();

      if (!response.ok) {  
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(data);

      setProductResult(data);

    }catch(e){
      console.error(e);
    }
  }
//Initial load of products without filter
  useEffect(() =>{
    getProducts('','');    
  },[]) 



  return (
    <>   
    <Form productsearch = {getProducts}/>
    <div className='img-container'>
      {
        productResult && productResult.length > 0?
        productResult.map(product => 
        <ProductList product={product} key={product._id} addToCart = {addToCart} />): //Passing addToCart function to ProductList
        (
          <h3 className="title">No matching products found for your selection.</h3>
        )
      }   
    </div>
   
    </>
  )
}

export default Product;