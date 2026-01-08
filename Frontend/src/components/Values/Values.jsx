import Heading from "../Heading/Heading"
import { FaHeart, FaLeaf, FaShieldAlt, RiSeedlingFill } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png"

const Values = () => {
  return (
    <section>
        <div className="max-w-[1400px] mx-auto px-10 py-20">
            <Heading highlight="Our" heading="Values"/>

            <div></div>
            <div>
                <img src={Basket} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Values

const values = [
    {
        id: 1,
        title: 'Trust',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eius aut illo quaerat minima suscipit quae explicabo quibusdam. Sint facere eum molestiae expedita, numquam ipsa impedit. Veniam natus quas impedit.',
        icon: <FaHeart/>,
    },
      {
        id: 2,
        title: 'Always Fresh',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eius aut illo quaerat minima suscipit quae explicabo quibusdam. Sint facere eum molestiae expedita, numquam ipsa impedit. Veniam natus quas impedit.',
        icon: <FaLeaf/>,
    },
      {
        id: 3,
        title: 'Food Safety',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eius aut illo quaerat minima suscipit quae explicabo quibusdam. Sint facere eum molestiae expedita, numquam ipsa impedit. Veniam natus quas impedit.',
        icon: <FaShieldAlt/>,
    },
      {
        id: 4,
        title: '100% Organic',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eius aut illo quaerat minima suscipit quae explicabo quibusdam. Sint facere eum molestiae expedita, numquam ipsa impedit. Veniam natus quas impedit.',
        icon: <RiSeedlingFill/>,
    },
]