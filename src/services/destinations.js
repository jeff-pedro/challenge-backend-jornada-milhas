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
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOGEwYTUzOS0yNmU4LTRiMjktODBlYy1lM2Q0YzQ1ODU3OTciLCJ1c2VybmFtZSI6ImplZmZlcnNvbi5zYW50b3MiLCJpYXQiOjE3NDk5NTU4MjUsImV4cCI6MTc1MDIxNTAyNX0.niPcAayP5aXnn2sodPEkgOrQFYHr9593MISIv9xhQLM"
    }
  });
  return response.data;
}

export {
  getDestinations,
  getDestinationById
}
