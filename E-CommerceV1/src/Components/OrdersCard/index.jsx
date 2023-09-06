import { ChevronRightIcon } from '@heroicons/react/24/solid'
function OrdersCard({props}) {

    return(
        <div className='flex justify-between px-2 py-2 gap-2 mb-2 border border-black rounded-md shadow-md hover:bg-blue-200'>
            <p className='flex flex-col py-2'>
                <span><strong>Order ID:</strong> {props.id}</span>
                <span><strong>Date:</strong> {props.date}</span>
                <span><strong>Total:</strong> ${props.total}</span>
            </p>
            <ChevronRightIcon className="h8 w-8 text-gray"  />
        </div>
    )
    
}
export default OrdersCard;