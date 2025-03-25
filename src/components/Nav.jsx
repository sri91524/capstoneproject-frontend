import { useState } from 'react';
import {Link} from 'react-router-dom'
import Cart from '../pages/Cart'
import '../App.css'

function Nav({ cart, setCart }){

    const [isCartOpen, setIsCartOpen] = useState(false);
  
    //on close button click, isCartOpen is set to false
    //on menu cart click, isCartOpen is set to true
    const toggleCart = () =>{
        setIsCartOpen(!isCartOpen);
    }
    return(
        <div className='nav'>
            <h1 className='headertext'>Viva Fashions</h1>  
            <Link to="/">
                <div>Home</div>
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
            
        </div>
    )

}

export default Nav;