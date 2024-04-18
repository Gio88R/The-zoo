import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAnimals } from '../utils/api';
import './home.css'

const HomePage: React.FC = () => {
  const [animals, setAnimals] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnimalsData = async () => {
      const animalsData = await fetchAnimals();
      setAnimals(animalsData);
    };

    fetchAnimalsData();
  }, []);

  return (
    <div>
      <h1>Välkommen till mitt Zoo!</h1>
      <div className='main'>
      <ul>
        {animals.map(animal => (
          <div key={animal.id}>
            <Link to={`/animals/${animal.id}`}>
            <img src={animal.imageUrl} alt={animal.name} style={{ width: '200px', height: '200px' }} />
              <h3>{animal.name}</h3>
              <p>{animal.shortDescription}</p>
            </Link>
            <br></br>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default HomePage;
