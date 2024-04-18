import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { feedAnimal, getAnimal } from '../utils/api';

const AnimalPage: React.FC = () => {
 const { id } = useParams<{ id: string }>();
 const [animal, setAnimal] = useState<any>(null);
 const [feeding, setFeeding] = useState(false); // State för att kontrollera när djuret matas

 useEffect(() => {
    const fetchAnimalData = async () => {
      if (!id) {
        console.error('Animal ID is undefined');
        return; 
      }
      const animalData = await getAnimal(id);
      setAnimal(animalData);
    };

    fetchAnimalData();
 }, [id]);

 const handleFeed = async () => {
    if (!id) {
      console.error('Animal ID is undefined');
      return; 
    }
    setFeeding(true); // Sätter feeding till true för att visa att djuret matas
    await feedAnimal(id);
    const updatedAnimal = await getAnimal(id);
    setAnimal(updatedAnimal);
    setFeeding(false); // Återställer feeding till false när matningen är klar
 };

 return (
    <div>
      {animal ? (
        <>
          <h2>{animal.name}</h2>
          <img src={animal.imageUrl} alt={animal.name} style={{ width: '200px', height: '200px' }} />
          <p>{animal.longDescription}</p>
          <p>Senast matad: {animal.lastFed}</p>
          {/* Knappen för att mata djuret */}
          {!animal.isFed ? (
            <button onClick={handleFeed} disabled={feeding}>Mata djur</button>
          ) : (
            <p>Djuret är redan matat</p>
          )}
        </>
      ) : (
        <p>Laddar djurdata...</p>
      )}
    </div>
 );
}

export default AnimalPage;
