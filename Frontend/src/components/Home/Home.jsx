import Category from "../Category/Category"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Values from "../Values/Values"
import Products from "../Products/Products"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Category />
        <Values/>
        <Products/>
    </div>
  )
}

export default Home