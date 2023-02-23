

import React from 'react'
import { ProductContract } from '../contracts/product.contract';
import { useFetch } from '../hooks/useFetch'

const ShoppingComponent = () => {
    const categorys:string[]=useFetch("https://fakestoreapi.com/products/categories");
    const products:ProductContract[] =useFetch("https://fakestoreapi.com/products");
  return (
    <div style={{margin:"15px"}}>
        <h2>Shoping Online</h2>
        <div>
            <label htmlFor="">Select Category</label>
            <div>
                <select name="" id="">
                    {
                       categorys.map((category:string)=>
                       <option key={category}>{category}</option> )
                    }
                </select>
                <div>
                    <ol>
                        {
                            products.map((product)=>
                            <li key={product.id}>{product.image}</li> )
                        }
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingComponent