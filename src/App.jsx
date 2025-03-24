import {Route, Routes} from 'react-router-dom';
import {useState} from 'react'
import './App.css'

import Cart from './pages/Cart'
import Product from './pages/Product'
import Nav from './components/Nav'

function App() {
  const [cart, setCart] = useState([]);
  //In order to retrieve cart in nav bar on click on cart menu
  //it is passed from app component to nav & product
   const addToCart = (product) =>{
      //check if item already exist in cart
      let itemExist = cart.some(item => item.prodname === product.prodname);
  
      //if item not exist, then add product to cart
      if(!itemExist){
          setCart(prevCart => [...prevCart,product]);
          console.log(cart);
      }
      else{
          alert("Item already exist in the cart");
      }
    }

  return(  
    <div>
      <h1>Viva Fashion</h1>   
      <Nav cart={cart}/>
       <Routes>
        <Route path="/" element={<Product addToCart={addToCart}/>}/>
        <Route path="/cart" element ={<Cart cart={cart}/>}/>
      </Routes>
    </div>
  )
}

export default App;
