import React, { useEffect, useState } from 'react'
import { fetchData } from '../Utils/fetchData'
import Card from './Card'

function Hero() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      fetchData().then(data => setProducts(data))
    }, [])
    

  return (
    <> {products === undefined ? <p>Loading...</p> :  <div className='w-full flex flex-col gap-12 py-24'>

    
    <div className='text center flex justify-center items-center'>
      <p className='text-[44px] font-black'>Welcome to Naxi</p>
    </div>

    <div className='container mx-auto flex justify-center items-start flex-col'>
      <p>Drinks</p>
      <div className='flex flex-wrap gap-4 '>
          {products?.drinks?.map((drink, index) => {
              return(
                      <Card products={drink} key={index}/>
                  
              )
          })}
      </div>
    </div>

    <div className='container mx-auto flex justify-center items-start flex-col'>
      <p>Food</p>
      <div className='flex flex-wrap gap-4 '>
          {products?.food?.map((drink, index) => {
              return(
                      <Card products={drink} key={index}/>
                  
              )
          })}
      </div>
    </div>
</div>}
   
    </>
    
  )
}

export default Hero
