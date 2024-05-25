import axios from "axios"

//'http://localhost:5555'

const api = axios.create({
    baseURL: "https://beportfolio.onrender.com"
})

export default api