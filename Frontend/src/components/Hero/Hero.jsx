import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className="max-w-[1400px] mx-auto px-10 flex items-center pt-15 min-h-screen">
            {/* hero content */}
            <div className='flex-1'>
              <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>
                Export Best Quality...
              </span>

              <h1 className='text-7xl/20 font-bold mt-4'>
                Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br /> in Your City.
              </h1>

              <p className='text-zinc-600 mt-5 mb-10 text-lg max-w-[530px]'>
                Bred for high content of benificial substance. Our products are all fresh and healthy.
              </p>

              <Button content="Shop Now"/>
            </div>

            {/* Hero Image */}
            <div className='flex-1'>
                <img src={Grocery} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero