import { useState, useEffect } from 'react'
import axios from 'axios'
import RadioContorls from './Components/RadioControls'
import CharacterCard from './Components/ChareacterCard'
import ButtonControls from './Components/ButtonControls'

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);
  const [checkedSort, setCheckedSort] = useState('id');

  const fetchCharacters = async (page) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      setCharacter(res.data.results.slice(0, 9));
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const handleSort = (key) => {
    setCheckedSort(key);
    setSortOption(key);
    const sorted = [...characters].sort((a, b) => {
      if (key === 'name') return a.name.localeCompare(b.name);
      return a.id - b.id;
    });
    setCharacter(sorted);
  };


  return (
    <div className='bg-green-100 min-h-screen flex flex-col'>
      <div className='flex justify-between items-center px-4 my-8'>
        <h1 className='text-4xl font-serif ml-8'>
          Characters of Rick & Morty!
        </h1>
        <RadioContorls onSort={handleSort} checkedSort={checkedSort} />
      </div>
      <div className='flex-grow grid  grid-cols-3 gap-4 px-20'>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <ButtonControls onPageChange={setPage} currentPage={page} />
    </div>
  );
};

export default App
