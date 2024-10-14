import React from 'react'
import './styles.css'

const ProductDetail = () => {
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white '>
        <div className='flex items-center justify-between p-6'>
            <h2 className='font-medium text-xl'> Detail </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


            
        </div>
    </aside>
  )
}

export default ProductDetail