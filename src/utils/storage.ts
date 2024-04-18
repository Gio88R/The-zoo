export const saveAnimalData = (id: string, data: any) => {
    localStorage.setItem(`animal_${id}`, JSON.stringify(data));
  };
  
  export const getAnimalData = (id: string) => {
    const animalData = localStorage.getItem(`animal_${id}`);
    return animalData ? JSON.parse(animalData) : null;
  };
  