import React from 'react'
import Button from '../Button/Button'

const Discount = () => {
  return (
    <section className='bg-zinc-100'>
        <div className='flex max-w-[1400px] mx-auto px-10 py-10'>
            <span>20%</span>

            <div>
                <h3 className='text-7xl text-zinc-800 font-bold'>First Order Discount</h3>
                <p className='text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis facilis enim veniam beatae nam, magnam molestiae aperiam illo voluptate esse provident neque ad debitis odio quidem, 
                    ducimus temporibus quos nihil!</p>
                <Button content="Get a discount"/>
            </div>
        </div>
    </section>
  )
}

export default Discount