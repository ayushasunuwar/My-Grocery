import Heading from "../Heading/Heading"
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import MeatCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button"


const Category = () => {
  const renderCards = (category.map(card => {
    return (
      <div>
         {/* Cards */}
      <div className="flex-1 basis-[300px]" key={card.id}>

        {/* Image Content */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} alt="" className="absolute bottom-0"/>
        </div>

      {/* Card Content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Button content="Show All"/>
        </div>
        
      </div>
      </div>
    )
  }))

  return (
    <section>
        <div className="max-w[1400px] mx-auto px-10 py-20">
            <Heading highlight="Shop" heading="by Category" />

            {/* Category Cards  */}
            <div className="flex flex-wrap gap-10 md:mt-15">
              {renderCards}
            </div>
        </div>
    </section>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description: 'Fresh, organic produce sourced daily from local farms.',
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description: 'Fresh, organic produce sourced daily from local farms.',
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description: 'Fresh, organic produce sourced daily from local farms.',
    image: MeatCat,
  },
]