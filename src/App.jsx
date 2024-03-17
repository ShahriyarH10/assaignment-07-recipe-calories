import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Recipes from './Components/Recipes'
import Nav from './Components/Nav'
import Banner from './Components/Banner/Banner'

function App() {
  const [foods, setfoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
    .then((res) => res.json())
    .then((data) => {setfoods(data)});
  }, []);

  const handleCart = (f) => {
    const isExist = cart.find(item => item.recipe_id == f.recipe_id);
    if(!isExist) {
      setCart([...cart, f]);
    } else {
      alert("already in cart");
    }
  };

  const handleNewCart = (recipe) => {
    setCooking([...cooking, recipe]);
  };

  const handleDelete = (recipe_id) => {
    const cookingRecipe = cart.filter(item => item.recipe_id != recipe_id);
    setCart(cookingRecipe);
  };


  return (
    <>
      <Nav></Nav>
      
      <Banner></Banner>

      <div className='text-center'>
        <h3 className='text-3xl font-bold'>Our Recipes</h3>
        <p>A recipe is a set of instructions that explains how to prepare, cook, or bake a dish.</p>
      </div>

      <div className='flex justify-between gap-5 my-10 container mx-auto '>
        <div className='grid grid-cols-2 gap-5'>
          {
            foods.map(fd => <Recipes foods={fd} handleCart={handleCart}></Recipes>)
          }
        </div>

        <div className='border-solid border-2 border-gray-400 rounded-lg p-3 w-[80%] h-1/2 space-y-3'>

          <div>
            <h3 className='text-2xl font-bold text-center'>Want to cook: {cart.length}</h3> 
            <hr />
            <div className='flex justify-between gap-1 text-center'>
              <p></p>
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
              <p></p>
            </div>

            <div>
            <div className='text-center'>
              {cart.map((item, index) => (
                <div key={index} className='flex justify-between gap-16 space-y-1'>
                  <p>{index + 1}</p>
                  <p>{item.recipe_name}</p>
                  <p>{item.preparing_time}</p>
                  <p>{item.calories}</p>
                  <button onClick={()=> handleDelete(item.recipe_id)}>
                  <button onClick={() => handleNewCart(item)} className='bg-green-500 px-3 rounded-3xl border-solid border-2 border-green-500'>Preparing</button>
                  </button>
                  
                </div>
              ))}
            </div>
          </div>
          </div>

          <h3 className='text-2xl font-bold text-center'>Currently cooking: {cooking.length}</h3>
          <hr />
          <div className='flex justify-between gap-1 text-center'>
            <p></p>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
            <p></p>
          </div>
          <div>
          {cooking.map((item, index) =>  (
            <div className='flex justify-between gap-16 space-y-1'>
              <p>{index + 1}</p>
              <p>{item.recipe_name}</p>
              <p>{item.preparing_time}</p>
              <p>{item.calories}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
