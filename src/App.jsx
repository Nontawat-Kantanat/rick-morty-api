import { useState, useEffect } from 'react'
import axios from 'axios'

const RickandMorty =() => {
  const [characters, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//  For Data
  useEffect (() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => {
      setCharacter(res.data.results.slice(0,9));
      setLoading(false);
    })
    .catch(err =>{
      setError(err);
      setLoading(false);
    });
  },[page]);

// For BTN
  const prevPage = () => {
    if(page > 1) {
      setPage(prevPage => prevPage -1);
    }
  };

  const nextPage = () => {
    setPage(nextPage => nextPage +1 );
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(characters)


  return (
    <div>

      {/* data */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {characters.map(character => (
        <div
          key={character.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            width: '150px',
          }}
        >
          <img
            src={character.image}
            alt={character.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3 style={{ fontSize: '16px' }}>{character.name}</h3>
          <p style={{ margin: '5px 0' }}>{character.species}</p>
        </div>
      ))}
    </div>

    {/* btn */}
    <footer>
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </footer>

  </div>
);
};

export default RickandMorty
