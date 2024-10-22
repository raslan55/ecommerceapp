import React, { useState } from 'react'
import Card from '../Card/Card'
import { useEffect } from "react";

export default function Products() {


    const DataURL ="https://fakestoreapi.com/products";

    const [products,setproducts] =useState([])
    fetch(DataURL).then((res)=> res.json()).then((data)=>setproducts(data))
    useEffect(()=>{
  
  
    },[])
  return (
    <div>
      <div className='container mt-5'>
<div className='row'>


    {products.map((product)=>  {

return(
    <div className='col-4  mt-3 mb-3' key={product.id}>
    <Card product={product} />
   </div>
)
    }


    )}
   
 
</div>
      </div>
    </div>
  )
}
