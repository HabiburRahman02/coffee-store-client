import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";


function App() {

  const coffees = useLoaderData();
  return (
    <>
      <h1 className='text-5xl text-center my-12 font-bold'>Our Coffee Shop: {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
