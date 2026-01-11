import AllBanner from "../../assets/all-banner.jpg"
import CategoryPage from '../Category/CategoryPage'

const AllProducts = () => {
  return (
    <div>
        <CategoryPage title='All Products' bgImage={AllBanner} categories={['All']} />
    </div>
  )
}

export default AllProducts