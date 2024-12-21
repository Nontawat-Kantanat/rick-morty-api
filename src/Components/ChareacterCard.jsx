import React from 'react'

const ChareacterCard =({ character }) => {
  return (
    <div className='border-2 border-black rounded-lg shadow-md bg-white p-4 flex'>
      <img
        className='rounded-md w-1/3 h-auto object-cover mr-4' 
        src={character.image} alt={character.name} />
        <div className='flex flex-col justify-center'>
      <h2 className='font-serif text-2xl text-left'>{character.name}</h2>
      <p className='font-serif text-lg text-left'>{character.species}</p>
      </div>
    </div>
  );
};

export default ChareacterCard;