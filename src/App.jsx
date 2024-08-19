import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl text-center my-12 font-bold'>Our Coffee Shop: {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
