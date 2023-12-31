import { createContext,useState,useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] =useState(0)
    //notification
    const [notify, setNotify] = useState(false);
    //modals
    const [isPDopen,setIsPDopen] =useState(false)
    const [isCopen,setIsCopen] =useState(false)
    //product 
    const [product,setProduct] = useState({})
    //my orders
    const [cart, setCart] = useState([])
    const [orders,setOrders] = useState([])
    //searchProduct
    const [searchProduct,setSearchProduct] = useState('');
    //Info products
    const [items, setItems] = useState([]);
    //filtered products
    const [filteredItems, setFilteredItems] = useState([]);
    const [filteredItemsLoading, setFilteredItemsLoading] = useState(false);
    useEffect(()=>{
        setFilteredItemsLoading(true)
        const getData =  async () =>{
        const response =  await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
        setFilteredItems(data);
        setFilteredItemsLoading(false)
        }
        getData();
    },[])
    //filtered
    const filteredByWord = () =>{
        const newItems =items.filter(item=>item.title.toLowerCase().includes(searchProduct.toLowerCase()) ||searchProduct.length-1 < 1 );
        setFilteredItems(newItems);
    }
    // control modals
    const openDetail = ()=>{
        setIsCopen(false)
        setIsPDopen(true)
    }
    const closeDetail = ()=>{
        setIsPDopen(false)
    }

    const openCart = ()=>{
        setIsCopen(true)
        setIsPDopen(false)
    }
    const closeCart = ()=>{
        setIsCopen(false)
    }
    const controlNotification=() =>{
        setNotify(true)
        setTimeout(() => {
          setNotify(false)
        }, 2000);
        
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
            closeCart,
            orders,
            setOrders,
            items, 
            setItems,
            searchProduct,
            setSearchProduct,
            filteredItems,
            filteredByWord,
            notify,
            setNotify,
            controlNotification,
            filteredItemsLoading
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}