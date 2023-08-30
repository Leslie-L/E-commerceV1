import { useContext } from "react";
import {ShoppingCartContext} from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import CheckOutCart from "../CheckOutCart";
import { Link } from "react-router-dom";

function CheckoutSideMenu() {
    const context =useContext(ShoppingCartContext);
    const total = context.cart.reduce((prev,actual)=>prev+(actual.cantidad * actual.price),0)
    const handleOrder= ()=>{
        const actualOrder = {
            'date':'05-08-2013',
            'cart':context.cart,
            'total':total
        }
        context.setOrders([...context.orders,actualOrder])
        context.setCount(0);
        context.setCart([])
    }
    return(
        <aside className={`${context.isCopen ? 'flex' : 'hidden'} top-20 flex-col  fixed w-[360px] h-[calc(100vh-80px)] right-0 border bg-white rounded-lg`}>
            <div className="flex justify-between items-center p-3">
                <h2>My Cart</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black" onClick={()=>context.closeCart()} />
                </div>
            </div>
            <div className="max-h-4/5 overflow-y-auto">
                {context.cart.map(product=>{
                    return <CheckOutCart key={product.id} props={product}/>
                })}
            </div>
            <div className=" flex justify-between px-2">
                <p>Total: </p>
                <p>${total}</p>
            </div>
            <Link to='/my-order/last'>
                <button 
                 className="w-full m-2 h-8 bg-black text-white font-bold rounded-md" 
                 onClick={()=>handleOrder()}>Checkout</button>
            </Link>
        </aside>
    )
}

export default CheckoutSideMenu