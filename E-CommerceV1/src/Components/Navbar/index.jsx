import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../Context'
import { useContext, useState } from "react";

function Navbar() {
    const [open,setOpen]= useState(false)
    const activeStyle = 'underline underline-offset-1';
    const context =useContext(ShoppingCartContext);
    const showCart= ()=>{
        context.openCart()
    }
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light bg-white shadow-md" >
            <div className="block">
            <div className="flex items-center">
                <NavLink className="font-semibold text-xl"
                    to='/'>
                    FakeShop
                </NavLink>
                <button className="md:hidden" onClick={()=>setOpen(!open)}>
                    {open && <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>}
                    {!open && <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>} 
                </button>
            </div>
            <ul className={`${open ? 'block' : 'hidden'} md:flex md:border-0 md:top-0 md:left-0 md:static items-center gap-3 absolute top-20 bg-white border-2 left-2`}>
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive}) => {
                            if(isActive)
                            return {
                              'text-decoration': 'underline'
                            };
                          }}
                        >
                        All
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink
                        to='/men'
                        style={({ isActive}) => {
                            if(isActive)
                            return {
                              'text-decoration': 'underline'
                            };
                          }}
                        >
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/women'
                        style={({ isActive}) => {
                            if(isActive)
                            return {
                              'text-decoration': 'underline'
                            };
                          }}
                        >
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        style={({ isActive}) => {
                            if(isActive)
                            return {
                              'text-decoration': 'underline'
                            };
                          }}
                        >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        style={({ isActive}) => {
                            if(isActive)
                            return {
                              'text-decoration': 'underline'
                            };
                          }}
                        >
                        Jewelery
                    </NavLink>
                </li>
            </ul>
            </div>
            <ul className={`flex items-center gap-3`}>
                <li>
                    <NavLink
                        to='/my-orders'
                        style={({ isActive}) => {
                            if(isActive)
                            return {
                              'text-decoration': 'underline'
                            };
                          }}
                        >
                        My Orders
                    </NavLink>
                </li>
            
                <li className="flex" onClick={()=>showCart()}>
                    <ShoppingCartIcon className="h-6 w-6 text-black" />
                    {context.count}
                </li>
            </ul>
        </nav>
    )
}
export default Navbar