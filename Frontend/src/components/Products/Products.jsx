import Button from "../Button/Button";
import Heading from "../Heading/Heading"


const Products = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood'];

  return (
    <section>
        <div className="max-w-[1400px] mx-auto px-10 py-20">
            <Heading highlight="Our" heading="Products"/>

            {/* Tabs */}
            <div>
              {categories.map(categor => {
                return (
                  <Button/>
                )
              })}
            </div>
        </div>
    </section>
  )
}

export default Products