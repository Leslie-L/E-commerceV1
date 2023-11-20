import Layout from "../../Components/Layout"
import { useContext } from "react";
import {ShoppingCartContext} from '../../Context'
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";
function MyOrders() {
  const context =useContext(ShoppingCartContext);

    return (
      <Layout>
        <h2 className="font-bold mb-4 text-lg pt-4">Order History</h2>
        <div>
          {context.orders.map((item,index)=>(
            <Link  key={item.id} to={`/my-order/${item.id}`}>
              <OrdersCard
                props={item}
              />
            </Link>
          ))}
        </div>
      </Layout>
    )
  }
  
  export default MyOrders
  