import { useContext } from 'react';
import {ShoppingCartContext} from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
function CheckOutCart(parameters) {
    const context = useContext(ShoppingCartContext);
    const props=parameters['props'];
    const deletItemCart=(id)=>{
        const copy = [...context.cart];
        const index = copy.findIndex(item=>item.id==id);
        context.setCount(context.count-copy[index]['cantidad'])
        copy.splice(index,1);
        context.setCart(copy);
       
    }
    const incrementItemCart=(id)=>{
        const copy = [...context.cart];
        const index = copy.findIndex(item=>item.id==id);
        copy[index]['cantidad']++;
        context.setCart(copy);
        context.setCount(context.count+1)
    }
    const decrementItemCart=(id)=>{
        const copy = [...context.cart];
        const index = copy.findIndex(item=>item.id==id);
        copy[index]['cantidad']--;
        context.setCart(copy);
        if(copy[index]['cantidad']==0)
            deletItemCart(id);
        context.setCount(context.count-1)
    }

    return(
        <div className='flex justify-between px-2 py-2 gap-2 scroll-mr-2'>
            <figure>
                <img className='w-20 h-20  rounded-lg' src={props.image} alt={props.title} />
            </figure>
            <div className=' w-full flex flex-col'>
                <p className='font-bold'>{props.title}</p>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <button className='w-6 h-6 bg-gray-300 rounded-l-md' onClick={()=>decrementItemCart(props.id)}>-</button>
                        <p className='border-black-100 px-1'>{props.cantidad}</p>
                        <button className='w-6 h-6 bg-gray-300 rounded-r-md'onClick={()=>incrementItemCart(props.id)}>+</button>
                    </div>
                    <p>Total: ${props.cantidad * props.price} </p>
                </div>
            </div>
            <div>
                <XMarkIcon className="h-4 w-4 text-gray" onClick={()=>deletItemCart(props.id)} />
            </div>
        </div>
    )
}
export default CheckOutCart;