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
      
      <div className='my-10 container mx-auto'>
        <h1 className='text-5xl font-bold'>Discover an exceptional <br /> cooking class tailored for you!</h1>
      </div>
    </>
  )
}

export default App
