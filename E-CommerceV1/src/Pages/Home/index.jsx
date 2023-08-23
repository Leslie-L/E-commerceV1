import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useEffect, useState } from "react";
function Home() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const getData =  async () =>{
      const response =  await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
    }
    getData();
  },[])

  return (
    <Layout>
      Home
      <section className="grid grid-cols-4 gap-4">
        {
          items.map((item)=>{
            return <Card key={item.id} data={item}></Card>
          })
        }
      </section>
    </Layout>
  )
}

export default Home
