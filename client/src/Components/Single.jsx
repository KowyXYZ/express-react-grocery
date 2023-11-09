import React from 'react'
import { NavLink, Link, useLoaderData, useParams } from 'react-router-dom'

function Single() {

    const {id} = useParams()
    const loader = useLoaderData()
  return (
    <div className='flex justify-center items-center py-24 flex-col gap-4'>
      <Link className='underline' to='/'>Idi Nazad</Link>
      <p>{loader.name}</p>
      <img className='w-96 rounded-3xl' src={loader.img} alt={loader.name} />
      <p className='text-[24px] font-semibold'>Cena: {loader.price} Din</p>
      <p className='w-[400px] text-center'>Sastojci: {loader.ingredients}</p>
    </div>
  )
}

export const singleProductLoader = async({params}) => {
    let {id} = params
    let data = await fetch(`http://localhost:5000/api/${id}`)
    return data.json()
}

export default Single
