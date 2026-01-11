import React from 'react'
import CategoryPage from './CategoryPage'
import DairyBanner from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
        <CategoryPage title='Dairy & Eggs' bgImage={DairyBanner} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy