import { Loader, Placeholder } from 'rsuite';

import React, { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";

export default function Products() {
  const DataURL = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DataURL);
        const data = await response.json();
        setproducts(data);

        setTimeout(() => {
          setIsLoading(false);
        }, 20000);
      
      } catch (error) {
        console.log("error message",error)
        setIsLoading(false);

      }
    };

    fetchData();

  }, []);
  return (
    <>


      <div className="container mt-5">
     

     
        {isLoading?(<div className="text-center">  
          <Placeholder.Paragraph rows={8} />
          <Loader  size="lg" content="loading..." vertical />
          </div>)
          
           : ( <div className="row">
          {products.map((product) => {
            return (
              <div className="col-4  mt-3 mb-3" key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>)}
       
      </div>
    </>
  );
}
