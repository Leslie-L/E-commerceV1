import { useContext } from "react";
import {ShoppingCartContext} from '../../Context'
import Layout from "../../Components/Layout"
import CheckOutCart from '../../Components/CheckOutCart'
function MyOrder() {
  const context =useContext(ShoppingCartContext);
    context.closeCart()
    return (
      <Layout>
        My Order
        <div className="h-4/5 overflow-y-auto">
                {context.orders?.slice(-1)[0].cart.map(product=>{
                    
                    return <CheckOutCart key={product.id+"dif"} props={product} last={true}/>
                })}
        </div>
      </Layout>
    )
  }
  
  export default MyOrder
  