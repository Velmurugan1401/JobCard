import axios from "axios";

const Instance = axios.create({
    baseURL:"https://6420135f25cb65721041db82.mockapi.io/job/"
})

export default Instance