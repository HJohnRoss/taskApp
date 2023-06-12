import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

class BoardService {
  getAll() {
    return axiosInstance.get("/boards/all")
  }

  getOne(id) {
    return axiosInstance.get(`/boards/${id}`)
  }

  // not finished:
  getRecent() {
    return axiosInstance.get("/boards/recent")
  }

  create(data) {
    return axiosInstance.post("/boards/new")
  }

  // NOT MADE YET:
  // createRegister(data) {
  //   return axiosInstance.post(`/register`, data)
  // }
  // deleteBoard(id) {
  //   return axiosInstance.delete(`/Board/${id}`)
  // }

  // updateBoard(data) {
  //   return axiosInstance.put(`/Boards/${data.id}`, data)
  // }

  // getOneBoard(id) {
  //   return axiosInstance.get(`/Board/${id}`)
  // }
}

export default new BoardService();