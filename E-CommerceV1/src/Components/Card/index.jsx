import { useContext } from "react";
import {ShoppingCartContext} from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid'
function Card(data) {
    const context =useContext(ShoppingCartContext);
    const showProduct = (prod) =>{
        context.setProduct(prod);
        context.openDetail();
    }
    const addProduct= (prod,e) =>{
        e.stopPropagation();
        context.setCount(context.count+1);
        context.controlNotification();
        const indexProd = context.cart.findIndex((item)=>item.id==prod.id)
        if(indexProd>=0){
            const news = [...context.cart];
            const item = {...news[indexProd]};
            item['cantidad']++;
            news.splice(indexProd,1);
            context.setCart([...news,item]);
        }else{
            prod['cantidad']= 1;
            context.setCart([...context.cart,prod])
        }
    }
    return(
        <div className="bg-white cursor-pointer w-56 h-60" onClick={()=>showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-2">{data.data.category}</span>
                <img src={data.data.image} className="w-full h-full  rounded-lg" alt="" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                onClick={(e)=> addProduct(data.data,e)}
                ><PlusIcon className="h-6 w-6 text-black"/></div>
            </figure>
            <p className="flex justify-between">
                <span className="text-xs font-light">{data.data.title}</span>
                <span className="text-lg font-bold">${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card;