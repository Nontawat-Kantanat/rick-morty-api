import { useState, useEffect } from 'react'
import axios from 'axios'

const RickandMorty = () => {
  const [characters, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  For Data
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => {
        setCharacter(res.data.results.slice(0, 9));
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [page]);

  // For BTN
  const prevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const nextPage = () => {
    setPage(nextPage => nextPage + 1);
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className="min-h-screen bg-green-100 p-12">

      {/* title */}
      <h1 className="text-4xl font-serif text-left text-gray-800 mb-8">
        Characters of Rick & Morty!
      </h1>


      {/* data */}
      <div className="grid grid-cols-3 gap-8">
        {characters.map(character => (
          <div
            key={character.id}
            className="bg-white rounded-lg overflow-hidden flex ">
            <img
              src={character.image}
              alt={character.name}
              className="w-1/3 object-cover" />
            <div className="p-4 w-2/3">
              <h3 className="text-lg font-serif text-gray">
                {character.name}
              </h3>
              <p className="text-md font-serif text-gray">
                {character.species}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* btn */}
      <div className="flex justify-between items-center mt-20">
        <button
          onClick={prevPage}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4  rounded-full"
        >
          Previous</button>
        <button onClick={nextPage}
          className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4  rounded-full"
        >
          Next</button>
      </div>

    </div>
  );
};

export default RickandMorty
