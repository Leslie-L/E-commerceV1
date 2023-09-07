import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useContext } from "react";
import {  useParams } from "react-router-dom";

import {ShoppingCartContext} from '../../Context'
import ProductDetail from "../../Components/ProductDetail";

const categories = {
    "electronics":"electronics",
    "jewelery":"jewelery",
    "men":"men's clothing",
    "women":"women's clothing"
}
function Home() {
  const context =useContext(ShoppingCartContext);
  const params = useParams();
  const category = categories[params.category] ?? undefined;
  const handleSearch = (event)=>{
    console.log(event.target.value.length)
    if(event.target.value.length === 0){
      context.setSearchProduct('');
    }else{
      context.setSearchProduct(event.target.value)
    }
    context.filteredByWord()

  }

  return (
    <Layout>
      <div className="w-full">
        <h1 className="font-bold text-lg text-center">List of products</h1>
      </div>
      <div className="mb-4">
        <input type="text" name="" id="" 
        className="w-80 h-8 rounded-md"
        placeholder="Search a product" 
        value={context.searchProduct}
        onChange={handleSearch}
        />
      </div>
      <section className="grid grid-cols-4 gap-4">
        {
          context.filteredItems.map((item)=>{
            if(category){
              if(category === item.category)
              return <Card key={item.id} data={item}></Card>
            }else{ 
              return <Card key={item.id} data={item}></Card>
            }
          })
        }
      </section>
      <ProductDetail></ProductDetail>
    </Layout>
  )
}

export default Home
