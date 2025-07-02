import axios from "axios";

const testimonialsAPI = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/testimonials` ?? 'http://localhost:3000/api/v1/testimonials'
});

const getTestimonials = async (page = 1, limit = 3) => {
  try {
    const response = await testimonialsAPI.get('/', {
      params: {
        limit,
        page
      }
    });
    return response.data;
  } catch (error) {
    console.error(error.message);  
  }
}

export {
  getTestimonials
}
