import { useState } from 'react';
import {Link} from 'react-router-dom'
import Cart from '../pages/Cart'
import '../App.css'
import bannerImage from '../images/viva-img.jpg'

function Nav({ cart, setCart }){

    const [isCartOpen, setIsCartOpen] = useState(false);
  
    //on close button click, isCartOpen is set to false
    //on menu cart click, isCartOpen is set to true
    const toggleCart = () =>{
        setIsCartOpen(!isCartOpen);
    }
    return(
        
    <div className="header-container">
   
        <div className='nav'> 
            <div className="full-width-image">
                <img src={bannerImage} alt="bannerImage" />
            </div>           
            <h1 className='headertext'>VIVA Fashions</h1>  
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/admin/viewproduct">
                <div>Manage Product</div>
            </Link>
            <div onClick ={toggleCart} style={{cursor: 'pointer', marginRight: '30px'}}>
                <div> Cart</div>  
                {cart.length > 0 && (
                    <span className='cartcountbadge'>{cart.length}</span>
                )}                          
            </div>
            {isCartOpen &&
                <div className ="cart-container">
                    <button className="close-cart" onClick={toggleCart}>X</button>
                    <Cart cartItems={cart} setCart={setCart}></Cart>
                </div>
            }
            <Link to="/searchnews">
                <div>News Article</div>
            </Link>
        </div>  
    </div>
    )

}

export default Nav;