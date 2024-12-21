import React from 'react'

const RadioControls = ({ onSort, checkedSort }) => {
  const RadioButton = ({ name, value, onChange, label }) => {
    return (
      <label className='flex items-center  gap-1 mt-4'>
        <input type='radio' name={name} value={value} onChange={() => onChange(value)} checked = {checkedSort === value}/>
        {label}
      </label>
    )
  };

    return (
      <div className='flex justify-end gap-4 mb-4 mr-8 text-xl font-serif'>
        <RadioButton
          name="sort"
          value="name"
          onChange = {onSort}
          label = "Sort Name"
        />
        <RadioButton
          name="sort"
          value="id"
          onChange = {onSort}
          label="Sort ID"
        />
      </div>
    )
};

export default RadioControls;