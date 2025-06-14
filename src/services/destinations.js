import axios from "axios"; 

const destinationsAPI = axios.create({
  baseURL: process.env.BASE_URL ?? 'http://localhost:3000/api/v1'
});

const getDestinations = async () => {
  try {
    const response = await destinationsAPI.get('/destinations');
    return response.data;
  } catch (error) {
    if (error.status === 404) return [];
  }
}

export {
  getDestinations
}
