import React from 'react';

const Nav = () => {
    return (
        <div>
          <div className='justify-evenly my-10 container mx-auto lg:flex '>
            <div>
              <h2 className='text-2xl font-bold text-center'>Recipe Calories</h2>
            </div>

            <div className='flex justify-between gap-10'>
              <p>Home</p>
              <p>Recipes</p>
              <p>About</p>
              <p>Search</p>
            </div>

            <div className='flex justify-evenly gap-5'>
              <input className='border-solid rounded-3xl bg-slate-200' type="text" placeholder='    Search' />
              <img src="/Frame 5profile.svg" alt="" />
            </div>
        </div>
      </div>
    );
};

export default Nav;