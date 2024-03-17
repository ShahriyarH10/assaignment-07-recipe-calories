import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div> 
          <div className='bg-img my-10 container mx-auto rounded-3xl flex flex-col justify-center items-center text-center'>
            <div className='text-white space-y-5'>
              <h1 className='text-5xl font-bold'>Discover an exceptional <br /> cooking class tailored for you!</h1>
              <p>Cooking involves important life skills, particularly patience, problem-solving, and creativity. <br /> As children wait for pasta to boil or for their chicken to cook, they will learn that they need to be patient to achieve the results that they want.</p>
            </div>
              <br />
            <div className='flex gap-5 font-bold'>
              <button className='bg-green-500 rounded-3xl p-3 border-solid border-2 border-green-500'>Explore Now</button>
              <button className='bg-none text-white rounded-3xl p-3 border-solid border-2 border-white '>Our Feedback</button>
            </div>
          </div>
        </div>
    );
};

export default Banner;