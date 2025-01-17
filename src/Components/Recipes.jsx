import React from 'react';

const Recipes = ({foods, handleCart}) => {
    return (
        <div className='border-solid border-2 border-gray-400 rounded-lg p-3 space-y-5'>
            
            <img className='p-5 rounded-3xl w-96 h-40' src={foods.recipe_image} />
            <h2 className='text-2xl font-bold'>{foods.recipe_name}</h2>
            <p>{foods.short_description}</p>

            <hr />
            <div>
                <h3 className='text-xl font-bold'>Ingredients</h3>
                <ul className='list-disc px-5'>
                  {foods.ingredients.map((ingredient, index) => (
                    <li>  {ingredient}</li>
                  ))}
            </ul>
            </div>

            <hr />
            <div className='flex gap-20'>
                <div className='flex'>
                    <img src="/Frameclock.svg" alt="" /> 
                    <p>{foods.preparing_time}</p>
                </div>
                
                <div className='flex'>
                    <img src="/Framefire.svg" alt="" />
                    <p>{foods.calories}</p>
                </div>
            </div>
            
            <button onClick={() => handleCart(foods)} className='bg-green-500 rounded-3xl p-2 border-solid border-2 border-green-500'>Want to Cook</button>
        
        </div>
    );
};

export default Recipes;