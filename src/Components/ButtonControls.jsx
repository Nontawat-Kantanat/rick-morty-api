import React from 'react'

const ButtonControls = ({ onPageChange, currentPage }) => {
  const Button = ({ onClick, disabled, label }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-full border-2 border-black text-xl ${disabled ?  'bg-gray-200 text-gray-400 ' : 'bg-green-500 text-white'}`}>
        {label}
    </button>
  );

  return (
    <div className='flex justify-between items-center p-8 font-serif '>
        <Button
            onClick={() => onPageChange(currentPage -1)}
            disabled={currentPage === 1}
            label="Previous"
        />
        <Button
            onClick={() => onPageChange(currentPage +1)}
            label="Next"
        />
    </div>
  )
};

export default ButtonControls;