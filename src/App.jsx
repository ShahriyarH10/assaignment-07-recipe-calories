import { useEffect, useState } from 'react'
import './App.css'
import Recipes from './Components/Recipes'
import Nav from './Components/Nav'
import Banner from './Components/Banner/Banner'

function App() {
  const [foods, setfoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
    .then((res) => res.json())
    .then((data) => {setfoods(data)});
  }, []);

  const handleCart = (f) => {
    const isExist = cart.find(item => item.id == f.id);

    if(!isExist) {
      setCart([...cart, f])
    } else {
      alert("already in cart");
    }
  }


  return (
    <>
      <Nav></Nav>
      
      <Banner></Banner>

      <div className='text-center'>
        <h3 className='text-3xl font-bold'>Our Recipes</h3>
        <p>A recipe is a set of instructions that explains how to prepare, cook, or bake a dish.</p>
      </div>

      <div className='flex justify-between my-10 container mx-auto '>
        <div className='space-y-5 p-3'>
          {
            foods.map(fd => <Recipes foods={fd} handleCart={handleCart}></Recipes>)
          }
        </div>

        <div className='border-solid border-2 border-gray-400 rounded-lg p-3 w-1/2'>
          <h3 className='text-2xl font-bold text-center'>Want to cook: </h3>
          <hr />
          <div className='flex justify-between'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>

          <div>
            {cart.map((item, index) => (
              <p>{index + 1}</p>
              <p>{item.recipe_name}</p>
              <h5>{item.preparing_time}</h5>
              <h5>{item.calories}</h5>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
