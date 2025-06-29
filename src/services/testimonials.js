import axios from "axios";

const testimonialsAPI = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/testimonials` ?? 'http://localhost:3000/api/v1/testimonials'
});

const getTestimonials = async () => {
  try {
    const response = await testimonialsAPI.get('/');
    return response.data;
  } catch (error) {
    console.error(error.message);  
  }
}

export {
  getTestimonials
}
