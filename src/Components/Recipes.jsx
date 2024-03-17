import React from 'react';

const Recipes = ({foods, handleCart}) => {
    return (
        <div className='border-solid border-2 border-gray-400 rounded-lg p-3 space-y-5 w-1/2'>
            
            <img className='p-5 rounded-3xl' src={foods.recipe_image} />
            <h2 className='text-2xl font-bold'>{foods.recipe_name}</h2>
            <p>{foods.short_description}</p>

            <hr />
            <div>
                <h3 className='text-2xl font-bold'>Ingredients</h3>
                <ol className="">
                  {foods.ingredients.map((ingredient, index) => (
                    <li key={index}>{index+1}. {ingredient}</li>
                  ))}
            </ol>
            </div>

            <hr />
            <div className='flex gap-20'>
                <div className='flex'>
                    <img src="/src/assets/Frameclock.svg" alt="" /> 
                    <p>{foods.preparing_time}</p>
                </div>
                
                <div className='flex'>
                    <img src="/src/assets/Framefire.svg" alt="" />
                    <p>{foods.calories}</p>
                </div>
            </div>
            
            <button onClick={() => handleCart(foods)} className='bg-green-600 rounded-3xl p-2 border-solid border-2 border-green-500'>Want to Cook</button>
        
        </div>
    );
};

export default Recipes;