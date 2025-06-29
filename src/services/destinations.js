import axios from "axios"; 

const destinationsAPI = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/destinations` ?? 'http://localhost:3000/api/v1/destinations'
});

const getDestinations = async () => {
  try {
    const response = await destinationsAPI.get('/', {
      params: {
        page: 1,
        limit: 6,
      }
    });
    return response.data.results;
  } catch (error) {
    if (error.status === 404) return [];
  }
}

const getDestinationByName = async (name) => {
  try {
    const response = await destinationsAPI.get('/', { params: { search: name } });

    if (response.data.results.length === 0) {
      return {};
    }

    return response.data.results[0];
  } catch (error) {
    if (error.status === 404) return [];
  }
}

const getDestinationById = async (id) => {
  const response = await destinationsAPI.get(`/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_DESTINATION_TOKEN_JWT}`
    }
  });
  return response.data;
}

export {
  getDestinations,
  getDestinationById,
  getDestinationByName,
}
