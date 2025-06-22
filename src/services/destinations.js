import axios from "axios"; 

const destinationsAPI = axios.create({
  baseURL: process.env.BASE_URL ?? 'http://localhost:3000/api/v1/destinations'
});

const getDestinations = async () => {
  try {
    const response = await destinationsAPI.get('/');
    return response.data;
  } catch (error) {
    if (error.status === 404) return [];
  }
}

const getDestinationById = async (id) => {
  const response = await destinationsAPI.get(`/${id}`, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMzYyZGRmOS04OWRkLTQ3NGQtOTZjYi0yMDJkNWFiMmI2MTciLCJ1c2VybmFtZSI6ImFkbWluLmpvcm5hZGEgbWlsaGFzIiwiaWF0IjoxNzUwNTY0NjI2LCJleHAiOjE3NTA4MjM4MjZ9.01wJPdmNLKQc-wIIiJJ71a8aH39FanYd_PE7t-oPEy4"
    }
  });
  return response.data;
}

export {
  getDestinations,
  getDestinationById
}
