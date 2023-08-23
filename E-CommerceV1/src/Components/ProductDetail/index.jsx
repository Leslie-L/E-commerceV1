import { useContext } from "react";
import {ShoppingCartContext} from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetail() {
    const context =useContext(ShoppingCartContext)
    return(
        <aside className={`${context.isPDopen ? 'flex' : 'hidden'} flex-col  fixed w-[360px] h-[calc(100vh-80px)] right-0 border bg-white rounded-lg`}>
            <div className="flex justify-between items-center p-3">
                <h2>Details</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black" onClick={()=>context.closeDetail()} />
                </div>
            </div>
                <div className="flex flex-col p-10">
                    <figure className="w-full h-72 p-5 rounded-lg">
                        <img className="w-full h-full" src={context.product.image} alt={context.product.title} />
                    </figure>
                    <h2 className="text-bold text-lg">{context.product.title}</h2>
                    <p>{context.product.description}</p>
                    <div className="flex justify-between mb-5">
                        <p>{context.product.category}</p>
                        <p className="text-bold">${context.product.price}</p>
                    </div>

                </div>
            
        </aside>
    )
}

export default ProductDetail