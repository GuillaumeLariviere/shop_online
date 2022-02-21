// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/layouts/ProductDetails";
// import { Product } from "../components/models/product.model";



const ProductScreen = () => {

    const{id} = useParams();
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      const fetchData = async () => {
        const data = 
          await (await fetch(`http://localhost:5000/product/${id}`,{method:"get"})).json();
  
        setProducts(data);
        
      };
      fetchData().catch(console.error);
    },[id])
    console.log(products);

        return (
          <>
            <ProductDetails title ={products.title} description={products.description} image={products.image} price={products.price} />
          </>
        );
  
}
export default ProductScreen;