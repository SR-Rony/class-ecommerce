import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:1010/api"
})

export default api