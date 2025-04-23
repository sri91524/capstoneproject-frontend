import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react'
import './App.css'

import Cart from './pages/Cart'
import Product from './pages/Product'
import ViewProduct from './pages/Admin/ViewProduct';
import AddOrEditProduct from './pages/Admin/AddOrEditProduct';
import SearchNews from './pages/SearchNews';
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage when app loads
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  //In order to retrieve cart in nav bar on click on cart menu
  //it is passed from app component to nav & product
   const addToCart = (product) =>{
      //check if item already exist in cart
      let itemExist = cart.some(item => item.prodname === product.prodname);
  
      //if item not exist, then add product to cart
      if(!itemExist){
          setCart(prevCart => [...prevCart,product]);          
      }
      else{
          alert("Item already exist in the cart");
      }
    }

  return(  
    <div>       
      <Nav cart={cart} setCart={setCart}/>
       <Routes>
        <Route path="/" element={<Product addToCart={addToCart}/>}/>
        <Route path="/admin/viewproduct" element={<ViewProduct/>}/>
        <Route path="/admin/addoreditproduct" element={<AddOrEditProduct/>}/>
        {/*Product Edit route*/}
        <Route path="/admin/addoreditproduct/:productId" element={<AddOrEditProduct/>}/>
        <Route path="/cart" element={<Cart cartItems={cart} setCart={setCart}/>} />
        <Route path="/searchnews" element={<SearchNews />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
