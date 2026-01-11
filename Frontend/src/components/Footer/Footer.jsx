import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20'>
        <div className='flex flex-wrap max-w-[1400px] gap-y-12 mx-auto px-10'>
            <div className='flex-1 basis-[300px]'>
                <a href="#" className="text-2xl font-bold">Gr<span className="text-orange-500 uppercase">o</span>cify</a>

                <p className='text-zinc-600 mt-6 max-w-[350px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem! Voluptatibus labore alias, asperiores eaque molestiae, eligendi nulla, repellat delectus non eveniet perspiciatis rem voluptates neque et beatae aliquid enim!
                </p>

                <p className='text-zinc-800 mt-6'>
                    2026 &copy; all rights reserved
                </p>
            </div>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>
                        Company
                    </h5>
                </li>
                <li>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>About</a>
                </li>
                <li>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>FAQ</a>
                </li>
            </ul>

              <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>
                        Support
                    </h5>
                </li>
                <li>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>Support Center</a>
                </li>
                <li>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>Feedback</a>
                </li>
                <li>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
                </li>
            </ul>

             <div className="flex-1">
                    <h5 className='text-zinc-800 text-2xl font-bold'>
                        Stay Connected
                    </h5>

                    <p className='mt-6 text-zinc-600'>
                        Questions or feedback? <br />
                        We'd love to hear from you.
                    </p>

                    <div className='flex p-1 rounded-lg mt-6 bg-white'>
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Email Address' 
                        className='h-[5vh] pl-4 flex-1 focus:outline-none'/>
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                            <MdKeyboardArrowRight/>
                        </button>
                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer