import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

class UserService {

  createRegister(data) {
    return axiosInstance.post(`/register`, data)
  }

  login(data) {
    return axiosInstance.get("/login", data)
  }

  // NOT MADE YET:
  // deleteUser(id) {
  //   return axiosInstance.delete(`/user/${id}`)
  // }

  // updateUser(data) {
  //   return axiosInstance.put(`/users/${data.id}`, data)
  // }

  // getOneUser(id) {
  //   return axiosInstance.get(`/user/${id}`)
  // }
}

export default new UserService();