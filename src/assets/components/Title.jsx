import React from 'react'

function Title() {
    return (
        <div className='py-12 '>
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className='text-black text-3xl font-serif'>Characters of Rick & Morty!</a>

                <div className='felx space-x-4'>
                    <input type="radio" name="sort" label="Name"/> Sort Name
                    <input type="radio" name="sort" label="ID" defaultChecked /> Sort ID
                </div>
            </div>
        </div>
    )
}

export default Title