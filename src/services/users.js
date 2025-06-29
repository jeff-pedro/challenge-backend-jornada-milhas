import axios from "axios";

const usersAPI = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/users` ?? 'http://localhost:3000/api/v1/users'
});

const getUserById = async (id) =>  {
  const response = await usersAPI.get(`/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_USER_TOKEN_JWT}`
    }
  });
  return response.data;
}

const postUser = async (data) =>  {
  try {
    const response = await usersAPI.post('/', data);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message);
  }
}

export {
  getUserById,
  postUser
}
