import { useContext } from "react";
import {ShoppingCartContext} from '../../Context'
import {  useParams } from "react-router-dom";
import Layout from "../../Components/Layout"
import CheckOutCart from '../../Components/CheckOutCart'
function MyOrder() {
  const context =useContext(ShoppingCartContext);
  const params = useParams();
  
  const indexPath = params.id ==='last' ? -1 : context.orders.findIndex((item)=>item.id===params.id);
  console.log(isNaN(params.id))
  const order = indexPath < 0 ? context.orders?.slice(-1)[0] : context.orders?.[indexPath]; 
  context.closeCart()
    return (
      <Layout>
        My Order
        <div className="h-4/5 overflow-y-auto">
                {order.cart.map(product=>{
                    
                    return <CheckOutCart key={product.id+"dif"} props={product} last={true}/>
                })}
        </div>
      </Layout>
    )
  }
  
  export default MyOrder
  