import { NavLink } from "react-router-dom"
function Navbar() {
    const activeStyle = 'underline underline-offset-4';
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light" >
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-xl">
                    <NavLink
                        to='/'>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>les@gmail.com</li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({isActivate})=>isActivate ? activeStyle : undefined}
                        >
                        SignIn
                    </NavLink>
                </li>
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )
}
export default Navbar