
import { useEffect,useState } from "react";
import MyCard from "./myCard";

const Products = (props)=>{
    
    const{gender_id, category_id} = props;

    const [products, setProducts] = useState([]);

    useEffect(()=>{
      const fetchData = async () => {
        const data = 
          await (await fetch("http://localhost:5000/product",{method:"get"})).json();
  
        setProducts(data);
        
      };
      fetchData().catch(console.error);
    },[])
    console.log(products);
      
      let productsFiltered = products;
      
    if(gender_id && !category_id){
        productsFiltered = products.filter(product => product.gender_id === gender_id);
    }
    if(!gender_id && category_id){
        productsFiltered = products.filter(product => product.category_id === category_id);
    }
    if(gender_id && category_id){
        productsFiltered = products.filter(product => product.gender_id === gender_id  && product.category_id === category_id);
    }

    return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                productsFiltered.map(product =>{
                    return <MyCard id={product.id} catId={product.category_id} gendId={product.gender_id} key={product.id} title={product.title} description={product.description} price={product.price} image={product.image}/>
                })
                }
            </div>
        </div>
    </section>
    )
}
export default Products;