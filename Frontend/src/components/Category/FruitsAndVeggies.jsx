import React from 'react'
import CategoryPage from './CategoryPage'
import FruitsBanner from "../../assets/fruits-banner.jpg"

const FruitsAndVeggies = () => {
  return (
    <div>
        <CategoryPage title='Fruits & Vegetables' bgImage={FruitsBanner} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default FruitsAndVeggies