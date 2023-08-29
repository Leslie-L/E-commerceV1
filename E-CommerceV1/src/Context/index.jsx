import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] =useState(0)
    const [isPDopen,setIsPDopen] =useState(false)
    const [isCopen,setIsCopen] =useState(false)
    const [product,setProduct] = useState({})
    const [cart, setCart] = useState([])

    const openDetail = ()=>{
        setIsPDopen(true)
    }
    const closeDetail = ()=>{
        setIsPDopen(false)
    }

    const openCart = ()=>{
        setIsCopen(true)
    }
    const closeCart = ()=>{
        setIsCopen(false)
    }
    

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isPDopen,
            openDetail,
            closeDetail,
            product,
            setProduct,
            cart,
            setCart,
            isCopen,
            openCart,
            closeCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}