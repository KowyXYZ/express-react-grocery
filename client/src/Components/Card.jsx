import React from 'react'
import { Link } from 'react-router-dom'

function Card({products}) {
  return (
    <Link to={`/product/${products.id}`} className='bg-white text-black text-center justify-center font-semibold rounded-2xl border-2 border-[gray]'>
   
      <img className='w-56 rounded-2xl' src={products.img} alt={products.name} />
      <p>{products.name}</p>
      <p className='text-[gray] font-light'>{products.price} Din</p>
    </Link>
  )
}

export default Card
