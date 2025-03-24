import { useState } from 'react';
import {Link} from 'react-router-dom'
import Cart from '../pages/Cart'

function Nav({ cart }){

    const [isCartOpen, setIsCartOpen] = useState(false);
    console.log(`Navbar - ${cart}`);
    //on close button click, isCartOpen is set to false
    //on menu cart click, isCartOpen is set to true
    const toggleCart = () =>{
        setIsCartOpen(!isCartOpen);
    }
    return(
        <div className='nav'>
            <Link to="/">
                <div>Home</div>
            </Link>
            <div onClick ={toggleCart} style ={{cursor :'pointer'}}>
                <div> Cart</div>            
            </div>

            {isCartOpen &&
                <div className ="cart-container">
                    <button className="close-cart" onClick={toggleCart}>X</button>
                    <Cart cart = {cart}></Cart>
                </div>
            }
            
        </div>
    )

}

export default Nav;