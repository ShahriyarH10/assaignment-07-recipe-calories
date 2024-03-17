import './App.css'

function App() {


  return (
    <>
      <div className='flex justify-evenly my-10 container mx-auto'>
        <div>
          <h2 className='text-2xl font-bold'>Recipe Calories</h2>
        </div>

        <div className='flex justify-between gap-10'>
          <p>Home</p>
          <p>Recipes</p>
          <p>About</p>
          <p>Search</p>
        </div>

        <div className='flex justify-evenly gap-5'>
          <input className='border-solid rounded-3xl bg-slate-200' type="text" placeholder='Search' />
          <img src="/public/Frame 5profile.svg" alt="" />
        </div>
      </div>
      
      <div className='bg-img my-10 container mx-auto rounded-3xl flex flex-col justify-center items-center text-center'>
        <div className='text-white'>
          <h1 className='text-5xl font-bold'>Discover an exceptional <br /> cooking class tailored for you!</h1>
          <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
        </div>
      
        <div className='flex gap-5 font-bold'>
          <button className='bg-green-600 rounded-3xl p-3 border-solid border-2 border-green-500'>Explore Now</button>
          <button className='bg-none text-white rounded-3xl p-3 border-solid border-2 border-white '>Our Feedback</button>
        </div>
      </div>
    </>
  )
}

export default App
