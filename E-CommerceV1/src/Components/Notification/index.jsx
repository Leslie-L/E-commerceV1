import { CheckCircleIcon } from '@heroicons/react/24/solid'
function Notification() {
    return(
        <p className="bg-black w-40  h-12 text-white text-center fixed  top-24 left-[45%] z-10 rounded-md flex items-center justify-center">
           <CheckCircleIcon className="h-6 w-6 text-white"/> Item Added
        </p>
        
    )
}
export default Notification

