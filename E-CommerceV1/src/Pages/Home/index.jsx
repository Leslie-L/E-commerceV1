import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useContext, useState } from "react";
import {  useParams } from "react-router-dom";

import {ShoppingCartContext} from '../../Context'
import ProductDetail from "../../Components/ProductDetail";
import Notification from "../../Components/Notification";

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
        <h1 className="font-bold text-lg text-center pt-4">List of products</h1>
      </div>
      <div className="mb-4">
        <input type="text" name="" id="" 
        className="w-80 h-8 rounded-md border-2 border-blue-200 pl-2"
        placeholder="Search a product" 
        value={context.searchProduct}
        onChange={handleSearch}
        />
      </div>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {
          context.filteredItemsLoading && <p className="text-center text-xl ">Loading ...</p>
        }
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
      {context.notify && <Notification/>}
    </Layout>
  )
}

export default Home
