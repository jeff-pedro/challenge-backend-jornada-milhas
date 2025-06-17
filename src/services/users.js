import axios from "axios";

const usersAPI = axios.create({
  baseURL: process.env.BASE_URL ?? 'http://localhost:3000/api/v1/users'
});

const getUserById = async (id) =>  {
  const response = await usersAPI.get(`/${id}`, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOGEwYTUzOS0yNmU4LTRiMjktODBlYy1lM2Q0YzQ1ODU3OTciLCJ1c2VybmFtZSI6ImplZmZlcnNvbi5zYW50b3MiLCJpYXQiOjE3NDk5NTU4MjUsImV4cCI6MTc1MDIxNTAyNX0.niPcAayP5aXnn2sodPEkgOrQFYHr9593MISIv9xhQLM"
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
