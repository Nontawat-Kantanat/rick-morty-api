import { useState, useEffect } from 'react'
import axios from 'axios'

//Components
import Title from './assets/components/Title';



function App() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState([1,2,3,4,5,6,7,8,9]);

  const fetchAPI = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${number}`);
    setData(response.data);
  }

  useEffect(() => {
    fetchAPI();
  }, [number])

  console.log(data);

  const prevPage = () => {
    setNumber((number)=>number - 1)
  }
  const nextPage = () => {
    setNumber((number)=>number + 1)
  }

  

  return (
    <div className='bg-[#D3FFE6]'>
      <Title />


      <div className='grid grid-cols-3  justify-items-center gap-12 rounded p-12'>
        {data.map(val => (
          <div key={val.id}>
            <div className='border-4 border-black rounded bg-white '>
              <img src={val.image} className='' />
              <div className="">
                <h1 className="text-2xl font-serif">{val.name}</h1>
                <h1 className="text-2xl font-serif">{val.species}</h1>
              </div>
            </div>


          </div>
        ))}
      </div>

      <footer className='py-12'>
            <div className='container mx-auto text-center flex justify-between'>
                <button onClick={prevPage} className="bg-[#FFFFFF]  text-black py-2 px-4 border border-black rounded-full">
                    Previous
                </button>
                <button onClick={nextPage} className="bg-[#60A85F] text-black  py-2 px-4 border border-black rounded-full">
                    Next
                </button>
            </div>
        </footer>
        <div></div>
    </div>
    
  )
}

export default App
