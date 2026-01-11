import React from 'react'
import CategoryPage from './CategoryPage'
import SeafoodBanner from "../../assets/seafood-banner.jpg"

const MeatAndSeafood = () => {
  return (
    <div>
        <CategoryPage title='Meat & Seafood' bgImage={SeafoodBanner} categories={['Meat','Seafood']}/>
    </div>
  )
}

export default MeatAndSeafood