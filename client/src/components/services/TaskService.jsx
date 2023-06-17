import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

class TaskService {

    getAll() {
        return axiosInstance.get("/tasks/all")
    }

    getOne(id) {
        return axiosInstance.get(`/tasks/${id}`)
    }

    create(data) {
        return axiosInstance.post("/tasks/new", data)
    }

    delete(id) {
        return axiosInstance.delete(`/tasks/${id}`)
    }
}

export default new TaskService();