import { IoHeart } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-white fiexd top-0 right-0 left-0">
        <nav className="max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold">Gr<span className="text-orange-500 uppercase">o</span>cify</a>

            {/* Desktop menu */}
            <ul className="flex items-center gap-x-15">
                <li>
                    <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Home</a>
                </li>
                <li>
                    <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a>
                </li>
                <li>
                    <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
                </li>
                <li>
                    <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a>
                </li>
            </ul>

            {/* Nav Action */}
            <div className="flex items-center gap-x-5">
                {/* Input Field */}
                <div className="flex p-1 border-2 border-orange-500 rounded-full">
                    <input type="text" name="text" id="text" placeholder="Search.." autoComplete="off"
                    className="flex-1 h-[5vh] p-x-3 focus:outline-none"/>
                    <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl">
                        <IoSearchSharp />
                    </button>
                </div>

                <a href="#" className="text-zinc-800 text-2xl">
                    <IoHeart />
                </a>

                <a href="#" className="text-zinc-800 text-2xl">
                    <GiShoppingBag />
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar