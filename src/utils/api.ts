export const fetchAnimals = async () => {
    try {
      const response = await fetch('https://animals.azurewebsites.net/api/animals');
      if (!response.ok) {
        throw new Error('Failed to fetch animals');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching animals:', error);
      return [];
    }
  };
  
  export const getAnimal = async (id: string) => {
    try {
      const response = await fetch(`https://animals.azurewebsites.net/api/animals/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch animal');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching animal with ID ${id}:`, error);
      return null;
    }
  };
  
  export const feedAnimal = async (id: string) => {
    try {
      const response = await fetch(`https://animals.azurewebsites.net/api/animals/${id}/feed`, { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to feed animal');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error feeding animal with ID ${id}:`, error);
    }
};
  