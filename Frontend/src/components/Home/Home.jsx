import Category from "../Category/Category"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Values from "../Values/Values"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Category />
        <Values/>
    </div>
  )
}

export default Home