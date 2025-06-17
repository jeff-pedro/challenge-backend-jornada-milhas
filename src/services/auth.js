import axios from "axios";

const authAPI = axios.create({
  baseURL: process.env.BASE_URL ?? 'http://localhost:3000/api/v1/auth'
});

const login = async (data) => {
  try {
    const response = await authAPI.post('/login', data);
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao realizar o login:', error.message);
  }
}

export {
  login
}